/**
 * Created by chaikovskiy on 19.04.2023
 */
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Typography from "@/components/UI/Typography";
import getCurrentDateTime from "@/utils/getCurrentDateTime";
import type Props from "./types";
import styles from "./Timestamp.module.sass";

const Timestamp: React.FC<Props> = (props) => {
    const { format, locale, className } = props;

    const [time, setTime] = useState<string>(getCurrentDateTime({
        locale,
        format,
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDateTime = getCurrentDateTime({
                locale,
                format,
            });

            setTime(currentDateTime);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [format, locale]);

    return (
        <Typography
            as="span"
            color="primary"
            className={classNames(
                styles.timestamp,
                className,
            )}
        >
            {time}
        </Typography>
    );
};

export default Timestamp;
