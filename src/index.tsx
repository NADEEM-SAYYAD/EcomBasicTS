import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ShoppinContextProvider } from "./context/shop/ShoppinContext";
import { ModalContextProvider } from "./context/modal/Modalcontext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <ShoppinContextProvider>
            <ModalContextProvider>
                <App />
            </ModalContextProvider>
        </ShoppinContextProvider>
    </BrowserRouter>
);
