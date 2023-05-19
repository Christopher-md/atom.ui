import React from "react";
import classNames from "classnames";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@/components/UI/Typography";
import getLinkTarget from "./utils/getLinkTarget";
import type Props from "./types";
import styles from "./Link.module.sass";

/**
 * Created by chaikovskiy on 19.05.2023
 */
const Link: React.FC<Props> = (props) => {
    const { to, target: linkTarget, disabled, className } = props;

    const target = getLinkTarget(to, linkTarget);

    return (
        <RouterLink
            to={to}
            target={target}
            className={classNames(
                styles.link,
                { [styles.disabled]: disabled },
                className,
            )}
        >
            <Typography
                size="inherit"
                disableSelection
                className={styles.content}
            >
                Link
            </Typography>
        </RouterLink>
    );
};

export default Link;
