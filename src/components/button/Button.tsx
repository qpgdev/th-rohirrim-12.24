interface ButtonProps {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
  }

function Button({ text, onClick, style }: ButtonProps): JSX.Element {
    return (
        <button onClick={onClick} style={style}>
            {text}
        </button>
    );
}

export default Button;
