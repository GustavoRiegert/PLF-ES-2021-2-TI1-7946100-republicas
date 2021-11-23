console.log("ok!")

function lerUsuarios() {
    const strUsers = localStorage.getItem("users");
    
    if (strUsers != null) {
        const users = JSON.parse(strUsers);
        console.debug(users);

        // TODO: Selecionar qual usuario
        // Aqui sempre vou pegar o primeiro
        const user = users[0];
        preecherForm(user.name, user.lastName, user.phone, user.email, user.password,user.gender)
        preecherFoto(user.profilePictureBase64)
    } else {
        alert("Não há nenhum usuário cadastrado")
    }
}

function preecherForm(nome, sobrenome, telefone, email, senha, sexo) {
    const formElem = document.getElementById("form");
    formElem.elements.nome.value = nome;
    formElem.elements.sobrenome.value = sobrenome;
    formElem.elements.telefone.value = telefone;
    formElem.elements.email.value = email;
    formElem.elements.senha.value = senha;
    formElem.elements.sexo.value = sexo;
}

function preecherFoto(imgBase64) {
    const fotoPerfilElem = document.getElementById("foto-perfil");
    fotoPerfilElem.src = imgBase64;
}

lerUsuarios()