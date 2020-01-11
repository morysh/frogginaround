<?php get_header(); ?>

<header>
    <img id="banner" src="<?= get_template_directory_uri(); ?>/assets/images/mapemonde.jpg">
        <button class="hamburger btn-reset">
            <svg>
                <use xlink:href="<?= get_template_directory_uri(); ?>/assets/icons/hamburger.svg#hamburger"></use>
            </svg>
        </button>
        <h1>Froggin' Around</h1>
</header>

<main>
    <aside class="left"></aside>
    <?php if (have_posts()): while (have_posts()):
        the_post(); ?>

        <article>
            <h1 class="post-title"><?php the_title(); ?></h1>
            <?php the_content(); ?>
        </article>

    <?php endwhile; endif; ?>
    <aside class="right"></aside>
</main>

<?php get_footer(); ?>
