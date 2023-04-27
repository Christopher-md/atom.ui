import React from "react";

interface InputOwnProps {
    label: string;
    fullWidth?: boolean;
    error?: boolean | string;
}

type Props = React.InputHTMLAttributes<HTMLInputElement> & InputOwnProps;

export type {
    Props,
    InputOwnProps,
};
