import React, { ChangeEvent, RefAttributes } from "react";

type InputOptions = { component?: React.ComponentType<any> } & Record<string, any>;

type InputNativeProps<E> = {
    onChange?: (event: E) => void;
};

interface InputOwnProps {
    label: string;
    fullWidth?: boolean;
    options?: InputOptions;
    error?: boolean | string;
}

type Props<E> =
    InputOwnProps &
    InputNativeProps<E> &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputNativeProps<E>> &
    Record<string, any>;

type InputType = <
    E = ChangeEvent<HTMLInputElement>,
>(
    props: Props<E> & RefAttributes<HTMLInputElement>
) => JSX.Element;

export type {
    Props,
    InputType,
    InputOwnProps,
    InputNativeProps,
};
