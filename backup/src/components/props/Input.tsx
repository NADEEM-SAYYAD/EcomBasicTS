type InputProps = {
    name: string;
    nameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ name, nameHandler }: InputProps) => {
    return (
        <p>
            <input type="text" value={name} onChange={(e) => nameHandler(e)} />
        </p>
    );
};
export default Input;
