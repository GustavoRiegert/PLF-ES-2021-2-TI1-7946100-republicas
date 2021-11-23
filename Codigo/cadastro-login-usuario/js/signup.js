/**@type HTMLFormElement */
const $form = document.querySelector("#form");

// Functions
function formSubmitListener(event) {
  event.preventDefault();
  const valid = $form.checkValidity();
  console.debug(valid);
  if (!valid) {
    $form.reportValidity();
    return;
  }

  // Form válido, tenta fazer o login
  try {
    const email = $form.elements["email"].value;
    const pwd = $form.elements["password"].value;
    console.debug(email, pwd);
    doLogin(email, pwd);
    showPersistentAlert(undefined, "Login efetuado, redirecionando...");
  } catch (error) {
    console.debug(error);
    showAlert(undefined, error.message, "error");
  }
}

function redirectIfLoggedUser() {
  if (checkLoggedUser()) {
    showPersistentAlert(undefined, "Usuário já logado, redirecionando...");
  }
}

// Event listeners

$form.addEventListener("submit", formSubmitListener);

// Actions
redirectIfLoggedUser();
