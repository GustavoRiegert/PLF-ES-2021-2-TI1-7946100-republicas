// Global Variables

/**@type HTMLInputElement */
const $formFloatingPassword = document.querySelector("#form-floating-password");
/**@type HTMLFormElement */
const $form = document.querySelector("#form");

// Functions

function formFloatingPasswordListener(event) {
  const pwdStrengthClasses = {
    weak: "pwd-strength--weak",
    soSo: "pwd-strength--so-so",
    good: "pwd-strength--good",
  };

  const regexs = {
    // Letras, Numeros ou Letras e Carateres Especiais ou Numeros e Caracteres Especiais
    soSo: /(?=.*[A-Za-z])(?=.*\W)|(?=.*\D)(?=.*\d)|(?=.*\W)(?=.*\d)/,
    // Letras, Numeros e Caracteres especiais
    // good: /(?=.*[A-Za-z])(?=.*\d)(?=.*\W)/,
    good: /(?=^.{3,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Za-z]).*$/,
  };

  const currentPwd = event.target.value;
  const $pwdStrength = document.querySelector("#pwd-strength");
  $pwdStrength.classList.remove(
    pwdStrengthClasses.weak,
    pwdStrengthClasses.soSo,
    pwdStrengthClasses.good
  );

  if (!currentPwd) {
  } else if (regexs.good.test(currentPwd)) {
    $pwdStrength.classList.add(pwdStrengthClasses.good);
  } else if (regexs.soSo.test(currentPwd)) {
    $pwdStrength.classList.add(pwdStrengthClasses.soSo);
  } else {
    $pwdStrength.classList.add(pwdStrengthClasses.weak);
  }
}

async function formSubmitListener(event) {
  event.preventDefault();
  const valid = $form.checkValidity();
  console.debug("form is valid:", valid);
  $form.classList.add("was-validated");
  if (!valid) {
    $form.reportValidity();
    return;
  }

  // Form válido, tenta cadastra o usuario
  try {
    const profilePictureBase64 = await blobToBase64(
      await resizeImage($form.elements.profile_picture.files[0])
    );
    const email = $form.elements.email.value;
    const name = $form.elements.name.value;
    const lastName = $form.elements.last_name.value;
    const phone = $form.elements.phone.value;
    const gender = $form.elements.gender.value;
    const password = $form.elements.password.value;
    console.debug({
      email,
      password,
      profilePictureBase64,
      name,
      lastName,
      phone,
      gender,
    });

    registerUser(email, password, profilePictureBase64, name, lastName, phone, gender);
  } catch (error) {
    console.debug(error);
    showAlert(undefined, error.message, "error");
    return; // Retorna em caso de erro
  }

  showPersistentAlert(
    "Sucesso",
    `Agora você possui um cadastro no site de repúblicas! Redirecionando para login...`,
    "success"
  );
  // Após 2 segundos redireciona para a página acessar.html
  setTimeout(() => {
    window.location.href = "acessar.html";
  }, 2000);
}

function redirectIfLoggedUser() {
  if (checkLoggedUser()) {
    showPersistentAlert(undefined, "Usuário já logado, redirecionando...");
  }
}

/**
 * @param {Event} event
 */
async function formProfilePictureListener(event) {
  /**@type {HTMLInputElement} */
  const $fileInput = event.target;
  const profilePictureFile = $fileInput.files[0];
  const resizedProfilePicture = await resizeImage(profilePictureFile);

  /**@type {HTMLImageElement} */
  const $imgProfilePicture = document.querySelector("#form-profile-picture-img");
  $imgProfilePicture.src = URL.createObjectURL(resizedProfilePicture);
}

/**
 * Esta função redimensiona a imagem para ela ocupar menos espaço no localStorage
 * https://imagekit.io/blog/how-to-resize-image-in-javascript/
 * https://stackoverflow.com/questions/10333971/html5-pre-resize-images-before-uploading
 * @param {File} pictureFile
 * @returns {Promise<Blob>}
 */
function resizeImage(pictureFile) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      // Calcular scale da imagem
      const MAX_WIDTH = 130; // comprimento maximo em px
      const MAX_HEIGHT = 130; // altura maxima em px

      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height = height * (MAX_WIDTH / width);
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width = width * (MAX_HEIGHT / height);
          height = MAX_HEIGHT;
        }
      }

      // Dynamically create a canvas element
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
      ctx.imageSmoothingEnabled = false;

      // Actual resizing
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob((blob) => {
        console.debug(`Resize: ${formatBytes(pictureFile.size)} -> ${formatBytes(blob.size)}`);
        console.debug(`Resize: ${img.width}x${img.height} -> ${width}x${height}`);

        resolve(blob);
      }, pictureFile.type);
    };
    img.src = URL.createObjectURL(pictureFile);
  });
}

/**
 * @param {Blob} blob
 * @returns {Promise<string>}
 */
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

function formatBytes(bytes, decimals = 2) {
  if (bytes == 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i];
}

// Event listeners

$formFloatingPassword.addEventListener("change", formFloatingPasswordListener);
$formFloatingPassword.addEventListener("input", formFloatingPasswordListener);
$form.addEventListener("submit", formSubmitListener);
$form.elements.profile_picture.addEventListener("change", formProfilePictureListener);

// Actions

// Clear form. Garante que sempre que abra a página o form não está preenchido
$form.elements.profile_picture.value = "";
$form.reset();

redirectIfLoggedUser();
