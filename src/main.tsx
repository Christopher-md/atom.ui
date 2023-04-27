import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContext } from "@/contexts/ThemeContext";
import App from "./App";
import "./index.sass";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeContext>
        <App />
    </ThemeContext>,
);
