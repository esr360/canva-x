import defaults from './header.json';

const Header = props => (
    <Module name={defaults.header.name}>
        {props.children}
    </Module>
);

export default Header;