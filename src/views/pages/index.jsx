import * as app from '../../app';

export default class Index extends React.Component {
    render() {
        return (
            <app.layouts.Base {...app.config.app.views}>
                <h1>Hello Canva!</h1>
            </app.layouts.Base>
        )
    }
}