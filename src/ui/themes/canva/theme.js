///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as UI from '../../ui';
import config from './theme.json';

/**
 * @example import canva from './themes/canva/theme'
 * @param {Object} custom 
 */
export default function(custom) {

    const options = UI.deepextend(config.theme, custom);

    ///************************************************************
    /// Utilities
    ///************************************************************

    //UI.colors();

    ///************************************************************
    /// Elements
    ///************************************************************

    //UI.accordion(options.accordion);

    ///************************************************************
    /// Objects
    ///************************************************************

    window.THEME = UI.evalConfig(UI.deepextend(UI.config, options));
}