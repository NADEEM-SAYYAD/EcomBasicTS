import "./App.css";
import Greet from "./Greet";
import Person from "./Person";
import PersonList from "./PersonList";
import Children from "./Children";
import Info from "./Info";
import Button from "./Button";
import Input from "./Input";
import React, { useState } from "react";
import Style from "./Style";

function PropsApp() {
    let person = {
        name: "Nadeem",
        age: 28,
        salary: 50000,
        hobbies: ["Playing Cricket", "Watching Movies", "Reading Books"],
    };

    let persons = [
        {
            name: "Karan",
            age: 25,
            salary: 40000,
            hobbies: ["Playing Cricket", "Watching Movies", "Reading Books"],
        },
        {
            name: "Roahn",
            age: 26,
            salary: 50000,
            hobbies: ["Playing Cricket", "Watching Movies", "Reading Books"],
        },
    ];

    const sayHello = (e: React.MouseEvent<HTMLButtonElement>, name: String) => {
        console.log(e.target, name);
    };

    const [name,setName] = useState("");
    const nameHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }
    
    return (
        <div className="App">
            <Greet name="Nadeem" age={27} salary={50000} />
            <Greet name="Karan" />
            <Person person={person} />
            <PersonList persons={persons} />
            <Children>
                <Info />
            </Children>
            <Button greet={sayHello}/>
            <Input name={name} nameHandler={nameHandler}/>
            <Style style={{border:'1px solid black',padding:'5px'}}/>
        </div>
    );
}

export default PropsApp;
