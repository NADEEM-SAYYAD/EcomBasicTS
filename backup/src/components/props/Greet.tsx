type GreetProps = {
    name: string;
    age?: number;
    salary?: number;
};

const Greet = ({ name, age, salary }: GreetProps) => {
    if (name) {
        <div>
            <h2>{`Hello ${name} you are ${age} year old, And your salary is ${salary}`}</h2>
        </div>;
    }
    return <div>{name}</div>;
};
export default Greet;
