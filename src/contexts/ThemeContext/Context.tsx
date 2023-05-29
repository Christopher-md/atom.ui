import React, { createContext, useContext, useLayoutEffect, useSyncExternalStore } from "react";
import Themes from "@/constants/themes";
import { dark } from "@/constants/queries";
import classes from "./constants/classes";
import type { Props, IContext, Callback } from "./types";
import "./Theme.sass";

const initState = Themes.light;

const Context = createContext<IContext>(initState);

export const useThemeContext = (): IContext => {
    const context = useContext(Context);

    if (context) return context;

    throw new Error("Context must be used within Provider!");
};

const query = window.matchMedia(dark);

const getSnapshot = () => (query.matches ? Themes.dark : Themes.light);

const callback = (callback: Callback) => {
    query.addEventListener("change", callback);
    return () => {
        query.removeEventListener("change", callback);
    };
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const theme = useSyncExternalStore(callback, getSnapshot);

    // layoutEffect to add the required class before the page is displayed
    useLayoutEffect(() => {
        const themeClassName = theme === Themes.dark ? classes.dark : classes.light;

        document.body.classList.add(themeClassName);
        return () => {
            document.body.classList.remove(themeClassName);
        };
    }, [theme]);

    return (
        <Context.Provider value={theme}>
            {children}
        </Context.Provider>
    );
};
