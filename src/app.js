///****************************************************************
/// One-Nexus - A toolkit for architecting and constructing 
/// front-end user-interfaces - https://github.com/esr360/One-Nexus
///
/// @author [@esr360](http://twitter.com/esr360)
///****************************************************************

import initialConfig from './app.json';

export const config = JSON.parse(
    JSON.stringify(initialConfig).replace(/"'/g,'"').replace(/'"/g,'"')
);

// React
//*****************************************************************

import ReactDOMServer from 'react-dom/server';
import { HashLink as Link } from 'react-router-hash-link';
import { StaticRouter, HashRouter, Switch, Route } from 'react-router-dom';

export { Link, StaticRouter, HashRouter, Switch, Route };

// Theme/UI
//*****************************************************************

import UI from './ui/ui';

// Synergy
//*****************************************************************

import * as Synergy from 'Synergy';
//import * as Synergy from '../../../Synergy/src/index.js';
//import * as Synergy from '../../../Synergy/dist/synergy.js';

window.Module = Synergy.Module;
window.Component = Synergy.Component;
window.Group = Synergy.Group;
window.Wrapper = Synergy.Wrapper;

// Kayzen-GS
//*****************************************************************

import { Row, Column } from '../../../Kayzen-GS/src/js/index.js';

window.Row = Row; 
window.Column = Column;

// UI React Components
//*****************************************************************

// Elements
//export { default as Accordion } from './ui/modules/elements/accordion/accordion.jsx';

export {
    // Button
}

// window.Button = Button;

// Objects


// Views
//*****************************************************************

// Tools
export { default as Section } from './views/tools/section.jsx';

// Layouts
import Base from './views/layouts/base.jsx';

export const layouts = { 
    Base
};

// Pages
import Index from './views/pages/index.jsx';
import Accordion from './views/pages/modules/elements/accordion.jsx';

export const pages = {
    Index, 
    Accordion
}

// Render App
//*****************************************************************

import App from './app.jsx';
import { Core } from './views/core.jsx';

// Render on the server for static pages
export default locals => ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={locals.path} context={{}}>
        <Core styles={true}><App data={config.app.views} /></Core>
    </StaticRouter>
);

// Render on the client for standard React app
if (process.env.APP_ENV === 'web') {
    UI(config.app.ui);

    //ReactDOM.render(<HashRouter><App data={config.app.views} /></HashRouter>, app)
    ReactDOM.render(<HashRouter><App data={config.app.views} /></HashRouter>, app, () => UI(config.app.ui));
}

// Call the UI function once the react app has loaded
if (process.env.APP_ENV === 'node') {
    var ReactDOMLoaded = setInterval(() => {
        if (document.getElementById('app') !== '') {
            UI(config.app.ui);
    
            clearInterval(ReactDOMLoaded);
        }
    }, 100);
}