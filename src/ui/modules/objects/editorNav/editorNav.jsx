import defaults from './editorNav.json';

const EditorNav = props => (
    <Module name={defaults.editorNav.name} {...props}>
        <Component name='menu'>
            <li><i className='fa fa-2x fa-columns'></i> Templates</li>
            <li className='active'><i className='fa fa-2x fa-image'></i> Images</li>
            <li><i className='fa fa-2x fa-font'></i> Text</li>
            <li><i className='fa fa-2x fa-cloud-upload'></i> Uploads</li>
            <li><i className='fa fa-2x fa-plus'></i> Folders</li>
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

export default EditorNav;