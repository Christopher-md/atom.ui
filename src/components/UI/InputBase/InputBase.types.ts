import React, { ChangeEvent, RefAttributes } from "react";

export type InputBaseType = <
    T extends string,
    E = ChangeEvent<HTMLInputElement>,
>(
    props: Props<T, E> & RefAttributes<HTMLInputElement>
) => JSX.Element;

interface InputBaseOptions {
    component?: React.ComponentType<any>

    [x: string]: any
}

interface InputBaseOwnProps<T, E> {
    value: T;
    options: InputBaseOptions;
    onChange: (event: E) => void;
}

type Props<T, E> =
    InputBaseOwnProps<T, E> &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputBaseOwnProps<T, E>>;

export default Props;
