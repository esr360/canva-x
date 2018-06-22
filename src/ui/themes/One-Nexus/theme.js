///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as UI from '../../ui';
import config from './theme.json';

/**
 * @example import One_Nexus from './themes/One-Nexus/theme'
 * @param {Object} custom 
 */
export default function(custom) {

    const options = UI.deepextend(config.theme, custom);

    ///************************************************************
    /// Utilities
    ///************************************************************

    UI.colors();
    UI.grid();
    UI.typography();
    UI.core();

    ///************************************************************
    /// Elements
    ///************************************************************

    UI.accordion(options.accordion);
    UI.alert(options.alert);
    UI.carousel();
    UI.form();
    UI.modal(options.modal);
    UI.overlay();
    // UI.progressBar();
    // UI.tabs();
    // UI.tooltips();

    ///************************************************************
    /// Objects
    ///************************************************************

    // UI.googleMap();
    // UI.header();
    // UI.preloader();
    // UI.scrollTop();
    // UI.search();
    // UI.sideNav();

    window.THEME = UI.evalConfig(UI.deepextend(UI.config, options));
}