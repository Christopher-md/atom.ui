import React, { FC } from "react";

import Typography from "@/components/UI/Typography";
import styles from "./Progress.module.sass";

import type Props from "./types";

const Progress: FC<Props> = (props) => {
    const { size = 100, progress = 0, trackWidth = 5, indicatorWidth = 5 } = props;

    const center = size / 2;
    const radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth);
    const dashArray = 2 * Math.PI * radius;
    const dashOffset = dashArray * ((100 - progress) / 100);

    return (
        <div
            className={styles["svg-pi-wrapper"]}
            style={{ width: size, height: size }}
        >
            <svg
                className={styles["svg-pi"]}
                style={{ width: size, height: size }}
            >
                <circle
                    r={radius}
                    cx={center}
                    cy={center}
                    fill="transparent"
                    strokeWidth={trackWidth}
                    className={styles["svg-pi-track"]}
                />
                <circle
                    r={radius}
                    cx={center}
                    cy={center}
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={dashArray}
                    strokeWidth={indicatorWidth}
                    strokeDashoffset={dashOffset}
                    className={styles["svg-pi-indicator"]}
                />
            </svg>

            <div className={styles["svg-pi-label"]}>
                <Typography color="secondary" size="medium">
                    {`${progress}%`}
                </Typography>
            </div>
        </div>
    );
};

export default Progress;
