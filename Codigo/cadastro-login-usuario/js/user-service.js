/**
 *
 * @param {String} email
 * @param {String} password
 */
function doLogin(email, password) {
  console.debug(email, password);
  if (!checkIfUserAlreadyRegistered(email)) {
    throw new Error("Não exite um usuário no sistema com o e-mail informado.");
  }

  const usersDBStr = localStorage.getItem("users");
  /**@type Array */
  const usersDB = JSON.parse(usersDBStr);
  const user = usersDB.find((u) => u.email === email.trim() && u.password === password);
  if (!user) {
    throw new Error("O e-mail ou senha informados estão incorretos.");
  }

  const loggedUser = {
    name: user.email,
    email: user.email,
    loginDate: new Date(),
  };
  localStorage.setItem("logged_user", JSON.stringify(loggedUser));
}

function doLogout() {
  console.debug("doLogout");
  localStorage.removeItem("logged_user");
}

/**
 * Essa função simula a expiração do login
 */
function checkLoggedUser() {
  const loggedUserStr = localStorage.getItem("logged_user");
  if (!loggedUserStr) {
    doLogout();
    return false;
  }

  const loggedUser = JSON.parse(loggedUserStr);
  /** @type Date */
  const loginDate = new Date(loggedUser.loginDate);
  // const expirationTime = 30 * 60 * 1000; // 30 minutos
  const expirationTime = 30 * 1000; // 30 segundos
  // Checa se o login não expirou
  if (loginDate.getTime() + expirationTime <= new Date().getTime()) {
    doLogout();
    return false;
  } else {
    return true;
  }
}

/**
 *
 * @param {string} email
 * @param {string} password
 * @param {string} profilePictureBase64
 * @param {string} name
 * @param {string} lastName
 * @param {string} phone
 * @param {string} gender
 */
function registerUser(email, password, profilePictureBase64, name, lastName, phone, gender) {
  console.debug(email, password);
  if (checkIfUserAlreadyRegistered(email)) {
    throw new Error("Já exite um usuário no sistema usando o e-mail informado.");
  }

  const usersDBStr = localStorage.getItem("users");

  /**@type Array */
  let usersDB;
  if (usersDBStr) {
    usersDB = JSON.parse(usersDBStr);
  } else {
    usersDB = [];
  }

  const newUser = {
    email: email.trim(),
    password,
    profilePictureBase64,
    name,
    lastName,
    phone,
    gender,
  };
  usersDB.push(newUser);
  localStorage.setItem("users", JSON.stringify(usersDB));
}

/**
 *
 * @param {String} email
 */
function checkIfUserAlreadyRegistered(email) {
  const usersDBStr = localStorage.getItem("users");
  if (!usersDBStr) {
    return false;
  }

  /**@type Array */
  const usersDB = JSON.parse(usersDBStr);
  const userIdx = usersDB.findIndex((u) => u.email === email);
  // Se o idx for diferente de -1 o usuário já existe no sistema
  return userIdx !== -1;
}
