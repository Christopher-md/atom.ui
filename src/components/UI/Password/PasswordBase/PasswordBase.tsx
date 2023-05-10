import React, { useState } from "react";
import classNames from "classnames";
import { ReactComponent as Visibility } from "@/assets/visibility.svg";
import { ReactComponent as VisibilityOff } from "@/assets/visibility_off.svg";
import type Props from "./types";
import styles from "./PasswordBase.module.sass";

/**
 * Created by chaikovskiy on 10.05.2023
 */
const PasswordBase: React.FC<Props> = (props) => {
    const { className, ...rest } = props;

    const [show, setShow] = useState(false);

    const toggle = () => setShow((prev) => !prev);

    const type = show ? "text" : "password";
    const Icon = show ? VisibilityOff : Visibility;

    return (
        <>
            <input
                type={type}
                className={classNames(
                    styles.input,
                    className,
                )}
                {...rest}
            />
            <button
                onClick={toggle}
                className={styles["btn-icon"]}
            >
                <Icon className={styles.icon} />
            </button>
        </>
    );
};

export default PasswordBase;
