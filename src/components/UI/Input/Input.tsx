import React, { forwardRef, Ref } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import type { InputAttributes, InputType, Props } from "./types";
import styles from "./Input.module.sass";

function Input<Type = InputAttributes>(
    props: Props<Type>,
    ref: Ref<HTMLInputElement>,
) {
    const { label, error, value, className, fullWidth, as = "input", ...rest } = props;
    const Component = as;

    return (
        <div
            className={classNames(
                styles.input,
                { [styles.fullWidth]: fullWidth },
                className,
            )}
        >
            <div className={classNames(styles.container, { [styles.error]: error })}>
                <Component
                    ref={ref}
                    value={value}
                    className={styles.inputRoot}
                    {...rest as Type}
                />
                <label
                    title={label}
                    htmlFor="input"
                    className={classNames(styles.label, {
                        [styles.error]: error,
                        [styles.filled]: value,
                    })}
                >
                    {label}
                </label>
            </div>
            {typeof error === "string" && (
                <Typography color="red" className={styles.error}>
                    {error}
                </Typography>
            )}
        </div>
    );
}

export default forwardRef(Input) as InputType;
