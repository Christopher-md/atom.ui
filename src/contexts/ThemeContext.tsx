import React, {
    createContext, useContext, useEffect, useLayoutEffect, useState,
} from "react";
import { dark as darkTheme } from "@/constants/media";
import Themes from "@/constants/themes";

const Classes = {
    dark: "dark-mode",
    light: "light-mode",
};

type IContext = Themes.dark | Themes.light;

const initState = Themes.light;

const Context = createContext<IContext>(initState);

export const useThemeContext = (): IContext => {
    const context = useContext(Context);

    if (context) return context;

    throw new Error("Context must be used within Provider!");
};

export const ThemeContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isDark = window.matchMedia(darkTheme).matches;
    const [theme, setTheme] = useState(isDark ? Themes.dark : Themes.light);

    // layoutEffect to add the required class before the page is displayed
    useLayoutEffect(() => {
        const themeClassName = theme === Themes.dark ? Classes.dark : Classes.light;

        document.body.classList.add(themeClassName);
        return () => {
            document.body.classList.remove(themeClassName);
        };
    }, [theme]);

    // useEffect to monitor for theme updating
    useEffect(() => {
        const query = window.matchMedia(darkTheme);

        const mqListener = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? Themes.dark : Themes.light);
        };

        query.addEventListener("change", mqListener);
        return () => {
            query.removeEventListener("change", mqListener);
        };
    }, []);

    return (
        <Context.Provider value={theme}>
            {children}
        </Context.Provider>
    );
};
