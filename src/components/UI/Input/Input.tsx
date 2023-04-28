import React, { ChangeEvent, forwardRef } from "react";
import classNames from "classnames";
import InputBase from "@/components/UI/InputBase";
import Typography from "@/components/UI/Typography";
import type { InputType, Props } from "./Input.types";
import styles from "./Input.module.sass";

function Input<
    T extends string,
    E = ChangeEvent<HTMLInputElement>,
>(
    props: Props<T, E>,
    ref: React.Ref<HTMLInputElement>,
) {
    const {
        label,
        error,
        value,
        onChange,
        className,
        fullWidth = false,
        options = {},
        ...rest
    } = props;

    const { component, ...restOptions } = options;

    return (
        <div
            className={classNames(
                styles.input,
                { [styles.fullWidth]: fullWidth },
                className,
            )}
        >
            <div className={classNames(styles.container, { [styles.error]: error })}>
                <InputBase
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    className={styles.inputRoot}
                    options={{
                        component: component,
                        ...restOptions,
                    }}
                    {...rest}
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
