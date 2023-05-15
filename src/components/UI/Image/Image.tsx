import React from "react";
import classNames from "classnames";
import type Props from "./types";
import styles from "./Image.module.sass";

/**
 * Created by chaikovskiy on 15.05.2023
 */
const Image: React.FC<Props> = (props) => {
    const { src, alt = "", width, height, className, ...rest } = props;

    if (!src) return null;

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={classNames(
                styles.image,
                className,
            )}
            {...rest}
        />
    );
};

export default Image;
