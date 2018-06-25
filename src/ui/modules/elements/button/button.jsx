import defaults from './button.json';

const Button = props => (
    <Module name={defaults.button.name} tag={props.href ? 'a' : false} {...props}>
        {props.children}
    </Module>
);

export default Button;