const $checkFiltroQuartoMobiliado = $("#check-filtro-quarto-mobiliado");
const $checkFiltroAreaPrivativa = $("#check-filtro-area-privativa");
const $checkFiltroGaragem = $("#check-filtro-garagem");
const $checkFiltroContasBasicas = $("#check-filtro-contas-basicas");
const $checkFiltroLimpeza = $("#check-filtro-limpeza");
const $checkFiltroWifi = $("#check-filtro-wifi");
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
                (filtro.fumantes ? anun.detalhes.aceitaFumantes : true) &&
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
                    <i class="fa fa-bath" aria-hidden="true"></i> ${anuncio.quantidades.banheiros} Banheiro${anuncio.quantidades.banheiros > 1 ? "s" : ""}
                    <i class="fa fa-bed" aria-hidden="true"></i> ${anuncio.quantidades.quartos} Quarto${anuncio.quantidades.quartos > 1 ? "s" : ""}
                    <i class="fas fa-couch"></i> ${anuncio.quantidades.salas} Sala${anuncio.quantidades.quartos > 1 ? "s" : ""}
                    
                    ${anuncio.comodidades.garagem ? `<i class="fa fa-car" aria-hidden="true"></i>Garagem` : ``}
                    ${anuncio.detalhes.aceitaPet ? `<i class="fa fa-paw" aria-hidden="true"></i> Pet` : ``}
                    
                    ${anuncio.comodidades.wifi ? `<i class="fa fa-wifi" aria-hidden="true"></i> Wi-Fi` : ``}
                    ${anuncio.comodidades.quartoMobiliado ? `<i ><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="24px" height="24px" viewBox="0 0 699.000000 549.000000"
                    preserveAspectRatio="xMidYMid meet">
                   <metadata>
                   Created by potrace 1.16, written by Peter Selinger 2001-2019
                   </metadata>
                   <g transform="translate(0.000000,549.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                   <path d="M4963 4330 c-13 -5 -29 -30 -43 -67 -212 -566 -320 -864 -320 -884 0
                   -48 6 -49 307 -49 l283 0 0 -1055 0 -1054 -77 -3 -78 -3 -3 -32 c-3 -30 -6
                   -33 -38 -33 l-35 0 3 -52 3 -53 325 0 325 0 0 55 c0 55 0 55 -32 58 -28 3 -32
                   7 -35 35 l-3 32 -77 3 -78 3 0 1049 0 1050 288 0 c307 0 312 1 312 50 0 29
                   -333 927 -350 944 -14 14 -644 20 -677 6z"/>
                   <path d="M2623 3229 c-346 -40 -605 -162 -677 -319 -20 -43 -21 -64 -24 -407
                   -3 -353 -2 -363 18 -383 30 -30 67 -25 188 25 258 105 392 129 732 129 355 1
                   495 -23 768 -130 126 -49 138 -51 170 -28 l22 15 0 367 c0 337 -2 370 -19 408
                   -93 206 -463 336 -939 333 -92 -1 -199 -5 -239 -10z"/>
                   <path d="M1238 2706 c-74 -30 -128 -74 -168 -136 -43 -67 -60 -129 -60 -217 0
                   -196 84 -391 211 -489 48 -37 49 -42 49 -403 0 -201 4 -350 10 -366 22 -58
                   -56 -55 1590 -55 1646 0 1568 -3 1590 55 6 16 10 165 10 365 0 219 4 347 11
                   362 5 13 26 34 45 48 168 122 259 473 169 655 -36 75 -101 139 -173 173 -53
                   25 -67 27 -192 27 -127 0 -138 -2 -185 -26 -64 -34 -128 -99 -156 -158 -33
                   -70 -39 -141 -39 -464 l0 -299 -32 21 c-70 46 -235 124 -332 156 -236 79 -473
                   110 -771 102 -399 -12 -677 -84 -944 -246 -46 -28 -86 -51 -87 -51 -2 0 -4
                   163 -6 363 l-3 362 -28 57 c-35 71 -110 140 -183 167 -82 31 -247 29 -326 -3z"/>
                   </g>
                   </svg></i> Quarto mobiliado` : ""}
                    ${anuncio.comodidades.areaPrivativa ? `<i >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30px" height="30px" viewBox="0 0 700.000000 623.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                    </metadata>
                    <g transform="translate(0.000000,623.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M3250 5519 c-94 -11 -195 -41 -281 -84 -116 -59 -1182 -666 -1230
                    -701 -120 -87 -241 -247 -294 -387 -54 -145 -55 -159 -55 -917 0 -762 1 -777
                    57 -920 58 -146 167 -290 289 -381 63 -46 1138 -657 1250 -710 218 -103 485
                    -112 702 -24 70 28 1227 682 1293 731 120 88 241 247 294 387 54 145 55 159
                    55 917 0 759 -1 772 -56 919 -52 139 -173 297 -293 385 -48 35 -1110 640
                    -1228 700 -91 46 -188 74 -298 86 -100 11 -99 11 -205 -1z m210 -150 c138 -22
                    212 -58 800 -392 316 -179 602 -345 634 -369 116 -84 217 -239 256 -393 20
                    -77 20 -108 20 -786 0 -674 -1 -710 -20 -785 -39 -153 -141 -308 -256 -392
                    -33 -24 -325 -194 -649 -378 -685 -388 -683 -387 -880 -388 -204 -1 -192 -6
                    -892 390 -332 189 -629 362 -659 385 -110 85 -206 235 -244 383 -19 76 -20
                    110 -20 786 0 676 1 710 20 786 38 148 134 298 244 383 61 48 1171 680 1256
                    716 134 57 264 75 390 54z"/>
                    <path d="M3287 4106 c-62 -23 -123 -81 -157 -149 -36 -73 -55 -170 -46 -231 9
                    -56 66 -176 117 -243 40 -54 48 -87 27 -116 -7 -9 -105 -53 -218 -97 -211 -83
                    -265 -112 -306 -166 -63 -82 10 -223 131 -253 54 -14 991 -15 1049 -1 22 5 51
                    17 65 28 39 29 83 106 88 155 5 41 2 48 -33 87 -60 66 -106 92 -299 164 -99
                    37 -186 73 -192 78 -25 20 -14 69 26 122 58 77 98 154 115 220 38 145 -42 330
                    -169 391 -50 24 -148 30 -198 11z"/>
                    </g>
                    </svg></i>Área privativa` : ""}
                    ${anuncio.comodidades.contasBasicas ? `<i class="fa fa-money" aria-hidden="true"></i> Contas Básicas` : ""}
                    ${anuncio.comodidades.limpeza ? `<i >
                    <svg width="30px" height="30px" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path d="m422.92 207.17 89.816-178.13c4.9922-9.8906 1.0156-21.922-8.8555-26.859-9.8906-5.0078-21.887-1.0547-26.84 8.8555l-89.723 178.02c6.582 1.4414 13.031 3.5312 19.039 6.5977 6.2109 3.1055 11.605 7.1523 16.562 11.516z"/>
                    <path d="m400.46 357.12-120.45-60.684c-26.508 32.496-59.316 59.613-96.895 79.242l-46.508 24.27c-0.38672 0.22266-0.60938 0.64844-1.0156 0.94141-0.68359 0.5-1.2031 1.0898-1.7734 1.6992-0.40625 0.5-0.90625 0.94141-1.2188 1.5508-0.074219 0.10938-1.8125 0.22266-1.8477 0.33203-0.62891 1.2422-2.5703 2.6836-2.5703 4.1992v0.035156 0.035156c0 10.684 14.992 27.152 37.855 45.344l47.93-50.574-32.625 60.941c15.785 11.293 34.715 22.996 55.691 34.195l59.242-93.898-33.289 106.93c18.91 8.9453 37.098 16.434 53.844 22.199l33.363-92.164-15.637 97.836c18.316 5.2695 34.25 8.2617 45.898 8.2617 10.906 0 18.301-2.4961 20.941-7.6914 0.09375-0.14844 0.074218-0.33203 0.12891-0.46094 0.27734-0.53516 0.3125-1.1289 0.44531-1.6992 0.22266-0.90625 0.37109-1.8125 0.33203-2.7344 0-0.42578 0.24219-0.79297 0.16797-1.2188l-8.1133-51.84c-6.5273-41.906-4.2539-84.402 6.0977-125.05z"/>
                    <path d="m397.38 213.49c-8.4492-4.25-17.727-6.4336-27.004-6.4336-6.3594 0-12.68 1.0156-18.816 2.9961-15.082 4.9922-27.617 15.785-34.77 29.965-7.1172 14.086-15.25 27.504-24.289 40.258l113.61 57.266c4.8633-14.844 10.777-29.391 17.875-43.438 14.879-29.594 2.9922-65.695-26.602-80.613z"/>
                    <path d="m479.43 541.52c0 10.207-8.2734 18.484-18.484 18.484-10.207 0-18.484-8.2773-18.484-18.484s8.2773-18.484 18.484-18.484c10.211 0 18.484 8.2773 18.484 18.484"/>
                    <path d="m516.39 486.06c0 10.207-8.2734 18.484-18.484 18.484-10.207 0-18.484-8.2773-18.484-18.484s8.2773-18.484 18.484-18.484c10.211 0 18.484 8.2773 18.484 18.484"/>
                    <path d="m571.85 541.52c0 10.207-8.2734 18.484-18.484 18.484-10.207 0-18.484-8.2773-18.484-18.484s8.2773-18.484 18.484-18.484c10.211 0 18.484 8.2773 18.484 18.484"/>
                    </g>
                    </svg></i> Limpeza` : ""}
                    
                    ${anuncio.detalhes.permiteVisitas ? `<i >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30px" height="30px" viewBox="0 0 682.000000 429.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                    </metadata>
                    <g transform="translate(0.000000,429.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M2295 3548 c-21 -19 -33 -54 -74 -218 -27 -107 -61 -228 -76 -268
                    -34 -89 -91 -152 -173 -190 -54 -25 -67 -27 -282 -33 -245 -8 -300 -18 -408
                    -70 -82 -40 -182 -134 -226 -212 -81 -146 -216 -496 -216 -559 1 -62 44 -108
                    102 -108 31 0 86 35 98 62 5 13 43 109 84 213 84 216 134 321 166 350 l23 20
                    -6 -25 c-19 -80 -29 -230 -24 -370 7 -168 19 -234 66 -351 47 -117 64 -208 64
                    -349 1 -162 -39 -327 -129 -531 -40 -90 -44 -146 -14 -194 40 -65 141 -84 204
                    -39 53 38 150 281 197 494 20 88 24 133 23 275 0 116 -5 192 -16 240 l-15 69
                    24 -29 c44 -53 117 -168 155 -245 41 -83 64 -183 119 -535 17 -110 37 -212 45
                    -227 47 -90 164 -101 235 -20 32 36 32 36 26 121 -8 106 -69 470 -102 610 -37
                    153 -104 275 -274 504 -23 32 -23 34 -17 207 7 193 28 358 54 428 17 44 21 48
                    87 72 196 73 284 166 351 373 51 159 104 386 104 447 0 44 -4 56 -29 81 -38
                    38 -106 41 -146 7z"/>
                    <path d="M2721 3544 c-17 -14 -33 -39 -36 -57 -12 -64 86 -440 150 -572 55
                    -115 179 -223 299 -261 l51 -16 -1 -378 -1 -379 -41 -63 c-104 -160 -159 -318
                    -148 -428 8 -92 61 -379 97 -532 34 -144 56 -177 127 -199 36 -10 48 -9 88 6
                    88 33 101 92 60 267 -47 197 -88 441 -84 493 7 76 85 225 171 325 l28 32 72
                    -55 c81 -63 205 -184 241 -237 13 -20 36 -79 50 -133 32 -118 193 -601 213
                    -640 42 -82 186 -91 236 -13 33 49 31 94 -7 201 -56 160 -163 493 -186 582
                    -31 118 -78 191 -205 318 l-110 110 0 361 0 362 50 16 c64 20 159 77 208 124
                    55 53 91 115 127 217 39 111 120 431 120 475 0 23 -9 41 -34 66 -45 45 -101
                    48 -146 7 -27 -25 -35 -45 -64 -173 -65 -275 -107 -381 -176 -444 -86 -77
                    -103 -81 -385 -81 -282 0 -299 4 -384 81 -67 60 -99 140 -166 414 -19 80 -40
                    158 -46 173 -24 59 -115 76 -168 31z"/>
                    <path d="M4571 3556 c-32 -18 -50 -53 -51 -98 0 -47 78 -356 118 -465 37 -99
                    89 -180 151 -233 54 -46 158 -103 218 -119 39 -11 43 -15 57 -62 32 -108 56
                    -328 56 -518 l0 -96 -152 -156 c-84 -85 -168 -180 -186 -210 -52 -89 -72 -223
                    -92 -628 -10 -187 -9 -206 7 -240 37 -74 131 -103 200 -61 53 32 66 62 70 159
                    8 188 24 431 35 514 9 72 16 94 40 125 33 42 289 302 298 302 3 0 4 -56 2
                    -125 -5 -148 10 -322 44 -519 32 -186 80 -380 100 -412 47 -71 164 -75 224 -8
                    39 45 39 85 1 252 -63 274 -97 545 -88 697 4 63 15 119 37 184 17 51 36 130
                    42 175 13 102 4 398 -15 486 l-15 65 48 -54 c68 -75 100 -147 221 -495 30 -85
                    60 -111 126 -110 59 1 93 36 93 94 0 74 -157 495 -217 583 -42 61 -123 141
                    -179 176 -99 63 -152 73 -434 80 -292 7 -315 13 -402 98 -64 63 -105 174 -173
                    465 -23 102 -31 121 -57 143 -33 28 -87 33 -127 11z"/>
                    <path d="M1563 3514 c-23 -9 -65 -35 -91 -59 -153 -138 -121 -387 62 -483 44
                    -23 63 -27 136 -27 76 0 91 3 139 30 101 56 151 142 151 260 0 118 -55 212
                    -154 262 -64 33 -178 41 -243 17z"/>
                    <path d="M3387 3516 c-62 -23 -116 -64 -147 -113 -43 -68 -53 -107 -48 -188
                    13 -198 192 -317 388 -259 75 22 162 109 184 184 34 113 12 209 -65 294 -36
                    40 -65 61 -105 75 -63 24 -150 27 -207 7z"/>
                    <path d="M5213 3514 c-59 -21 -127 -86 -159 -150 -55 -113 -28 -265 62 -343
                    68 -60 111 -76 204 -76 93 0 136 16 204 76 90 78 117 230 62 343 -33 66 -100
                    129 -163 150 -57 20 -154 19 -210 0z"/>
                    </g>
                    </svg></i> Visitas` : ""}
                    ${anuncio.detalhes.aceitaFumantes ? `<i >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="24px" height="24px" viewBox="0 0 699.000000 492.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                    </metadata>
                    <g transform="translate(0.000000,492.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M2643 3755 c-38 -16 -41 -25 -46 -165 -7 -162 -52 -255 -168 -342
                    -85 -64 -152 -78 -363 -78 -274 0 -382 -32 -508 -148 -108 -100 -167 -216
                    -184 -361 -8 -75 6 -116 47 -130 58 -20 108 17 109 79 0 50 27 147 52 189 28
                    48 95 118 138 145 85 54 111 59 360 66 206 7 243 10 297 30 119 42 223 124
                    295 234 57 88 79 169 85 311 5 117 5 122 -18 147 -31 34 -57 40 -96 23z"/>
                    <path d="M2595 3044 c-61 -55 -190 -119 -269 -133 -33 -6 -144 -11 -246 -11
                    -237 0 -270 -8 -351 -89 -44 -44 -61 -70 -73 -111 -29 -99 -19 -150 34 -169
                    54 -18 110 21 110 79 0 35 34 87 72 110 30 18 51 20 226 20 211 0 301 13 407
                    57 74 31 156 85 212 139 52 49 58 96 20 132 -39 36 -83 29 -142 -24z"/>
                    <path d="M1530 2336 c-122 -32 -215 -140 -255 -293 -19 -73 -19 -233 0 -306
                    33 -125 110 -228 210 -277 l50 -25 1410 0 1410 0 55 26 c94 45 160 126 202
                    248 31 88 33 268 4 351 -45 133 -109 215 -203 262 l-48 23 -1395 2 c-1081 1
                    -1405 -1 -1440 -11z m131 -166 c75 -39 129 -156 129 -280 0 -129 -55 -241
                    -137 -281 -45 -22 -45 -22 -91 -3 -186 77 -194 475 -12 566 45 23 62 23 111
                    -2z m2707 -9 c28 -21 51 -51 74 -98 31 -63 33 -74 33 -168 0 -89 -3 -107 -28
                    -160 -33 -70 -69 -112 -114 -131 -27 -12 -238 -14 -1248 -14 l-1215 0 25 50
                    c73 144 71 388 -5 517 l-19 33 1228 0 1228 0 41 -29z"/>
                    <path d="M4620 2343 c0 -4 20 -37 45 -72 152 -217 152 -545 0 -762 -25 -35
                    -45 -68 -45 -72 0 -5 190 -7 423 -5 l422 3 56 28 c139 68 219 224 219 427 0
                    203 -80 359 -219 427 l-56 28 -422 3 c-233 2 -423 -1 -423 -5z"/>
                    </g></i>Fumantes` : ""}
                    ${anuncio.detalhes.aceitaBebidaAlcoolica ? `<i class="fa fa-beer" aria-hidden="true"></i> Bebidas alcóolicas` : ""}
                    ${anuncio.detalhes.lgbtq ? `<i class="fa fa-users" aria-hidden="true"></i> LGBTQIA+` : ""}
                    ${anuncio.detalhes.apenasHomens ? `<i class="fa fa-male" aria-hidden="true"></i> Apenas Homens` : ""}
                    ${anuncio.detalhes.apenasMulheres ? `<i class="fa fa-female" aria-hidden="true"></i> Apenas Mulheres` : ""}
                    ${anuncio.detalhes.transporteProximo ? `<i class="fa fa-bus" aria-hidden="true"></i> Tranporte próximo` : ""}
                    ${anuncio.detalhes.comercioProximo ? `<i class="fa fa-shopping-basket" aria-hidden="true"></i> Comécio próximo` : ""}
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