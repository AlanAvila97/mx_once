<!-- Header -->
<header class="header fixed-top header-once">
    <div class="container-header">
        <div class="content-menu-hamburguer">
            <input type="checkbox" class="menu-btn" id="openSidebarMenu">
            <div id="sidebarMenu">
                <div class="container-menu scroll-menu">
                    <a id="MenuInicio" href="./" class="items Seccion-Menu" aria-label="Redirección a página principal">
                        <h3>Inicio</h3>
                    </a>
                    <a id="MenuHorarios" href="./en-vivo" class="items items-live Seccion-Menu" aria-label="Redirección a página horarios">
                        <i class="fa fa-circle"></i><h3>TV en vivo</h3>
                    </a>
                    <a id="MenuHorarios" href="./radio" class="items items-live Seccion-Menu" aria-label="Redirección a página horarios">
                        <i class="fa fa-circle"></i><h3>Radio en vivo</h3>
                    </a>
                    <a id="MenuHorarios" href="./noticias" class="items Seccion-Menu" aria-label="Redirección a página horarios">
                        <h3>Noticias</h3>
                    </a>
                    <a id="MenuHorarios" href="./mananera-pueblo" class="items Seccion-Menu" aria-label="Redirección a página horarios">
                        <h3>Mañanera del Pueblo</h3>
                    </a>
                    <a id="MenuHorarios" href="./acordeones" class="items Seccion-Menu" aria-label="Redirección a página horarios">
                        <h3>Acordeones</h3>
                    </a>
                    <a id="MenuHorarios" href="./infomedia" class="items Seccion-Menu" aria-label="Redirección a página horarios">
                        <h3>Infodemia</h3>
                    </a>
                    <a id="MenuHorarios" href="./biblioteca-digital" class="items Seccion-Menu" aria-label="Redirección a página horarios">
                        <i class="fa fa-search"></i>
                        <h3>Biblioteca digital</h3>
                    </a>
                    <hr>
                </div>
            </div>
        </div>
        <div class="logo">
            <a href="./" aria-label="Redirección a página principal">                    
                <picture>
                    <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logomxplus.png" type="image/webp">
                    <source class="lazy img-fluid" srcset="https://canalonce.mx/REST/data/images/logomxplus.png" type="image/png"> 
                    <img class="img-fluid lazy" src="https://canalonce.mx/REST/data/images/logomxplus.png" alt="Logo mx+" width="139" height="45">
                </picture>
            </a>
        </div><!-- End div logo -->
        <div class="sections-nav">
            <ul class="elements-nav">
                <li class="live"> 
                    <a href="./en-vivo" aria-label="Redirección a página en vivo">
                        <i class="fa fa-circle"></i><h3>TV en vivo</h3>
                    </a>
                </li>
                <li class="live radio-live">
                    <a href="./radio" aria-label="Redirección a página en vivo">
                        <i class="fa fa-circle"></i><h3>Radio en vivo</h3>
                    </a>
                </li>                
                <li class="programation n-noticias">
                    <a href="./noticias" aria-label="Redirección a página en vivo">
                        <h3>Noticias</h3>
                    </a>
                </li>                
                <li class="programation n-mananera">
                    <a href="./mananera-pueblo" aria-label="Redirección a página en vivo">
                        <h3>Mañanera del Pueblo</h3>
                    </a>
                </li>                
                <li class="programation n-acordeones">
                    <a href="./acordeones" aria-label="Redirección a página en vivo">
                        <h3>Acordeones</h3>
                    </a>
                </li>                
                <li class="programation n-infodemia">
                    <a href="./infomedia" aria-label="Redirección a página en vivo">
                        <h3>Infodemia</h3>
                    </a>
                </li>                                    
                <li class="programation n-biblioteca">
                    <a href="./biblioteca-digital" aria-label="Redirección a página en vivo">
                        <i class="fa fa-search"></i>
                        <h3>Biblioteca digital</h3>
                    </a>
                </li>  
                <li class="more">
                    <button id="btn-more" data-status="0">
                        más &nbsp;
                        <i id="arrow-down" class="fas fa-angle-down"></i>
                        <i id="arrow-up" class="fas fa-angle-up"></i>
                    </button>
                    <div class="list-more">
                        <div class="container-list-down">
                            <div class="lists-down list-site">
                                <a class="sitios-once site-live s_en-vivo" href="./en-vivo" aria-label="Redirección a página once+"> 
                                    <i class="fa fa-circle"></i><p>TV en vivo</p>
                                </a>                                    
                                <a class="sitios-once site-live s_r-en-vivo" href="./radio" target="_blank" aria-label="Enlace externo al sitio Once Noticias"> 
                                    <i class="fa fa-circle"></i><p>Radio en vivo</p>
                                </a>
                                <a class="sitios-once s_noticias" href="./noticias"  target="_blank" aria-label="Enlace externo al sitio Niñas y Niños"> 
                                    <p>Noticias</p>
                                </a>
                                <a class="sitios-once s_mananera" href="./mananera-pueblo" aria-label="Redirección a página Once México"> 
                                    <p>Mañanera del Pueblo</p>
                                </a>
                                <a class="sitios-once s_acordeones" href="./acordeones" aria-label="Redirección a página Once Digital"> 
                                    <p>Acordeones</p> 
                                </a>
                                <a class="sitios-once s_infomedia" href="./infomedia" aria-label="Redirección a página Once Digital"> 
                                    <p>Infodemia</p> 
                                </a>
                                <a class="sitios-once s_biblioteca" href="./biblioteca-digital" aria-label="Redirección a página Once Digital"> 
                                    <p>Biblioteca digital</p> 
                                </a>
                            </div>
                            <div class="lists-down list-about d-none">
                                <h2>Institucional</h2>
                                <a href="./sobre-canal-once" aria-label="Redirección a página Acerca de El Once"> Acerca de El Once </a>
                                <a href="./transparencia" aria-label="Redirección a página Transparencia"> Transparencia </a>
                                <a href="./defensoria" aria-label="Redirección a página Defensoría"> Defensoría </a>
                                <a href="./consejo-ciudadano" aria-label="Redirección a página Consejo Ciudadano de Canal Once"> Consejo Ciudadano </a>
                                <a href="./transparencia#ProteccionDatos" aria-label="Redirección a página Protección de Datos Personales">Protección de Datos Personales </a>
                                <a href="./sobre-canal-once/colabora" aria-label="Redirección a página Colabora con Nosotros"> Colabora con Nosotros </a>
                                <a href="./archivo-historico" aria-label="Redirección a página Archivo Histórico"> Archivo Histórico </a>
                                <a href="./sobre-canal-once/contacto" aria-label="Redirección a página Contacto"> Contacto </a>                                    
                            </div>
                            <div class="lists-down list-sites d-none">      
                                <h2>SÍGUENOS</h2>
                                <a href="https://www.facebook.com/CanalOnceTV" target="_blank" aria-label="Enlace externo al facebook del Canal Once"> 
                                    <span class="fa-stack">
                                        <i class="far fa-square fa-stack-2x"></i>
                                        <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                                <a href="https://twitter.com/CanalOnceTV" target="_blank" aria-label="Enlace externo al twitter del Canal Once">
                                    <span class="fa-stack">
                                        <i class="far fa-square fa-stack-2x"></i>
                                        <i class="fa-brands fa-x-twitter fa-stack-1x fa-inverse"></i>
                                        <i class=""></i>
                                    </span>
                                </a>
                                <a href="https://www.instagram.com/canaloncetv/" target="_blank" aria-label="Enlace externo al instagram del Canal Once"> 
                                    <span class="fa-stack">
                                        <i class="far fa-square fa-stack-2x"></i>
                                        <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                                <a href="https://www.youtube.com/user/CanalOnceIPN" target="_blank" aria-label="Enlace externo al youtube"> 
                                    <span class="fa-stack">
                                        <i class="far fa-square fa-stack-2x"></i>
                                        <i class="fab fa-youtube fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                                <a href="https://www.tiktok.com/@canaloncetv" target="_blank" aria-label="Enlace externo al tiktok del Canal Once"> 
                                    <span class="fa-stack">
                                        <i class="far fa-square fa-stack-2x"></i>
                                        <i class="fab fa-tiktok fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>              
            </ul><!-- End ul elements nav -->
        </div><!-- End div seccion nav -->
    </div> <!-- End div container header -->
</header>
<!-- End header -->