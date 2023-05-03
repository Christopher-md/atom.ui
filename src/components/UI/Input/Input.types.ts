import React, { InputHTMLAttributes } from "react";

type InputOptions = { input?: React.ComponentType<any> };

interface InputOwnProps {
    label: string;
    fullWidth?: boolean;
    options?: InputOptions;
    error?: boolean | string;
}

type Props =
    InputOwnProps &
    InputHTMLAttributes<HTMLInputElement> &
    Record<string, any>;

export type {
    Props,
    InputOwnProps,
};
