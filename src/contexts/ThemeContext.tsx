import React, { createContext, useContext, useLayoutEffect, useSyncExternalStore } from "react";
import { dark as darkTheme } from "@/constants/media";
import Themes from "@/constants/themes";

const Classes = {
    dark: "dark-mode",
    light: "light-mode",
};

type Callback = () => void;

type IContext = Themes.dark | Themes.light;

const initState = Themes.light;

const Context = createContext<IContext>(initState);

export const useThemeContext = (): IContext => {
    const context = useContext(Context);

    if (context) return context;

    throw new Error("Context must be used within Provider!");
};

const query = window.matchMedia(darkTheme);

const getSnapshot = () => (query.matches ? Themes.dark : Themes.light);

const callback = (callback: Callback) => {
    query.addEventListener("change", callback);
    return () => {
        query.removeEventListener("change", callback);
    };
};

export const ThemeContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme = useSyncExternalStore(callback, getSnapshot);

    // layoutEffect to add the required class before the page is displayed
    useLayoutEffect(() => {
        const themeClassName = theme === Themes.dark ? Classes.dark : Classes.light;

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
