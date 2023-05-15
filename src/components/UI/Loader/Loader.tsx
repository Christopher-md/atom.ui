import React, { FC } from "react";
import classNames from "classnames";
import type Props from "./types";
import styles from "./Loader.module.sass";

const Loader: FC<Props> = (props) => {
    const { type = "static", full, center, className, ...rest } = props;

    return (
        <div
            className={classNames(
                styles.wrapper,
                styles[type],
                {
                    [styles.full]: full,
                    [styles.center]: center,
                },
                className,
            )}
            {...rest}
        >
            <div className={styles.ldsRipple}>
                <div />
                <div />
            </div>
        </div>
    );
};

export default Loader;
