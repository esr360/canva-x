import defaults from './editorPane.json';

const EditorPane = props => (
    <Module {...props}>
        <Component tag='div' name='canvas'></Component>
    </Module>
);

EditorPane.defaultProps = {
    name: defaults.editorPane.name
};

export default EditorPane;