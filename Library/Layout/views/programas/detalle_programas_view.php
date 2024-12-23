<section class="info_programa d-none">
    <div class="EpisodeHolder" 
        data-programa='<?php echo strip_tags($programa[0]->name); ?>'
        data-plataforma='<?php echo strip_tags($programa[0]->id_plataforma); ?>'
        data-slug="<?php echo strip_tags($slug_pgm); ?>"
        data-description='<?php echo strip_tags($programa[0]->description); ?>'
        data-signal='<?php echo strip_tags($signal_pgm); ?>' 
        data-episode='<?php echo strip_tags($id_episode); ?>'>
    </div>
</section>
<section class="section-detail-video pt-md-70">
    <div class="container-video">
        <div class="video-info">
            <div class="video-episode">
                <video id="VideoPlayer" class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
                    autoplay controls data-setup='{"fluid": true}' width="" height="300"
                    title="Video <?php echo strip_tags($titleEpisode); ?>"
                    alt="Video <?php echo strip_tags($titleEpisode); ?>"
                    poster="https://canalonce.mx/REST/data/miniaturas/<?php echo strip_tags($imageEpisode); ?>">
                </video>
            </div>
            <div class="info-episode">
                <div class="episode">
                    <a id="btn-back" title="Episodio Anterior" alt="Episodio Anterior" aria-label="Episodio Anterior"
                        href="./programas/<?php echo strip_tags($slug_pgm); ?>">
                        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                    </a>
                    <h1 class="title"></h1>
                    <a id="btn-next" href="" title="Episodio Siguiente" alt="Episodio Siguiente" aria-label="Episodio Siguiente">
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </a>
                </div>
                <p class="sinopsis">
                </p>
            </div>
        </div>
        <div class="details">
            <div class="pgm-description">
                <div class="content-img-logo">
                    <img class="logo-pgm"
                        src="https://canalonce.mx/REST/data/miniaturas/<?php echo strip_tags($imageEpisode); ?>"
                        alt="<?php echo strip_tags($titleEpisode); ?>">
                </div>
                <div class="pgm">
                    <a id="link_retorno" title="Episodio Anterior" alt="Episodio Anterior" aria-label="Episodio Anterior"
                        href="./programas/<?php echo strip_tags($slug_pgm); ?>">
                        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                    </a>
                    <div class="content-logo-pgm">                                
                        <h2 class="titulo_programa"><?php echo strip_tags($programa[0]->name); ?></h2>
                    </div>
                    <a id="link_next" href="" title="Episodio Siguiente" alt="Episodio Siguiente" aria-label="Episodio Siguiente">
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="episodes-list">
                <div class="title-list">
                    <h2 class="episodios-titulo">Episodios</h2>
                </div>
                <ul class="list">
                </ul>
            </div>
        </div>
    </div>
</section>