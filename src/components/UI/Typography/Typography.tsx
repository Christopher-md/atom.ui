/**
 * Created by chaikovskiy on 20.04.2023
 */
import React from "react";
import classNames from "classnames";
import type { ElementType, Props } from "./Typography.types";
import styles from "./Typography.module.sass";

const defaultElement = "span";

function Typography<E extends ElementType = typeof defaultElement>(props: Props<E>) {
    const { children, as: Component = defaultElement, className, size = "", color = "", ...rest } = props;

    return (
        <Component
            className={classNames(
                styles.typography,
                styles[color],
                styles[size],
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
}

export default Typography;
