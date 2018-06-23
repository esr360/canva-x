import defaults from './button.json';

const Button = props => (
    <Module tag={props.href ? 'a' : false} {...props}>
        {props.children}
    </Module>
);

Button.defaultProps = {
    name: defaults.button.name,
    fluid: true
};

export default Button;