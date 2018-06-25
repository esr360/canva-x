///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import config from './app.json';

// React
//*****************************************************************

import { HashLink as Link } from 'react-router-hash-link';
import { StaticRouter, HashRouter, Switch, Route } from 'react-router-dom';

export { Link, StaticRouter, HashRouter, Switch, Route };

// Theme/UI
//*****************************************************************

import UI from './ui/ui';

// Synergy
//*****************************************************************

import * as Synergy from 'Synergy';

window.Module = Synergy.Module;
window.Component = Synergy.Component;

// UI React Components
//*****************************************************************

// Elements
import Button from './ui/modules/elements/button/button.jsx';

// Objects
import Header from './ui/modules/objects/header/header.jsx';
import EditorNav from './ui/modules/objects/editorNav/editorNav.jsx';
import EditorPane from './ui/modules/objects/editorPane/editorPane.jsx';

window.Button = Button;
window.Header = Header;
window.EditorNav = EditorNav;
window.EditorPane = EditorPane;

// Views
//*****************************************************************

// Pages
import Index from './views/pages/index.jsx';

export const pages = {
    Index
}

// Render App
//*****************************************************************

import App from './app.jsx';

// Render on the client for standard React app
if (process.env.APP_ENV === 'web') {
    UI(config.app.ui);

    ReactDOM.render(<HashRouter><App data={config.app.views} /></HashRouter>, app, () => UI(config.app.ui));
}