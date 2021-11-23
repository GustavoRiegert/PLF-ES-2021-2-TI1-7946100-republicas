function showAlert(title, text, icon = "success") {
  Swal.fire({
    title: title,
    text: text,
    confirmButtonColor: "#0d6efd",
    icon: icon,
  });
}

function showPersistentAlert(title = undefined, text, icon = undefined) {
  Swal.fire({
    title,
    text,
    icon,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: false,
  });
}

function closeAlert() {
  Swal.close();
}
