import React from "react";
import classNames from "classnames";
import type { FC, SVGAttributes } from "react";

import styles from "./Skeleton.module.scss";

type Props = SVGAttributes<SVGSVGElement>;

const Circle: FC<Props> = ({ width = 50, height = 50, className }) => (
    <svg
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(styles.skeleton, className)}
    >
        <circle
            r="55"
            cx="60"
            cy="60"
        />
    </svg>
);

const Rect: FC<Props> = ({ width = 50, height = 50, className }) => (
    <svg
        version="1.1"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(styles.skeleton, className)}
    >
        <rect
            x={0}
            y={0}
            rx={5}
            width="100%"
            height="100%"
        />
    </svg>
);

const Skeleton = {
    Circle: Circle,
    Rectangle: Rect,
};

export default Skeleton;
