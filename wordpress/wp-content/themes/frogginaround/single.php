<?php get_header(); ?>

<section id="articles">

    <?php if (have_posts()): while (have_posts()):
        the_post(); ?>

        <article>
            <h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
            <p class="post-date"><?php the_date() ?> à <?php the_time(); ?></p>
            <div class="post-content">
                <?php the_content(); ?>
            </div>
        </article>

    <?php endwhile; endif; ?>

</section>

<?php get_footer(); ?>
