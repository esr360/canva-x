import defaults from './editorNav.json';

const EditorNav = props => (
    <Module {...props}>
        <Component name='menu'>
            <li><i className='fa fa-2x fa-image'></i> Templates</li>
            <li className='active'><i className='fa fa-2x fa-image'></i> Images</li>
            <li><i className='fa fa-2x fa-image'></i> Text</li>
            <li><i className='fa fa-2x fa-image'></i> Uploads</li>
            <li><i className='fa fa-2x fa-image'></i> Folders</li>
        </Component>

        <Component name='pane'>
            <img src='assets/images/gallery/bg10.jpg' />
            <img src='assets/images/gallery/bg7.jpg' />
            <img src='assets/images/gallery/bg6.jpg' />
            <img src='assets/images/gallery/bg5.jpg' />
            <img src='assets/images/gallery/bg8.jpg' />
            <img src='assets/images/gallery/bg4.jpg' />
            <img src='assets/images/gallery/bg3.jpg' />
            <img src='assets/images/gallery/bg1.jpg' />
        </Component>
    </Module>
);

EditorNav.defaultProps = {
    name: defaults.editorNav.name
};

export default EditorNav;