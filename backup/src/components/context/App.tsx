import { useContextProvider } from "../context/Admin";

export const App = () => {
    const { user, setUser } = useContextProvider();
    console.log(user);

    const ClickHandler = () => {
        setUser({
            name: "Nadeem",
            email: "sayyadnad121@gmail.com",
        });
    };
    return (
        <div>
            <p>User : {`${user?.name ?? ""}  ${user?.email ?? ""}`}</p>
            <button onClick={ClickHandler}>Click Me Bro</button>
        </div>
    );
};
