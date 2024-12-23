/**
 * @description Funcion que obtiene los episodios del programa 
*/
const categoria = getQueryElement('#wrapper').dataset.categorie;
const slugc = getQueryElement('#wrapper').dataset.slug;
const signal = getQueryElement('#wrapper').dataset.signal;
const plataforma = getQueryElement('.list-episodes').dataset.plataforma;
const jsonPgm = fetchData('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/channels.json?cache='+Date.now());
// const jsonRandomPgm = fetchData('https://canalonce.mx/REST/data/mdb/categorias_rand.json?cache='+Date.now());
const jsonEpisode = fetchData(`https://canaloncetv.s3.amazonaws.com/REST/data/mdb/episodes/desktop/${slugc}.json?cache=${Date.now()}`);
/**
* @description Funcion que obtiene el json que contiene la informacion del pais del dispositivo
* @return Retorna un array o json con la informacion del link
*/
const jsonPaises = () =>{       
    var pais = $.ajax({ 
      url: 'https://extreme-ip-lookup.com/json/?key=xSUUGXGBOO6OkWdcrLbl&cache='+$.now(), 
      async: false
    });
    return pais.responseJSON;
}
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
  * @description Funcion que comprueba el slug del programa y redirecciona si la ubicación no es valida
*/
const filterRedirectUSA = () =>{
  $.each(jsonFiltroPaises, function(key, value){
    if(this.countryCode == "US" || this.countryCode == "CA" || this.countryCode == "PR"){
      window.location.href = "https://canalonce.mx/mexico";
    }
  });
}
/**
  * @description Función que parsea la señal nacional o internacional ingresada en el url 
  * @param type Contiene la señal ingresada en la url
  * @return {status} Retorna el valor numerico de la señal
*/
const parseSignal = (type) => {  
    let status = '';
    switch (type) {
      case 'general':
        status = 0;
        break;
      case 'nacional':
        status = 0;
        break;
      case 'internacional':
        status = 1;
        break;
    }
    return status;
}
/**
* @description Funcion que obtiene los episodios de la temporada
* @param season Numero de la temporada del programa
* @param slug Identificador del programa
* @param signal Identificador de la señal en donde se visualizara el programa
* @param data Informacion de los episodios
*/ 
const getEpisodesPgm = async (slug, signal, data) => {
    moment.locale('es');
    appendHtmlSlider('.list-episodes .list',  '');
    let i = data.length;
    let html = '',
        info = await data;
        typeSignal = parseSignal(signal),
        senal = (signal != 'internacional') ? '' : '_internacional',
        currentDay = moment().format('YYYY-MM-DD HH:mm:ss');
    info.forEach(ele => {
        if( ele.platform == typeSignal){   
            let dateEpisode = moment(ele.date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');     
            if(ele.vda != ''){ 
                if(dateEpisode <= currentDay){    
                    let pgm = parseoTexto(ele.title);             
                        html += `<li class="items-list">
                                    <a class="episode" href="./programas/detalle-programa/${slug}_${ele.id}_${pgm+senal}">
                                        <h3>${ele.title}</h3>
                                        <img class="play" src="https://canalonce.mx/images/ICONOS_ONCE_Play_circular_Gris.png" alt="Play">
                                    </a>
                                    <button title="Desplegar Sinopsis ${ele.title}" class="btn-desc-episode"
                                            alt="Desplegar Sinopsis ${ele.title}" value="Desplegar Sinopsis ${ele.title}"
                                            type="button" data-title="${ele.title}"></button>
                                    <div class="info-sinopsis">
                                        <p>${ele.description}</p>
                                    </div>
                                </li>` 
                }
            }
        }
    });
    $(".list-episodes .list").append(html);
    $(".lowEpisode").toggle(false);
}
/**
* @description Funcion que obtiene la informacion del programa
*/
const loadChannelUI = () => {
    getEpisodesPgm(slugc, signal, jsonEpisode);  
}
/**
 * @description Funcion que reproduce el episodio
 * @param id Id del episodio
 * @param video Video en formato youtube, vimeo, m3u8 o mp4
*/ 
const PlayEpisode = (video) => {  
    $.getJSON("https://extreme-ip-lookup.com/json/?key=xSUUGXGBOO6OkWdcrLbl", function(data){    
      if(this.countryCode == "US" || this.countryCode == "CA" || this.countryCode == "PR"){
      }else{
        console.log();
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
  
        const OPTIONS = { 
              plugins: {
                httpSourceSelector:
                {
                default: 'auto'
                },
              },  
              techOrder: [ 'html5', 'youtube', 'vimeo' ],
              controls: true,
              html5:{
                hls: {
                  overrideNative: !videojs.browser.IS_SAFARI,
                },
              },
              controlBar: {
                volumePanel: {
                  inline: false,
                  volumeControl: {
                    vertical: true
                  }
                },
                fullscreenToggle: false
              },    
              youtube: {
                ytControls: 2,
                playsinline: 0,
                modestbranding: 1,
                iv_load_policy: 3,
                cc_load_policy: 0,
                rel: 0,
              },
          };  
        videojs.registerPlugin('apiVideoAnalytics', VideoJsApiVideoAnalytics);
        let reproductor =  videojs('VideoPlayer', {OPTIONS});  
            reproductor.apiVideoAnalytics({
                events: [
                  {
                    name: 'play',
                    label: 'video play',
                    action: 'play',
                    event_label: video,
                  },
                  {
                    name: 'fullscreenchange',
                    label: {
                      open: 'video fullscreen open',
                      exit: 'video fullscreen exit'
                    },
                    action: 'fullscreen change',
                    event_label: video,
                  },
                  {
                    name: 'timeupdate',
                    action: 'time updated',
                    event_label: video,
                  }
                ]            
              });
        if (video.includes('m3u8')) {
            reproductor.httpSourceSelector();
            reproductor.landscapeFullscreen({
                                            fullscreen: {
                                                        enterOnRotate: true,
                                                        exitOnRotate: true,
                                                        alwaysInLandscapeMode: true,
                                                        iOS: false
                                            }  
                                          });
            reproductor.src({ type: 'application/x-mpegURL', src: video });        
            reproductor.controls(true);
            reproductor.playsinline(true);
            reproductor.autoplay(true); 
        }else if (video.includes('vimeo')) {
            var repVimeo =  videojs('VideoPlayer', {});  
                repVimeo.apiVideoAnalytics({
                                            events: [
                                              {
                                                name: 'play',
                                                label: 'video play',
                                                action: 'play',
                                                event_label: video,
                                              },
                                              {
                                                name: 'fullscreenchange',
                                                label: {
                                                  open: 'video fullscreen open',
                                                  exit: 'video fullscreen exit'
                                                },
                                                action: 'fullscreen change',
                                                event_label: video,
                                              },
                                              {
                                                name: 'timeupdate',
                                                action: 'time updated',
                                                event_label: video,
                                              }
                                            ]            
                                          });
                repVimeo.reset();
                repVimeo.src({ techOrder: ["vimeo"], type: 'video/vimeo', src: video});
                repVimeo.controls(true);
                repVimeo.playsinline(true);
                reproductor.autoplay(true);   
        }else if (video.includes('youtu.be') || video.includes('youtube') ||  video.includes('youtu')){
          reproductor.httpSourceSelector();
          reproductor.landscapeFullscreen({
                                          fullscreen: {
                                                      enterOnRotate: true,
                                                      exitOnRotate: true,
                                                      alwaysInLandscapeMode: true,
                                                      iOS: false
                                          }  
                                        });
          reproductor.src({ type: 'video/youtube', src: video });          
          reproductor.controls(true);
          reproductor.playsinline(false);
        }else{
          reproductor.httpSourceSelector();
          reproductor.landscapeFullscreen({
                                          fullscreen: {
                                                      enterOnRotate: true,
                                                      exitOnRotate: true,
                                                      alwaysInLandscapeMode: true,
                                                      iOS: false
                                          }  
                                        });
          reproductor.src({ type: 'video/mp4', src: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/trailer/'+video });          
          reproductor.controls(true);
          reproductor.playsinline(false);
        }       
      } 
    });  
}
/**
 * @description Funcion que obtiene las informacion del programa para filtrar su trailer
*/ 
const settingsVideo = () => {
    jsonPgm.forEach(ele => {
        if(ele.slugc == slugc){
            if(ele.trailer != null){
                PlayEpisode(ele.trailer);
            }
        }
    });
}
/**
 * @description Funcion que realiza un collapse css para mostrar la sinopsis del episodio
*/ 
$("body").on("click", ".btn-desc-episode", function(){ 
    let title_btn =  $(this).attr('data-title');
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      $(this).attr('name', 'desplegar-sinopsis');
      $(this).attr('title', 'Desplegar Sinopsis '+title_btn);
      $(this).attr('alt', 'Desplegar Sinopsis '+title_btn);
      $(this).val('Desplegar Sinopsis '+title_btn);
      content.style.marginBottom = "0rem";
      content.style.maxHeight = null;
    } else {
      $(this).attr('name', 'ocultar-sinopsis')
      $(this).attr('title', 'Ocultar Sinopsis '+title_btn)
      $(this).attr('alt', 'Ocultar Sinopsis '+title_btn)
      $(this).val('Ocultar Sinopsis '+title_btn)
      content.style.marginBottom = "0.5rem";
      content.style.maxHeight = content.scrollHeight + "px";
    } 
});
document.addEventListener("DOMContentLoaded", function(event) {    
  $("body").removeClass("body-hidden");
  loadChannelUI();    
});