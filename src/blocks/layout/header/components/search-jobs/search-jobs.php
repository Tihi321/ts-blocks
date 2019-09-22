<?php
/**
 * Header Serch form
 *
 * @package TS_Blocks\Views\Header
 *
 * @since 1.0.0
 */

?>

<form role="search" method="get" class="header__search js-header-serach" action="<?php echo esc_url( home_url( '/jobs' ) ); ?>" >
  <div class="header__search-field">
    <input type="text" value="<?php echo get_search_query(); ?>" name="name" id="name" class="header__search-input js-search-jobs-input input" placeholder="<?php esc_html_e( 'Search Jobs', 'a1-careers-page' ); ?>" />
    <i class="icon--magnifier header__search-icon"></i>
  </div>
</form>
