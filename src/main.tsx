import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContext } from "@/contexts/ThemeContext";
import App from "./App";
import "./index.sass";

const container = document.getElementById("root") as HTMLElement;

const element = (
    <ThemeContext>
        <App />
    </ThemeContext>
);

ReactDOM.createRoot(container).render(element);
