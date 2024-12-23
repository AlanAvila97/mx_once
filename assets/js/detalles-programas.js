/**
 * @description Funcion que obtiene los episodios del programa 
*/
const slugc = getQueryElement('.EpisodeHolder').dataset.slug;
const id_episode = getQueryElement('.EpisodeHolder').dataset.episode;
const signal = getQueryElement('.EpisodeHolder').dataset.signal;
const jsonPgm = fetchData(`https://canaloncetv.s3.amazonaws.com/REST/data/mdb/episodes/desktop/${slugc}.json?cache=${Date.now()}`);
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
  * @description Funcion que hace un scroll en la lista de episodios buscando el programa seleccionado
*/
const scrollItemActive = () => {
    var posicion = $('.list .active-item').offset();
    var list = $('.list').offset();
    var x = posicion.top - list.top;
    $('body .list').animate({ scrollTop: x } , '100');
}
/**
 * @description Funcion que obtiene los episodios de la temporada
 * @param slug Identificador del programa
 * @param data Informacion de los episodios
 * @param signal Identificador de la señal en donde se visualizara el programa 
*/ 
const getEpisodesPgm = async( slug, data, episode, signal) =>{
    moment.locale('es');
    appendHtmlSlider('.list',  '');
    let html = '',
        i = data.length,
        sig = 0,
        prev = 0,
        info = await data,
        signal_url = parseSignal(signal),
        senal = (signal != 'internacional') ? '' : '_internacional',
        currentDay = moment().format('YYYY-MM-DD HH:mm:ss');
        info.forEach((ele, key) => {
            let dateEpisode = moment(ele.date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');
            if(ele.id == episode){        
                appendHtmlSlider('.info-episode .episode .title',  ele.title);
                appendHtmlSlider('.info-episode .sinopsis',  ele.description);
                r = key;
                sig = r + 1;
                prev = r - 1;
            }  
            if(ele.platform == signal_url){
              if(dateEpisode <= currentDay){      
                if(ele.vda != ''){       
                    let classActive =  (ele.id == episode) ? 'active-item': '';
                    let pgm = parseoTexto(ele.title);
                        html += `<li id="${ele.id}" class="episode-item ${classActive}" 
                                    data-media="${ele.id}" data-video="${ele.vda}" data-m3u8="${ele.file}">
                                    <a href="./programas/detalle-programa/${slug}_${ele.id}_${pgm+senal}">
                                        <h3>${ele.title}</h3>     
                                    </a>
                                </li>`;
                        i = i - 1;
                }  
              }
            }
        });
    $(".list").append(html);
    let filterNext = ( info[sig] ) ? info[sig] : false;  
    if(filterNext){
      let nameNext = parseoTexto(info[sig].title);
      $('#link_next').attr('href', './programas/detalle-programa/'+slug+'_'+info[sig].id+'_'+nameNext+senal);
      $('#btn-next').attr('href', './programas/detalle-programa/'+slug+'_'+info[sig].id+'_'+nameNext+senal);
    }else{
      $('.section-detail-video .container-video .details .pgm-description .pgm').attr('style', 'flex-direction: row-reverse;');
      $('.section-detail-video .container-video .video-info .info-episode .episode').attr('style', 'flex-direction: row-reverse;');
      $('#link_next').attr('style', 'display: none;');
      $('#btn-next').attr('style', 'display: none;');
    }
    let filterPrev = ( info[prev] ) ? info[prev] : false;  
    if(filterPrev){
      var namePrev = parseoTexto(info[prev].title);
      $('#link_retorno').attr('href', './programas/detalle-programa/'+slug+'_'+info[prev].id+'_'+namePrev+senal);
      $('#btn-back').attr('href', './programas/detalle-programa/'+slug+'_'+info[prev].id+'_'+namePrev+senal);
    }else{
      $('#link_retorno').attr('style', 'display: none;');
      $('#btn-back').attr('style', 'display: none;');
    }
    scrollItemActive();
}
/**
 * @description Funcion que obtiene la informacion del programa
*/
const loadChannelUI = () =>{
    // canalonce.events("Acceso", "Vista Programa", $(".titulo_programa").html(), 1);    
    // 
    getEpisodesPgm(slugc, jsonPgm, id_episode, signal);
}
/**
 * @description Funcion que reproduce el episodio
 * @param id Id del episodio
 * @param video Video en formato youtube o vimeo
 * @param m3u8 Video en formato meu8
*/ 
const PlayEpisode = (id,video,m3u8) => {
// 
    $.getJSON( "https://extreme-ip-lookup.com/json/?key=xSUUGXGBOO6OkWdcrLbl", function(data){
        if(data.countryCode == "US" || data.countryCode == "CA" || data.countryCode == "PR"){
    
        }else{
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
    
            var options = { 
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
                    rel: 1,
                    fs: 1,
                },
            };  
            videojs.registerPlugin('apiVideoAnalytics', VideoJsApiVideoAnalytics);
            let reproductor =  videojs('VideoPlayer', {options});  
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
                reproductor.hotkeys({
                    volumeStep: 0.1,
                    seekStep: 5,
                    enableMute: true,
                    enableFullscreen: true,
                    enableNumbers: false,
                    enableVolumeScroll: true,
                    enableHoverScroll: true,
                    captureDocumentHotkeys: true,
                    documentHotkeysFocusElementFilter: e => e.tagName.toLowerCase() === "body",
                    fullscreenKey: function(e) {
                    return ((e.which === 70) || (e.ctrlKey && e.which === 13));
                    },                                  
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
            reproductor.src({ type: 'video/mp4', src: video });          
            reproductor.controls(true);
            reproductor.playsinline(false);  
            }      
        }   
    });
}
/**
 * @description Funcion que obtiene la informacion del episodio para reproducir
*/ 
const playVideo = async (data) => {
    let info = await data;
    info.forEach(ele => {
        if (ele.id === id_episode) {
        let id = ele.id, video = ele.vda, m3u8 = ele.file;
            PlayEpisode(id, video, m3u8);
        }
    });
}
// 
document.addEventListener("DOMContentLoaded", function(event) {  
    setTimeout(function(){
        $("body").removeClass("body-overflow-hidden");    
    }, 1700);  
    loadChannelUI();
    playVideo(jsonPgm);    
});