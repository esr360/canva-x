///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import * as UI from './ui';
import config from './ui.json';

export { config };

// Vendor
//*****************************************************************

import deepextend from 'deep-extend';
import { Synergy } from 'Synergy';

export {
    deepextend,
    Synergy
};

// Modules
//*****************************************************************

// Elements

// Objects

// Utilities


// Tools
//*****************************************************************

import { formatThemeName } from './tools/js/app.formatThemeName';

// Theme
//*****************************************************************

export { default as One_Nexus } from './themes/One-Nexus/theme';

export default function(custom, callback) {
    config.ui = deepextend(config.ui, custom);
    
    UI[formatThemeName(config.ui.theme)](config.ui.modules);

    window.UI = UI;
}

// Global Methods
//*****************************************************************

Element.prototype.component = function(component, operator) {
    return Synergy(this).component(component, operator, this);
};

Element.prototype.modifier = function(modifier, operator) {
    return Synergy(this).modifier(modifier, operator, this);
};

Element.prototype.parents = function(selector) {
    return parents(this, selector);
};