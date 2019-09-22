<?php
/**
 * Main header bar
 *
 * @package TS_Blocks\Views\Header
 *
 * @since 1.0.0
 */

use TS_Blocks\Manifest\Manifest;

$blog_name        = get_bloginfo( 'name' );
$blog_description = get_bloginfo( 'description' );
$header_logo_info = $blog_name . ' - ' . $blog_description;
$logo_img         = apply_filters( Manifest::MANIFEST_ITEM_FILTER_NAME, 'logo.jpg' );

?>
<div class="header js-header">
  <div class="header__container">
    <div class="header__item">
      <a class="header__logo-link" href="<?php echo esc_url( home_url() ); ?>" title="<?php echo esc_attr( $blog_name ); ?>">
        <img class="header__logo-img" src="<?php echo esc_url( $logo_img ); ?>" title="<?php echo esc_attr( $header_logo_info ); ?>" alt="<?php echo esc_attr( $header_logo_info ); ?>" />
      </a>
      <div class="header__menu js-main-navigation">
        <a href="#" class="icon--remove header__mobile-menu-remove-icon js-mobile-menu-close-trigger"></a>
        <?php
          echo esc_html( apply_filters( 'a1c_bem_menu', 'header_main_nav', 'main-navigation' ) );
        ?>
      </div>
    </div>
    <button class="header__mobile-menu-icon icon--hamburger-menu js-mobile-menu-trigger"></button>
    <div class="header__item header__search-outer">
      <?php
        get_template_part( 'src/blocks/layout/header/components/search-jobs/search', 'jobs' );
      ?>
    </div>
  </div>
</div>
