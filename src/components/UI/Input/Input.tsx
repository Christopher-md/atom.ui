import React, { ChangeEvent, forwardRef } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import type { InputType, Props } from "./Input.types";
import styles from "./Input.module.sass";

function Input<
    E = ChangeEvent<HTMLInputElement>,
>(
    props: Props<E>,
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

    const { component: Component = "input" } = options;

    function onHandleChange(event: ChangeEvent<HTMLInputElement>) {
        if (!onChange) return;

        onChange(event as E);
    }

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
                    onChange={onHandleChange}
                    className={styles.inputRoot}
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
