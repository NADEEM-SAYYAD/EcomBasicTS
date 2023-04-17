// import React, { createContext, useContext } from "react";

// type ContextType = {
//     name: string;
// };
// const Context = createContext<ContextType>({} as ContextType);

// type PropsChildren = {
//     children: React.ReactNode;
// };
// const ContextProvider = ({ children }: PropsChildren) => {
//     return (
//         <Context.Provider value={{ name: "Nadeem" }}>
//             {children}
//         </Context.Provider>
//     );
// };

// const useAdminContext = () => useContext(Context);

// export { ContextProvider, useAdminContext };



// import { createContext, useState } from "react";

// type StateType = {
//     name: string;
//     email: string;
// };
// type ChildrentProps = {
//     children: React.ReactNode;
// };
// type ContextType = {
//     user: StateType;
//     setUser:  React.Dispatch<React.SetStateAction<StateType>>
// };

// export const Context = createContext<ContextType>({} as ContextType);

// export const ContextProvider = ({ children }: ChildrentProps) => {
//     const [user, setUser] = useState<StateType>({name:"",email:""});
//     return (
//         <Context.Provider value={{ user, setUser }}>
//             {children}
//         </Context.Provider>
//     );
// };



import { createContext, useContext, useState } from "react";

type StateType = {
    name: string;
    email: string;
};
type ChildrenProps = {
    children: React.ReactNode;
};
type ContextType = {
    user: StateType | null;
    setUser: React.Dispatch<React.SetStateAction<StateType | null>>;
};

export const Context = createContext<ContextType>({} as ContextType);

export const ContextProvider = ({ children }: ChildrenProps) => {
    const [user, setUser] = useState<StateType | null>(null);
    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
};

export const useContextProvider = () => useContext(Context)