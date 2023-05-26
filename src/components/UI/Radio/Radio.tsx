import React, { useId } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import type Props from "./types";
import styles from "./Radio.module.sass";

/**
 * Created by chaikovskiy on 06.05.2023
 */
const Radio: React.FC<Props> = (props) => {
    const { label, checked, disabled, className, labelPlacement = "right", ...rest } = props;
    const id = useId(); // Generating a unique id

    const placement = `label-placement-${labelPlacement}`;

    return (
        <div
            className={classNames(
                styles.radio,
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
                        type="radio"
                        checked={checked}
                        disabled={disabled}
                        className={styles["input-radio"]}
                        {...rest}
                    />
                    <span className={styles.marker} />
                </div>
                <Typography
                    disableSelection
                    color="primary"
                    className={styles["label-text"]}
                >
                    {label}
                </Typography>
            </label>
        </div>
    );
};

export default Radio;
