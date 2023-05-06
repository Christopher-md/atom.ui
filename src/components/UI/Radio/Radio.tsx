import React, { useId } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import type Props from "./types";
import styles from "./Radio.module.sass";

/**
 * Created by chaikovskiy on 06.05.2023
 */
const Radio: React.FC<Props> = (props) => {
    const { label, name, checked = false, labelPlacement = "right", ...rest } = props;
    // Generating a unique id
    const id = useId();

    return (
        <div className={styles.radio}>
            <label
                htmlFor={id}
                className={classNames(
                    styles.label,
                    styles[`label-placement-${labelPlacement}`],
                )}
            >
                <div className={styles["input-wrapper"]}>
                    <input
                        id={id}
                        name={name}
                        type="radio"
                        checked={checked}
                        className={styles["input-radio"]}
                        {...rest}
                    />
                    <span className={styles.dot} />
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

export default Radio;
