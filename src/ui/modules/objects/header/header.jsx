import defaults from './header.json';

const Header = props => (
    <Module {...props}>
        <Component name='tools' tag='ul'>
            <li><Component name='action' href='#'>File</Component></li>
            <li><Component name='action' href='#'>Edit</Component></li>
            <li><Component name='action' href='#'>Help</Component></li>
            <li><Component name='changes'>No Changes Made</Component></li>
        </Component>

        <Component name='project'>
            <Component name='doctype'>Docutype - Untitled Design</Component>
            <Button round tertiary>Share</Button>
            <Button round primary>Publish</Button>
        </Component>
    </Module>
);

Header.defaultProps = {
    name: defaults.header.name
};

export default Header;