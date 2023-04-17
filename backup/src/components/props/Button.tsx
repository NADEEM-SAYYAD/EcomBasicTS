type ButtonProp = {
    greet: (e: React.MouseEvent<HTMLButtonElement>, name: string) => void;
};

const Button = ({ greet }: ButtonProp) => {
    return (
        <button id="btnClick" onClick={(e) => greet(e, "Nadeem")}>
            Click Me
        </button>
    );
};
export default Button;
