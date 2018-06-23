import ReactDOMServer from 'react-dom/server';

export class Core extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Title</title>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
                </head>
                <body>
                    <div id='app'>{this.props.children}</div>

                    {this.props.styles && <link href='assets/styles/app.css' rel='stylesheet' />}

                    <script type="text/javascript" src='assets/scripts/app.js'></script>
                </body> 
            </html>
        )
    }
}

export default props => ReactDOMServer.renderToStaticMarkup(<Core />);