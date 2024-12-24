const categoria = '40'
const btn_etiquetas = json_etiquetas();
// const json_busqueda = fetchData(`https://oncenoticias.digital/wp-json/miapi/v1/posts/categoria/?categoria=${categoria}&search=${search}&cache=${Date.now()}`);
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
* @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
*/
const animationPreloaderSearch = () => {
    $('body.mananera').addClass('body-overflow-hidden')
	$('.preloader-search').removeClass(['fade-out-search', 'd-none']).addClass('fade-in-search');
    setTimeout(() => {
        $('body.mananera').removeClass('body-overflow-hidden')
		$('.preloader-search').removeClass('fade-in-search').addClass(['fade-out-search', 'd-none']);		
	}, 3000);
}
/**
* @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
*/
const comprobationContentSearchClass = () => {
    let status_results = $(".content-results-search").hasClass("d-none");    
    (!status_results) && $(".content-results-search").addClass('d-none');
}
/**
* @description Funcion que realiza la busqueda de la palabra ingresada por el usuario
* @param data Contiene el texto que el usaurio ingreso
*/
const searchEpisodes = (data) => {
    let html = '';
    data.forEach(info => {
        let img = (info.img) ? info.img : info.featured_image;
            html += `<div class="items-results">
                        <div class="image-result">
                            <picture >
                                <source class="lazy img-fluid" 
                                    srcset="${ (!img) ? './assets/images/MX+Logotipo_curvas_color.svg' : img }" 
                                    type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="${ (!img) ? './assets/images/MX+Logotipo_curvas_color.svg' : img }" 
                                    type="image/png"> 
                                <img class="lazy img-fluid" 
                                    src="${ (!img) ? './assets/images/MX+Logotipo_curvas_color.svg' : img }" alt="Imagen ${info.title}" loading="lazy" 
                                    title="Imagen ${info.title}" width="300" height="300">
                            </picture> 
                        </div>
                        <div class="info-result">
                            <h2>${info.title}</h2>
                            <p>${info.excerpt}</p>
                        </div>
                        <div class="actions-results d-flex">
                            <a href="./biblioteca-mananera/${info.ID}" class="redirect-note">
                                Ver nota
                            </a>
                        </div>
                    </div>`;
    });
    $('.results-search').append(html);
}
/**
* @description Función
*/
const setBtnTags = async() => {
    let html = '';
    // 
    btn_etiquetas.forEach((ele, index) => {
        if(index <= 7){            
            html += `<button type="button" class="item-filter" data-id="${ele.id}"> ${ele.name} </button>`;
            return;
        }
    });  
    $('.input-search .filters-search').append(html); 
}
/**
* @description Función
*/
const setItemsSearchBtn = (tags) => {
    $(".content-results-search").removeClass('d-none')
    const DATA = json_busqueda_tags(tags);
    searchEpisodes(DATA);
}
/**
* @description Funcion que manda la palabra ingresada a la base para realizar la busqueda
*/
const getDataSearch = () => {
    $(".content-results-search").removeClass('d-none')
    let searcht = $(".section-mananera .input-search input").val();
        searcht = parseoTexto(searcht);
    const DATA = json_busqueda_form(searcht);
    searchEpisodes(DATA);
}
/**
* @description Función
*/
$("#formSearch").on('submit', function(e) {
    e.preventDefault();
    comprobationContentSearchClass();
    animationPreloaderSearch();	
    setTimeout(() => {
        getDataSearch();
    }, 1000);
});
/**
* @description Función 
* 
*/
$("body").on("click", ".input-search .filters-search .item-filter", function(){ 
    comprobationContentSearchClass();
    animationPreloaderSearch();	
    setTimeout(() => {
        setItemsSearchBtn($(this).attr('data-id'));
    }, 1000);
});
// 
document.addEventListener("DOMContentLoaded", function(event) {    
    setBtnTags();
});
/**
  * @description Funcion que obtiene el json que contiene la informacion de los episodios
  * @return Retorna un array o json con la informacion del link
*/
function json_etiquetas(){       
    let tags = $.ajax({ 
        url: `https://oncenoticias.digital/wp-json/miapi/v1/etiquetas-por-categoria/?categoria=${categoria}&cache=${Date.now()}`, 
        async: false,
    });
    return tags.responseJSON;
}
/**
  * @description Funcion que obtiene el json que contiene la informacion de los episodios
  * @return Retorna un array o json con la informacion del link
*/
function json_busqueda_tags(tag){       
    let tags = $.ajax({ 
        url: `https://oncenoticias.digital/wp-json/miapi/v1/posts/?categoria=${categoria}&etiqueta=${tag}&cache=${Date.now()}`, 
        async: false,
    });
    return tags.responseJSON;
}
/**
  * @description Funcion que obtiene el json que contiene la informacion de los episodios
  * @return Retorna un array o json con la informacion del link
*/
function json_busqueda_form(text){       
    let search = $.ajax({ 
        url: `https://oncenoticias.digital/wp-json/miapi/v1/posts/categoria/?categoria=${categoria}&search=${text}&cache=${Date.now()}`, 
        async: false,
    });
    return search.responseJSON;
}