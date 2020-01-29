<!DOCTYPE html>
<html lang="fr">
<head>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header>
    <img id="banner" src="<?= get_template_directory_uri(); ?>/assets/images/mapemonde.jpg">
    <button class="hamburger svg-btn" id="sidenav-toggle">
        <svg>
            <use xlink:href="<?= get_template_directory_uri(); ?>/assets/icons/sprite.svg#hamburger"></use>
        </svg>
    </button>
    <h1>Froggin' Around</h1>
</header>

<main>
    <aside class="left"></aside>