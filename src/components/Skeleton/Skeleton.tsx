import React from "react";
import type { FC, SVGAttributes } from "react";

import styles from "./Skeleton.module.scss";

type Props = {
    width?: SVGAttributes<SVGSVGElement>["width"];
    height?: SVGAttributes<SVGSVGElement>["height"];
};

const Circle: FC<Props> = ({ width = 50, height = 50 }) => (
    <svg
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 120 120"
        className={styles.skeleton}
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            r="55"
            cx="60"
            cy="60"
            fillOpacity={0.4}
        />
    </svg>
);

const Rect: FC<Props> = ({ width = 50, height = 50 }) => (
    <svg
        version="1.1"
        width={width}
        height={height}
        className={styles.skeleton}
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x={0}
            y={0}
            rx={5}
            width="100%"
            height="100%"
            fillOpacity={0.4}
        />
    </svg>
);

const Skeleton = {
    Circle: Circle,
    Rectangle: Rect,
};

export default Skeleton;
