// const jsonFiltroPaises = jsonPaises();
/**
  * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
  * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
  * @return {textParser} Retorna la cadena parseada
*/
const parseoTexto = (cadena) => {
	let txt = String(cadena);
	let textParser = txt.replaceAll(' ', '-');
		  textParser = textParser.toLowerCase();
		  textParser = eliminarAcentos(textParser);
	return eliminarCaracteres(textParser);
}
/**
  * @description Función que parsea una cadena eliminando acentos
  * @param cadena Contiene la cadena con caracteres acentos
  * @return {res} Retorna la cadena parseada
*/
const eliminarAcentos = (cadena) => {
	var chars={
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
		"À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"};
	var expr=/[áàéèíìóòúùñ]/ig;
	var res=cadena.replace(expr,function(e){return chars[e]});
	return res;
}
/**
  * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
  * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
  * @return {textParser} Retorna la cadena parseada
*/
const eliminarCaracteres = (cadena) =>{
	var outString = cadena.replace(/[`~!¡@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
	return outString;
}
/**
* @description Funcion que realiza la busqueda de la palabra ingresada por el usuario
* @param text Contiene el texto que el usaurio ingreso
*/
const searchEpisodes = async (data) => {
    $(".content-results-search").removeClass('d-none');
    let html = '';
    const RESULTS = await data;
          RESULTS.forEach(info => {
				let link = "./programas/"+info.slugc;
                html += `<a href="${link}" class="item-result d-flex">
                            <div class="img-pgm">
                                <picture >
                                    <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/miniaturas/${info.imageCH}" type="image/webp">
                                    <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/miniaturas/${info.imageCH}" type="image/png"> 
                                    <img class="lazy img-fluid" src="https://canalonce.mx/REST/data/miniaturas/${info.imageCH}" alt="Portada ${info.name}" loading="lazy" title="Portada ${info.name}" width="88" height="61">
                                </picture>
                            </div>
                            <div class="info-pgm">
                                <h2>${info.name}</h2>
                                <p>${info.description}</p>
                            </div>
                        </a>`;
          });
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".content-results-search").offset().top - 70
    }, 1000);
    $(".content-results-search .results").html(html);      
}
/**
* @description Funcion que manda la palabra ingresada a la base para realzar la busqueda
*/
const getDataSearch = () => {
    let status_results = $(".content-results-search").hasClass("d-none");    
    (!status_results) && $(".content-results-search").addClass('d-none');
	let searcht = $(".section-biblioteca .input-search input").val();
		searcht = parseoTexto(searcht);
    const DATA = fetchData(`https://admino.fabricaapps.com/prodes/show?parametro=41&keyword=${searcht}&cache=${Date.now()}`);
		searchEpisodes(DATA);
}
/**
* @description funcion que obtiene la palabra en automatico para realizar la busqueda de
* los programas
*/
$("#formSearch").on('submit', function(e) {
    e.preventDefault();
    $('body.biblioteca').addClass('body-overflow-hidden')
	$('.preloader-search').removeClass(['fade-out-search', 'd-none']).addClass('fade-in-search');
	getDataSearch();	
	setTimeout(() => {
        $('body.biblioteca').removeClass('body-overflow-hidden')
		$('.preloader-search').removeClass('fade-in-search').addClass(['fade-out-search', 'd-none']);		
	}, 3000);
});
/**
  * @description Funcion que obtiene el json que contiene la informacion del pais del dispositivo
  * @return Retorna un array o json con la informacion del link
*/
// function jsonPaises(){       
// 	var pais = $.ajax({ 
// 	  url: 'https://extreme-ip-lookup.com/json/?key=xSUUGXGBOO6OkWdcrLbl?cache='+$.now(), 
// 	  async: false
// 	});
// 	return pais.responseJSON;
// }  