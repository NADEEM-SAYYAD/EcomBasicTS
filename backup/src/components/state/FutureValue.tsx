//Here we saw the combination of future value and type assertion
import { useState } from "react";

type UserDetails = {
    name: string;
    email: string;
    age: number;
};

const FutureValue = () => {
    //const [user, setUser] = useState<null | UserDetails>({} as UserDetails);
    const [user, setUser] = useState<null | UserDetails>({} as UserDetails);
    const changeDetails = () => {
        setUser({
            name: "nadeem",
            email: "abc@gmail.com",
            age: 27,
        });
    };
    const removeDetails = () => {
        setUser({} as UserDetails);
    };
    
    return (
        <div>
            <p>User Name : {user?.name}</p>
            <p>User Email : {user?.email}</p>
            <p>User Age : {user?.age}</p>
            <button onClick={changeDetails}>Add Details</button>
            <button onClick={removeDetails}>Remove Details</button>
        </div>
    );
};
export default FutureValue;
