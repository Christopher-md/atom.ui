/**
 * Created by chaikovskiy on 20.04.2023
 */
import React from "react";
import classNames from "classnames";
import type Props from "./Button.types";
import styles from "./Button.module.sass";

const Button: React.FC<Props> = (props) => {
    const { children, type = "button", className, ...rest } = props;

    return (
        <button
            type={type}
            className={classNames(
                styles.button,
                className,
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
