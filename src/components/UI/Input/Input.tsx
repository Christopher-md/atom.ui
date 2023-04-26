import React, { forwardRef } from "react";
import classNames from "classnames";
import InputBase from "@/components/UI/InputBase";
import Typography from "@/components/UI/Typography";
import type { Props } from "./Input.types";
import styles from "./Input.module.sass";

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { label, error, fullWidth = false, className, value, ...rest } = props;

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
                    autoComplete="on"
                    className={styles.inputRoot}
                    {...rest}
                />
                {(label != null) && (
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
                )}
            </div>
            {typeof error === "string" && (
                <Typography color="red" className={styles.error}>
                    {error}
                </Typography>
            )}
        </div>
    );
});

export default Input;
