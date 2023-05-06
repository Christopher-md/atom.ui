import React, { useId } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import type Props from "./types";
import styles from "./Checkbox.module.sass";

/**
 * Created by chaikovskiy on 06.05.2023
 */
const Checkbox: React.FC<Props> = (props) => {
    const { label, checked, disabled, className, labelPlacement = "right", ...rest } = props;
    const id = useId(); // Generating a unique id

    const placement = `label-placement-${labelPlacement}`;

    return (
        <div
            className={classNames(
                styles.checkbox,
                { [styles.disabled]: disabled },
                className,
            )}
        >
            <label
                htmlFor={id}
                className={classNames(
                    styles.label,
                    styles[placement],
                )}
            >
                <div className={styles["input-wrapper"]}>
                    <input
                        id={id}
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        className={styles["input-checkbox"]}
                        {...rest}
                    />
                    <span className={styles.marker} />
                </div>
                <Typography
                    disableSelection
                    className={styles["label-text"]}
                >
                    {label}
                </Typography>
            </label>
        </div>
    );
};

export default Checkbox;
