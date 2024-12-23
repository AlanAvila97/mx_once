// let canalonce = {
//     events:function(name, category, label, value){
//       gtag('event', name, {
//         'event_category': category,
//         'event_label': label,
//         'value': value
//       });
//     }
// }
const comprobationURl = () => {
	const valores = window.location.search;
	const urlParams = new URLSearchParams(valores);
    console.log(urlParams);
	//Accedemos a los valores
	// var type = urlParams.get('type');
	// var q = urlParams.get('q');
}
/**
  * @description Función que configura el reproductor de la señal en vivo
  * @param date contiene el id numero del día 
  * @return numDate Retorna el día parseado
*/
const reproductorLive = (video) => {
    // $.getJSON( "https://extreme-ip-lookup.com/json/?key=xSUUGXGBOO6OkWdcrLbl", function(data){
    //   if(data.countryCode == "US" || data.countryCode == "CA" || data.countryCode == "PR"){
    //     window.location.href = "https://canalonce.mx/mexico";
    //   }else{
        var options = { 
            plugins: {
              httpSourceSelector:
              {
              default: 'auto'
              },
            },  
            techOrder: [ 'chromecast', 'html5', 'youtube', 'vimeo' ],
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
        var reproductor =  videojs('streamplayer', {options});
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
            // reproductor.httpSourceSelector();
            // reproductor.landscapeFullscreen({
            //                                 fullscreen: {
            //                                     enterOnRotate: true,
            //                                     exitOnRotate: true,
            //                                     alwaysInLandscapeMode: true,
            //                                     iOS: false
            //                                 }  
            //                                 });
            // // reproductor.src({ type: 'application/x-mpegURL', src: 'https://vivo.canaloncelive.tv/alivepkgr3/ngrp:cepro_all/playlist.m3u8'});
            // reproductor.src({ type: 'application/x-mpegURL', src: 'https://vivo.canaloncelive.tv/oncedos/ngrp:pruebachunks_all/playlist.m3u8'});
            // reproductor.controls(true);
            // reproductor.playsinline(true);
            // reproductor.autoplay(true); 

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

    //   }      
    // });
}
document.addEventListener("DOMContentLoaded", function(event) {    
    reproductorLive('https://vivo.canaloncelive.tv/oncedos/ngrp:pruebachunks_all/playlist.m3u8');
    comprobationURl();
});