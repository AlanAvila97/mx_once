<section class="section-interior-program pt-md-70">
    <div class="container-programs">
        <div class="container-info-pgm">
            <div class="description-pgm">
                <div class="content-img-logo">
                    <img class="logo-pgm img-fluid"
                        src="https://canalonce.mx/REST/data/normal/<?php echo strip_tags($imageEpisode); ?>"
                        alt="<?php echo $programa[0]->name; ?>">
                </div>
                <div class="title-pgm">
                    <h1><?php echo $programa[0]->name ?></h1>
                </div>
                <div class="sinopsis-pgm">
                    <h3>Sinopsis</h3>
                    <p> <?php echo $programa[0]->description; ?> </p>
                </div>
            </div>
            <div class="trailer-pgm">
                <?php if (empty($programa[0]->trailer)) { ?>
                    <div class="trailer">
                        <picture class="logo-once-plus">
                            <source class="lazy img-fluid"
                                srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-mas-lg.webp"
                                type="image/webp" alt="Logo Once +" loading="lazy">
                            <source class="lazy img-fluid"
                                srcset="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-mas-lg.png"
                                type="image/png" alt="Logo Once +" loading="lazy">
                            <img class="lazy img-fluid"
                                src="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/images/logo-mas-lg.webp"
                                alt="Logo Once +" loading="lazy" title="LOGO WEB ">
                        </picture>
                    </div>
                <?php } else { ?>
                    <div class="video-trailer">
                        <video id="VideoPlayer" class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
                            autoplay controls data-setup='{"fluid": true}' poster="<?php echo $poster; ?>"
                            height="500">
                        </video>
                    </div>
                <?php } ?>
                <div class="title-list">
                    <h2>Episodios</h2>                    
                </div>
                <div class="list-episodes" data-plataforma="<?php echo $programa[0]->id_plataforma; ?>"
                    data-slug="<?php echo $programa[0]->slugc; ?>">
                    <ul class="list">
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>