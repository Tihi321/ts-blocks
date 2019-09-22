<?php
/**
 * Display footer content
 *
 * @package TS_Blocks\Layout\Footer\Components
 *
 * @since 1.0.0
 */

use TS_Blocks\Plugins\Acf\Theme_Options;

$footer_url          = \get_field( Theme_Options::FOOTER_URL_FIELD, 'option' );
$footer_address_text = \get_field( Theme_Options::FOOTER_ADDRESS_TEXT, 'option' );
$copyright           = \get_field( Theme_Options::FOOTER_COPYRIGHT, 'option' );

?>

<footer class="footer">
  <div class="footer__container">
    <div class="footer__bottom">
      <div class="footer__menu">
        <a class="footer__menu-link" href="<?php echo esc_url( $footer_url ); ?>"><?php echo esc_html( $footer_address_text ); ?></a>
        <?php
          echo esc_html( apply_filters( 'a1c_bem_menu', 'footer_main_nav', 'footer-navigation' ) );
        ?>
      </div>
      <div class="footer__copyright">
        <div class="footer__copyright-text"><?php echo esc_html( sprintf( '@%s %s', current_time( 'Y' ), esc_html( $copyright ) ) ); ?></div>
      </div>
    </div>
  </div>
</footer>
