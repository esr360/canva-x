import * as app from '../../app';

/**
 * Render Base layout
 */
export default class Base extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div>
                        <app.Link to='/'>Home</app.Link>
                        <app.Link to='/accordion'>Accordion</app.Link>
                    </div>

                    {this.props.children}
                </div>

                <div className="overlay" id="overlay"></div>
            </main>
        )
    }
}