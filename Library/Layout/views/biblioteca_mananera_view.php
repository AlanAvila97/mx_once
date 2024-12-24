<section class="section-biblioteca-mananera pt-md-70">
    <article class="container-biblioteca-mananera d-flex">
        <div class="title-biblioteca-mananera d-flex">
            <h2><?php echo $programa[0]->title ?></h2>
        </div>
        <div class="video-nota">
            <picture >
                <source class="lazy img-fluid" srcset="<?php echo $poster; ?>" type="image/webp">
                <source class="lazy img-fluid" srcset="<?php echo $poster; ?>" type="image/png"> 
                <img class="lazy img-fluid" src="<?php echo $poster; ?>" 
                     alt="Logo <?php echo $programa[0]->title ?>" loading="lazy" 
                     title="Logo <?php echo $programa[0]->title ?>" width="300" height="300">
            </picture>  
        </div>
        <div class="content-note d-grid">
            <div class="description-nota">
                <?php echo $programa[0]->content ?>
            </div>
            <article class="sidebar-note d-flex">
                <a href="" class="icon-note d-flex">
                    <i class="fa-solid fa-file-pdf"></i>
                    <h4>Link a PDF</h4>
                </a>
                <a href="" class="icon-note d-flex">
                    <i class="fa-solid fa-video"></i>
                    <h4>Link a Video</h4>
                </a>
            </article>
        </div>
    </article>
</section>