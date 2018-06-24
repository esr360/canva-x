import * as app from './app';
import { Switch, Route } from 'react-router-dom';

// Stylesheet
if (process.env.APP_ENV === 'web') {
    require('./app.scss');
}

const App = () => (
    <Switch>
        <Route path='/' exact component={app.pages.Index} />
    </Switch>
);

export default App;