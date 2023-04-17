import React, { useState } from "react";

type UserState = {
    email: string;
    password: string;
};
const Input = () => {
    const [user, setUser] = useState<UserState>({ email: "", password: "" });
    const { email, password } = user;
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    return (
        <div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={email} onChange={inputHandler} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" value={password} onChange={inputHandler} />
            </div>
        </div>
    );
};
export default Input;