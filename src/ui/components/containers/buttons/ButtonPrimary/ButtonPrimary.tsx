import './styles.css';

interface IButtonPrimary {
    children?: any;
    style?: {},
    className?: string;
    onClick(): void;
}

const ButtonPrimary = ({children, style,className, onClick}: IButtonPrimary) => {
    return <button style={style} onClick={onClick} className={`button-primary-custom ${className}`}>{children}</button>
}

export default ButtonPrimary;