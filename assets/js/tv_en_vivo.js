const ImagenesCarruseles = fetchData('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/icarouseles.json?cache='+Date.now());
/**
  * @description 
  * @param data Información del registro del programa
  * @param type Tipo de imagen 1 Vertical 2 Horizontal
*/
const filterImages = (data, type) => {
    let images = {};
        images.urlImg = RESTURLDataNormal; 
        images.image = data.imageN;
        images.imageWebp = (data.imageWN == null ) ? data.imageN : data.imageWN; 
    return images;
}
/**
  * @description Funcion que obtiene las imagenes del slider de Estrenos y las plasma en la vista
  * @param data Información del json que contiene las imagenes de los sliders
  * @param element Información 
*/
const setSectionSlidersData = (data, element, type) => {
    let html = '';
    data.forEach(ele => {
        let { urlImg, image, imageWebp } = filterImages(ele, type);
        html += '<div class="swiper-slide">'+
                  '<a href="./programas/'+ele.slug+'">'+
                      '<picture>'+
                          '<source class="lazy img-fluid swiper-lazy" srcset="'+urlImg+imageWebp+'" type="image/webp">'+
                          '<source class="lazy img-fluid swiper-lazy" srcset="'+urlImg+image+'" type="image/png">'+
                          '<img class="lazy img-fluid swiper-lazy" src="'+urlImg+imageWebp+'" alt="'+ele.name+'" loading="lazy" title="'+ele.name+'" height="314" width="234">'+
                      '</picture>'+
                      '<h3>'+ele.name+'</h3>'+
                  '</a>'+
                  '<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>'+
              '</div>';
    });    
    $("body "+element).append(html);        
}
/**
* @description Funcion que obtiene las imagenes de los todos los sliders 
*/
const setImagesSliders = async() => {
    const Carruseles = await ImagenesCarruseles;
    setSectionSlidersData(Carruseles.icontenidos, '.slider-special-programs .swiper-internacional-special-programs .swiper-wrapper', 2);
}
/**
* @description Funcion que activa al iniciar el archivo
*/
$(document).ready(function() {
    setImagesSliders();
});