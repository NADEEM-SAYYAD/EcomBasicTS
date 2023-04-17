type PersonProps = {
    person: {
        name: string;
        age: number;
        salary: number;
        hobbies: string[];
    };
};

const Person = ({ person: { name, age, salary, hobbies } }: PersonProps) => {
    return (
        <div>
            <h3>{`Hello My Name is ${name} And i am ${age} year old and my salary is ${salary}`}</h3>
            {hobbies ? hobbies.map((item, i) => <p key={i}>{item}</p>) : null}
        </div>
    );
};
export default Person;
