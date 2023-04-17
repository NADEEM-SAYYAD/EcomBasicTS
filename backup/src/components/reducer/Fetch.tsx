import { useEffect, useReducer } from "react";
import { FetchState, FetchActions } from "./Fetech.type";
let initialState = {
    data: [],
    laoding: false,
    error: ""
};

const reducer = (state : any, action:FetchActions) => {
    switch (action.type) {
        case "REQUEST":
            return {
                ...state,
                laoding: true,
            };
        case "SUCCESS":
            return {
                ...state,
                laoding: false,
                data: action.payload,
            };
        case "ERROR":
            return {
                ...state,
                laoding: false,
                error: "Something went wrong",
            };
        default:
            return {
                ...state,
            };
    }
};
const Fetch = () => {
    const [post, dispatch] = useReducer(reducer,initialState);

    const fetchPostData = async () => {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/`
        );
        let data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        fetchPostData();
    }, []);

    return <div>Fetch</div>;
};
export default Fetch;
