import { ComponentType, InputHTMLAttributes, Ref } from "react";

type InputAttributes =
    Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "children"> & {
        ref?: Ref<HTMLInputElement>
    };

interface InputOwnProps {
    label?: string;
    className?: string;
    fullWidth?: boolean;
    value?: string | number;
    error?: boolean | string;
    onBlur?: InputAttributes["onBlur"];
    onFocus?: InputAttributes["onFocus"];
    onChange?: InputAttributes["onChange"];
    onMouseUp?: InputAttributes["onMouseUp"];
    onKeyDown?: InputAttributes["onKeyDown"];
}

type InputProps<Props, Type = InputAttributes> =
    Props &
    Omit<Type, keyof Props> &
    Omit<InputAttributes, keyof Type> & {
        as?: ComponentType<Type>;
    };

type Props<Type = InputAttributes> = InputProps<InputOwnProps, Type>;

type InputType = <Type = InputAttributes>(props: Props<Type>) => JSX.Element;

export type {
    Props,
    InputType,
    InputOwnProps,
    InputAttributes,
};
