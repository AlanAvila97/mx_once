const ImagenesCarruseles = fetchData('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/icarouseles.json?cache='+Date.now());
const ImagesBannerRotativo = fetchData('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/brotativo.json?cache='+Date.now());
/**
  * @description 
  * @param data Información del registro del programa
  * @param type Tipo de imagen 1 Vertical 2 Horizontal
*/
const filterImages = (data, type) => {
    let images = {};
    if(type == 1){
        images.urlImg = RESTURLDataIMAGES; 
        images.image = data.imageC; 
        images.imageWebp = (data.imageWC == null ) ? data.imageC : data.imageWC; 
    }else{
        images.urlImg = RESTURLDataNormal; 
        images.image = data.imageN;
        images.imageWebp = (data.imageWN == null ) ? data.imageN : data.imageWN; 
    }
    return images;
}
/**
  * @description Funcion que obtiene las imagenes del slider de la cabecera y las plasma en la vista
  * @param data Información del json que contiene las imagenes de los sliders
*/
const seccionHeader = (data) => {
    let html = '';
    data.forEach(ele => {
        if(ele.imagen != null && ele.imagenw !=  null){

            let link = (ele.link == 'undefined') ? '' : ele.link; 
            let label = (ele.titulo != "") ? ele.titulo : ele.subtitulo;
            let imagech = ( ele.imagenh != null ) ? ele.imagenh : ele.imagen;
                html += '<div class="swiper-slide">'+
                            '<a class="redirect-slider-head " href="'+link+'" aria-label="'+label+'">'+
                                '<picture>'+
                                    '<source srcset="'+RESTURLDataIMAGES+imagech+'" media="(max-width: 600px)" />'+
                                    '<source class="lazy img-fluid" srcset="'+RESTURLDataIMAGES+ele.imagenw+'" type="image/webp" media="(max-width: 1500px)">'+
                                    '<source class="lazy img-fluid" srcset="'+RESTURLDataIMAGES+ele.imagen+'" type="image/png">'+ 
                                    '<img class="lazy img-fluid" src="'+RESTURLDataIMAGES+ele.imagenw+'" alt="'+ele.subtitulo+'" loading="lazy" title="'+ele.subtitulo+'" width="2000" height="554">'+
                                '</picture>'+
                            '</a>'+
                        '</div>';
        }
    });
    $(".section-slider-header .slider-header .swiper-wrapper").append(html);        
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
    $("body.index "+element).append(html);        
}
/**
* @description Funcion que obtiene las imagenes de los todos los sliders 
*/
const setImagesSliders = async() => {
    const Carruseles = await ImagenesCarruseles;
    const Carrusel_head = await ImagesBannerRotativo;
    seccionHeader(Carrusel_head);
    setSectionSlidersData(Carruseles.icontenidos, '.slider-special-programs .swiper-estrenos-special-programs .swiper-wrapper', 2);
    setSectionSlidersData(Carruseles.iestrenos, '.slider-special-programs .swiper-information-special-programs .swiper-wrapper', 1);
    setSectionSlidersData(Carruseles.ionceplus, '.slider-special-programs .swiper-series-special-programs .swiper-wrapper', 2);
}
/**
* @description Funcion que activa al iniciar el archivo
*/
$(document).ready(function() {
    setImagesSliders();
});