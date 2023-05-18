import React, { MouseEventHandler, useEffect, useRef } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import type Props from "./types";
import styles from "./Button.module.sass";

/**
 * Created by chaikovskiy on 20.04.2023
 */
const Button: React.FC<Props> = (props) => {
    const { children, type = "button", onClick, interval, className, ...rest } = props;
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => () => {
        if (!timerRef.current) return;

        clearTimeout(timerRef.current);
    });

    const onHandleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (!onClick || timerRef.current) return;

        if (interval) {
            timerRef.current = setTimeout(() => {
                timerRef.current = null;
            }, interval);
        }

        onClick(event);
    };

    return (
        <button
            type={type}
            onClick={onHandleClick}
            className={classNames(
                styles.button,
                className,
            )}
            {...rest}
        >
            <Typography
                size="inherit"
                color="secondary"
                className={styles.content}
            >
                {children}
            </Typography>
        </button>
    );
};

export default Button;
