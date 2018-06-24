import defaults from './editorPane.json';

const EditorPane = props => (
    <Module name={defaults.editorPane.name} {...props}>
        <Component tag='div' name='canvas'>
            <Component name='grid'>
            </Component>
        </Component>
    </Module>
);

export default EditorPane;