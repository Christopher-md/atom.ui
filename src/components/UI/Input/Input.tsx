import React, { forwardRef } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import type { Props } from "./types";
import styles from "./Input.module.sass";

function Input(
    props: Props,
    ref: React.Ref<HTMLInputElement>,
) {
    const { label, error, value, className, fullWidth = false, options = {}, ...rest } = props;

    const { input: Component = "input" } = options;

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

export default forwardRef(Input);
