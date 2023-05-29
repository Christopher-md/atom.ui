import React from "react";
import Themes from "@/constants/themes";

interface Props {
    children: React.ReactNode;
}

type Callback = () => void;

type IContext = Themes.light | Themes.dark;

export type {
    Props,
    Callback,
    IContext,
};
