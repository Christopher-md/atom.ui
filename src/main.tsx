import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "@/contexts/ThemeContext";
import App from "./App";
import "./index.sass";

const container = document.getElementById("root") as HTMLElement;

const element = (
    <BrowserRouter>
        <ThemeContext>
            <App />
        </ThemeContext>
    </BrowserRouter>
);

ReactDOM.createRoot(container).render(element);
