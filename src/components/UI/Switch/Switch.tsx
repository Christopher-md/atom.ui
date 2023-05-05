import React from "react";
import classNames from "classnames";
import type Props from "./types";
import styles from "./Switch.module.sass";

/**
 * Created by chaikovskiy on 05.05.2023
 */
const Switch: React.FC<Props> = (props) => {
    const { checked, className, ...rest } = props;

    return (
        <div
            className={classNames(
                styles.switch,
                { [styles.active]: checked },
                className,
            )}
        >
            <input
                id="switch"
                name="switch"
                type="checkbox"
                checked={checked}
                className={styles["switch-checkbox"]}
                {...rest}
            />
            <span className={styles["switch-dot"]} />
        </div>
    );
};

export default Switch;
