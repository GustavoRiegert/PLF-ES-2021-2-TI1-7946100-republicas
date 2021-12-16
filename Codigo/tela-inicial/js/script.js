
function verificaCidade() {
    document.getElementById('unidade').value = 0;
    var cidade = document.getElementById('cidade');
    var cidadeId = cidade.value;
    var barreiro = document.getElementById('barreiro');
    var corel = document.getElementById('corel');
    var praca = document.getElementById('praca');
    var gabriel = document.getElementById('gabriel');
    var contagem = document.getElementById('contagem');
    var betim = document.getElementById('betim');
    if (cidadeId == 1) {
        barreiro.style.display = "block"
        corel.style.display = "block"
        praca.style.display = "block"
        gabriel.style.display = "block"
        contagem.style.display = "none"
        betim.style.display = "none"
    }
    else if (cidadeId == 2) {
        barreiro.style.display = "none"
        corel.style.display = "none"
        praca.style.display = "none"
        gabriel.style.display = "none"
        contagem.style.display = "none"
        betim.style.display = "block"
    }
    else if (cidadeId == 3) {
        barreiro.style.display = "none"
        corel.style.display = "none"
        praca.style.display = "none"
        gabriel.style.display = "none"
        contagem.style.display = "block"
        betim.style.display = "none"
    }
}

function verificaMapa() {
    var mapa = document.getElementById('mapa');
    var valor = document.getElementById('unidade').value;
    if (valor == 1) {
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.7551807062664!2d-44.02805138453824!3d-19.97679554492628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6be0ca199edef%3A0x135bb091da4cc25e!2sPUC%20Minas%20Barreiro!5e0!3m2!1spt-BR!2sbr!4v1635973613076!5m2!1spt-BR!2sbr';
    }
    else if (valor == 2) {
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9610732459287!2d-43.99590438453929!3d-19.92604514333346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697a1ff6f1903%3A0x901d04f218f49fa5!2zUFVDIE1pbmFzIENvcmHDp8OjbyBFdWNhcsOtc3RpY28!5e0!3m2!1spt-BR!2sbr!4v1635973570778!5m2!1spt-BR!2sbr';
    }
    else if (valor == 3) {
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.7894971908295!2d-43.93933708453903!3d-19.933273543559988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699dc57d681cf%3A0x897f2f71ae2c8900!2sPUC%20Minas%20-%20Unidade%20Pra%C3%A7a%20da%20Liberdade!5e0!3m2!1spt-BR!2sbr!4v1635972030246!5m2!1spt-BR!2sbr';
    }
    else if (valor == 4) {
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5401641992125!2d-43.92111938454037!3d-19.859400441247708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69ac3c5437e8f%3A0xaf89be1db1ea54e6!2sPuc%20Minas%20S%C3%A3o%20Gabriel!5e0!3m2!1spt-BR!2sbr!4v1635973409082!5m2!1spt-BR!2sbr';
    }
    else if (valor == 5) {
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.650436548993!2d-44.07825728453917!3d-19.93913024374366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bdfe251d4985%3A0x2ca8fb8181985130!2sPUC%20Minas%20Contagem!5e0!3m2!1spt-BR!2sbr!4v1635973645296!5m2!1spt-BR!2sbr';
    }
    else if (valor == 6) {
        mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.271848942391!2d-44.20062178453871!3d-19.955066544243746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c3a2a38d11e5%3A0x6fd8d75de5c97b4b!2sPontif%C3%ADcia%20Universidade%20Cat%C3%B3lica%20de%20Minas%20Gerais%2C%20Campus%20Betim!5e0!3m2!1spt-BR!2sbr!4v1635973699276!5m2!1spt-BR!2sbr';
    }
}

function encontrarRepublicas(){
    window.location.href ="../home/Rep.html";
}