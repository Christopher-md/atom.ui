import React, { Ref, forwardRef, useState, useId } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import type { InputAttributes, InputType, Props } from "./types";
import styles from "./Input.module.sass";

function Input<Type = InputAttributes>(
    props: Props<Type>,
    ref: Ref<HTMLInputElement>,
) {
    const { label, error, value, className, fullWidth, as: Component = "input", ...rest } = props;

    const id = useId();
    const [focused, setFocused] = useState(false);

    const onBlur = () => setFocused(false);

    const onFocus = () => setFocused(true);

    return (
        <div
            className={classNames(
                styles["input-wrapper"],
                { [styles.fullWidth]: fullWidth },
                className,
            )}
        >
            <div className={classNames(styles.container, { [styles.error]: error })}>
                <Component
                    id={id}
                    ref={ref}
                    value={value}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={styles.input}
                    {...rest as Type}
                />
                {label && (
                    <label
                        htmlFor={id}
                        title={label}
                        className={classNames(styles.label, {
                            [styles.error]: error,
                            [styles.filled]: value,
                            [styles.focused]: focused,
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
}

export default forwardRef(Input) as InputType;
