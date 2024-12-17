const RESTURLData = "https://canalonce.mx/REST/data/";
const RESTURLDataIMAGES = "https://canalonce.mx/REST/data/images/";
const RESTURLDataNormal = "https://canalonce.mx/REST/data/normal/";
/**
 * @description Funcion que obtiene el json que contiene la informacion de los sliders del Home
*/
async function fetchData(url) {
  try {
      const res = await fetch(url+'?cache='+Date.now())
      const data = await res.json()
      return data;
  } catch (error) {
      console.log(error);
  }
}
/**
* @description Funcion que obtiene un elemento por la clase
*/   
const getClassElemment = (element) => {
  return document.getElementsByClassName(element);
}
/**
* @description Funcion que obtiene un elemento html
*/   
const getQueryElement = (element) => {
    return document.querySelector(element);
}  
/**
  * @description Funcion que añade texto a un elemento html
*/
const appendHtmlSlider = ( element , text) => {
  document.querySelector(element).innerHTML = text;     
}
/**
  * @description Funcion que otorga un atributo a un elemento html
*/
const setElementAttribute = ( element , typeAttr, attr) => {
  document.querySelector(element).setAttribute(typeAttr, attr);     
}
/**
  * @description Funcion que identifica la medida de la pantalla de donde se esta visualizando el sitio
  * Cierra el menu desplegable del desktop o cierra el menu de hamburguesa de movile
*/
const sizeWindowMenus = () => {
  if (globalThis.innerWidth > 600) {
      $('#openSidebarMenu').prop('checked',false);
  } 
  setTimeout(function () {
      sizeWindowMenus();
  }, 500);
}
/**
* @description Funcion que da opacidad o da backgound solido al navbar dependiendo de la posición del top de la vista
*/
window.onscroll = function() { scrollFunction(); };
const scrollFunction = () => {
  let mobile = (/iphone|webOS|Windows Phone|iPod|Android|ipad/i.test(navigator.userAgent.toLowerCase()));
  if(mobile) {
      $('.header').attr('style', 'background: #0d0c16;');
  }else{
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
          $('.header').attr('style', 'background: #0d0c16;');
      } else {
          $('.header').attr('style', 'background: #00000066;');
      }
  }
}
/**
  * @description Funcion que contiene las funciones generales de la página
*/
const AddEvents = () => {
  /**
  * @description Funcion que abre el menu desplegable de desktop
  */
  $("body").on("click", "#btn-more", function(){
    let status = $(this).attr('data-status');
    if(status == 0){        
         $(this).attr('data-status', 1);
        setElementAttribute('.header', 'style', 'background: #0d0c16;');
        setElementAttribute('#arrow-down', 'style','display: none;');
        setElementAttribute('#arrow-up', 'style','display: block;');
        setElementAttribute('.list-more', 'style','transform: translateY(0%);');
    }else{
         $(this).attr('data-status', 0);
        setElementAttribute('.header', 'style', 'background: transparent;');
        setElementAttribute('#arrow-down', 'style', 'display: block;');
        setElementAttribute('#arrow-up', 'style', 'display: none;');
        setElementAttribute('.list-more', 'style', 'transform: translateY(-250%);');
    }
  }); 
  /**
    * @description Funcion que abre el menu de hamburguesa en movile
  */
  $("body").on("click", "#openSidebarMenu", function(){
    var n = $(this).prop( "checked");
    if(n){
      $('body').addClass('body-overflow-hidden');        
    }else{
      $('body').removeClass('body-overflow-hidden');
    }
  });
}
// 
$(document).ready(function() {
  AddEvents();
  /**
    * @description Funcion que desaparece el preloader de las vistas
  */
  setTimeout(function(){
    $('.preloader').fadeOut(1000);
  }, 1500);
});
