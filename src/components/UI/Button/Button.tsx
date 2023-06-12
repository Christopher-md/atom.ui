import React, { MouseEventHandler, useEffect, useRef } from "react";
import classNames from "classnames";
import Loader from "@/components/UI/Loader";
import Typography from "@/components/UI/Typography";
import type Props from "./types";
import styles from "./Button.module.sass";

/**
 * Created by chaikovskiy on 20.04.2023
 */
const Button: React.FC<Props> = (props) => {
    const { children, type = "button", onClick, interval = 0, loading, className, ...rest } = props;
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => () => {
        if (!timerRef.current) return;

        clearTimeout(timerRef.current);
    }, []);

    const onHandleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (!onClick || timerRef.current) return;

        timerRef.current = setTimeout(() => {
            timerRef.current = null;
        }, interval);

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
                disableSelection
                color="secondary"
                className={styles.content}
            >
                {children}
            </Typography>
            {loading && (
                <Loader size="extra-small" />
            )}
        </button>
    );
};

export default Button;
