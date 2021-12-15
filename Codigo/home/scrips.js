const $containerAnuncios = $("#container-anuncios");
console.debug("$containerAnuncios", $containerAnuncios)

$containerAnuncios.empty();

for (const anuncio of db.data) {
    console.debug(anuncio)    

    const fotoBase64 = anuncio.fotos[0];

    // TODO: Trocar icones
    const $cardAnuncio = $(`<div class="rounded p-3 mt-3 mb-3 d-flex flex-column flex-lg-row anunciante">
        <img class="col-12 col-lg-4 rounded me-md-3 mb-3 mb-lg-0" src="${fotoBase64}">
        <div class="col-12 col-lg-8 detalhesdoanuncio">
            <h1 class="text-capitalize">${anuncio.titulo}</h1>
            <p class="maiuscula-primeira-letra">${anuncio.descricao}</p>
            <div class="distancia">
                <p><strong>${anuncio.valor}</strong></p>
                <p class="dist">7Km de <i class="fa fa-map-marker" aria-hidden="true"></i>
                    ${anuncio.universidadeProxima}
                </p>
            </div>
            <p class="iconesanuncio">
                <i class="fa fa-tint" aria-hidden="true"> ${anuncio.quantidades.banheiros} BANHEIRO${anuncio.quantidades.banheiros > 1 ? "S" : ""}</i>
                <i class="fa fa-bed" aria-hidden="true"> ${anuncio.quantidades.quartos} QUARTO${anuncio.quantidades.quartos > 1 ? "S" : ""}</i>
                
                ${anuncio.comodidades.garagem ? `<i class="fa fa-car" aria-hidden="true"> GARAGEM</i>` : ``}
                ${anuncio.detalhes.aceitaPet ? `<i class="fa fa-paw" aria-hidden="true"> PET</i>` : ``}
                
                ${anuncio.comodidades.wifi ? `<i class="fa fa-wifi" aria-hidden="true"> WI-FI</i>` : ``}
                ${anuncio.comodidades.quartoMobiliado ? `<i class="fa fa-wifi" aria-hidden="true">Quarto mobiliado </i>` : "" }
                ${anuncio.comodidades.areaPrivativa ? `<i class="fa fa-wifi" aria-hidden="true">Área privativa</i>` : "" }
                ${anuncio.comodidades.contasBasicas ? `<i class="fa fa-wifi" aria-hidden="true">Contas básicas </i>` : "" }
                ${anuncio.comodidades.limpeza ? `<i class="fa fa-wifi" aria-hidden="true">Limpeza</i>` : "" }
                
                ${anuncio.detalhes.permiteVisitas ? `<i class="fa fa-wifi" aria-hidden="true">Visitas</i>` : "" }
                ${anuncio.detalhes.aceitaFumantes ? `<i class="fa fa-wifi" aria-hidden="true">Fumantes</i>` : "" }
                ${anuncio.detalhes.aceitaBebidaAlcoolica ? `<i class="fa fa-wifi" aria-hidden="true">Bebidas alcóolicas</i>` : "" }
                ${anuncio.detalhes.lgbtq ? `<i class="fa fa-wifi" aria-hidden="true">LGBTQIA+</i>` : "" }
                ${anuncio.detalhes.apenasHomens ? `<i class="fa fa-wifi" aria-hidden="true">Apenas Homens</i>` : "" }
                ${anuncio.detalhes.apenasMulheres ? `<i class="fa fa-wifi" aria-hidden="true">Apenas Mulheres</i>` : "" }
                ${anuncio.detalhes.transporteProximo ? `<i class="fa fa-wifi" aria-hidden="true">Tranporte próximo</i>` : "" }
                ${anuncio.detalhes.comercioProximo ? `<i class="fa fa-wifi" aria-hidden="true">Comécio próximo</i>` : "" }
            <p>
        </div>
    </div>`)

    $containerAnuncios.append($cardAnuncio);
}
