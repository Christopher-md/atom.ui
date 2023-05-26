import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/contexts/ThemeContext";
import App from "./App";
import "./index.sass";

const container = document.getElementById("root") as HTMLElement;

const element = (
    <ThemeProvider>
        <App />
    </ThemeProvider>
);

ReactDOM.createRoot(container).render(element);
