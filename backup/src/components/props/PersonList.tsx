type PersonListProps = {
    persons: {
        name: string;
        age: number;
        salary: number;
        hobbies: string[];
    }[];
};

const PersonList = ({ persons }: PersonListProps) => {
    return (
        <div>
            <h3>Person List</h3>
            {persons.map((p, ind) => (
                <p key={ind}>
                    {p.name} {p.age} {p.salary} {JSON.stringify(p.hobbies)}
                </p>
            ))}
        </div>
    );
};
export default PersonList;
