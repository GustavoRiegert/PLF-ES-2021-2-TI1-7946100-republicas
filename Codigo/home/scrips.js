const $checkFiltroQuartoMobiliado = $("#check-filtro-quarto-mobiliado");
const $checkFiltroAreaPrivativa = $("#check-filtro-area-privativa");
const $checkFiltroGaragem = $("#check-filtro-garagem" );
const $checkFiltroContasBasicas = $("#check-filtro-contas-basicas");
const $checkFiltroLimpeza = $("#check-filtro-limpeza" );
const $checkFiltroWifi = $("#check-filtro-wifi" );
const $checkFiltroVisitas = $("#check-filtro-visitas");
const $checkFiltroFumantes = $("#check-filtro-fumantes");
const $checkFiltroPets = $("#check-filtro-pets");
const $checkFiltroBebidasAlcoolicas = $("#check-filtro-bebidas-alcoolicas");
const $checkFiltroLgbtqia = $("#check-filtro-lgbtqia");
const $checkFiltroApenasHomens = $("#check-filtro-apenas-homens");
const $checkFiltroApenasMulheres = $("#check-filtro-apenas-mulheres");
const $checkFiltroTransporteProximo = $("#check-filtro-transporte-proximo");
const $checkFiltroComercioProximo = $("#check-filtro-comercio-proximo");

function listarAnuncios(filtro) {
    const $containerAnuncios = $("#container-anuncios");
    console.debug("$containerAnuncios:", $containerAnuncios)
    console.debug("anuncios:", db.data)

    // Checa se tem algum filtro
    // Caso não tenha nenhum mostra todos os anuncios
    let anuncios;
    if (filtro) {
        // Aplica o filtro
        anuncios = db.data.filter((anun) => {
            // Se o filtro estive ativado mostra o anuncio se a propriedade for verdadeira
            // Se o filtro estive desativado mostra o anuncio idenpendente do valor da propriedade
            const mostrarAnuncio = 
                (filtro.quartoMobiliado ? anun.comodidades.quartoMobiliado : true) &&
                (filtro.areaPrivativa ? anun.comodidades.areaPrivativa : true) &&
                (filtro.garagem ? anun.comodidades.garagem : true) &&
                (filtro.contasBasicas ? anun.comodidades.contasBasicas : true) &&
                (filtro.limpeza ? anun.comodidades.limpeza : true) &&
                (filtro.wifi ? anun.comodidades.wifi : true) &&
                (filtro.visitas ? anun.detalhes.permiteVisitas : true) &&
                (filtro.fumantes ?anun.detalhes.aceitaFumantes : true) &&
                (filtro.pets ? anun.detalhes.aceitaPet : true) &&
                (filtro.bebidasAlcoolicas ? anun.detalhes.aceitaBebidaAlcoolica : true) &&
                (filtro.lgbtqia ? anun.detalhes.lgbtq : true) &&
                (filtro.apenasHomens ? anun.detalhes.apenasHomens : true) &&
                (filtro.apenasMulheres ? anun.detalhes.apenasMulheres : true) &&
                (filtro.transporteProximo ? anun.detalhes.transporteProximo : true) &&
                (filtro.comercioProximo ? anun.detalhes.comercioProximo : true);
            return mostrarAnuncio
        });
    } else {
        anuncios = db.data;
    }
    
    $containerAnuncios.empty();
    if (anuncios.length != 0) {
        for (const anuncio of anuncios) {
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
    } else {
        $containerAnuncios.append(`<div>Sua pesquisa não retornou nenhum resultado</div>`);
    }
}

function filtrarAnuncios() {
    const filtro = {
        quartoMobiliado: $checkFiltroQuartoMobiliado.prop("checked"),
        areaPrivativa: $checkFiltroAreaPrivativa.prop("checked"),
        garagem: $checkFiltroGaragem.prop("checked"),
        contasBasicas: $checkFiltroContasBasicas.prop("checked"),
        limpeza: $checkFiltroLimpeza.prop("checked"),
        wifi: $checkFiltroWifi.prop("checked"),
        visitas: $checkFiltroVisitas.prop("checked"),
        fumantes: $checkFiltroFumantes.prop("checked"),
        pets: $checkFiltroPets.prop("checked"),
        bebidasAlcoolicas: $checkFiltroBebidasAlcoolicas.prop("checked"),
        lgbtqia: $checkFiltroLgbtqia.prop("checked"),
        apenasHomens: $checkFiltroApenasHomens.prop("checked"),
        apenasMulheres: $checkFiltroApenasMulheres.prop("checked"),
        transporteProximo: $checkFiltroTransporteProximo.prop("checked"),
        comercioProximo: $checkFiltroComercioProximo.prop("checked"),
    }

    console.debug("filtrarAnuncios", filtro)
    listarAnuncios(filtro);
}

$checkFiltroQuartoMobiliado.change(() => filtrarAnuncios());
$checkFiltroAreaPrivativa.change(() => filtrarAnuncios());
$checkFiltroGaragem.change(() => filtrarAnuncios());
$checkFiltroContasBasicas.change(() => filtrarAnuncios());
$checkFiltroLimpeza.change(() => filtrarAnuncios());
$checkFiltroWifi.change(() => filtrarAnuncios());
$checkFiltroVisitas.change(() => filtrarAnuncios());
$checkFiltroFumantes.change(() => filtrarAnuncios());
$checkFiltroPets.change(() => filtrarAnuncios());
$checkFiltroBebidasAlcoolicas.change(() => filtrarAnuncios());
$checkFiltroLgbtqia.change(() => filtrarAnuncios());
$checkFiltroApenasHomens.change(() => filtrarAnuncios());
$checkFiltroApenasMulheres.change(() => filtrarAnuncios());
$checkFiltroTransporteProximo.change(() => filtrarAnuncios());
$checkFiltroComercioProximo.change(() => filtrarAnuncios());

// Ao iniciar listarAnuncios
listarAnuncios(null);