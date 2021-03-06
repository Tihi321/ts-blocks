<?php
/**
 * Plugin main file starting point
 *
 * @since             1.0.2
 * @package           TS_Blocks
 *
 * @wordpress-plugin
 * Plugin Name:       Ts blocks
 * Plugin URI:
 * Description:       Expands gutenberg with new blocks
 * Version:           1.0.2
 * Author:            Tihomir Selak <tknox.dr@gmail.com>
 * Author URI:        https://tihomir-selak.from.hr/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       ts-blocks
 */

namespace TS_Blocks;

use TS_Blocks\Includes as Includes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
  die;
}

/**
 * Include the autoloader so we can dynamically include the rest of the classes.
 *
 * @since 1.0.0
 */
require __DIR__ . '/vendor/autoload.php';


/**
 * Global variable defining plugin name generally used for naming assets handlers.
 *
 * @since 1.0.0
 */
\define( 'TB_PLUGIN_NAME', 'ts-blocks' );


/**
 * Global variable defining rest api version name generally used for naming assets handlers.
 *
 * @since 1.0.0
 */
define( 'TB_API_VERSION', 'v1' );

/**
 * Global variable defining plugin version generally used for versioning assets handlers.
 *
 * @since 1.0.0
 */
\define( 'TB_PLUGIN_VERSION', '1.0.0' );

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since 1.0.0
 */
function init_plugin() {
  ( new Core\Main() )->register();
}

init_plugin();
