import React from "react";
import classNames from "classnames";
import type { ElementType, Props } from "./types";
import styles from "./Typography.module.sass";

const defaultElement = "span";

/**
 * Created by chaikovskiy on 20.04.2023
 */
function Typography<E extends ElementType = typeof defaultElement>(props: Props<E>) {
    const { children, as: Component = defaultElement, className, size = "", color = "", disableSelection, ...rest } = props;

    return (
        <Component
            className={classNames(
                styles[size],
                styles[color],
                styles.typography,
                { [styles["disable-selection"]]: disableSelection },
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
}

export default Typography;
