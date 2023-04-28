import React, { ChangeEvent, RefAttributes } from "react";

type InputType = <
    T extends string,
    E = ChangeEvent<HTMLInputElement>,
>(
    props: Props<T, E> & RefAttributes<HTMLInputElement>
) => JSX.Element;

interface InputOptions {
    component?: React.ComponentType<any>;

    // All other props
    [x: string]: any
}

interface InputOwnProps<T, E> {
    value: T;
    label: string;
    fullWidth?: boolean;
    options?: InputOptions;
    error?: boolean | string;
    onChange: (event: E) => void;
}

type Props<T, E> =
    InputOwnProps<T, E> &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps<T, E>>;

export type {
    Props,
    InputType,
    InputOwnProps,
};
