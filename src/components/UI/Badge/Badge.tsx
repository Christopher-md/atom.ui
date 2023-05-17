import React from "react";
import classNames from "classnames";
import type Props from "./types";
import styles from "./Badge.module.sass";

/**
 * Created by chaikovskiy on 17.05.2023
 */
const Badge: React.FC<Props> = (props) => {
    const { children, content, className } = props;

    return (
        <div
            data-content={content}
            className={classNames(styles.badge, className)}
        >
            {children}
        </div>
    );
};

export default Badge;
