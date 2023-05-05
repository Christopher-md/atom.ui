import React from "react";
import classNames from "classnames";
import Button from "@/components/UI/Button";
import Typography from "@/components/UI/Typography";
import type Props from "./types";
import styles from "./Counter.module.sass";

/**
 * Created by chaikovskiy on 25.04.2023
 */
const Counter: React.FC<Props> = (props) => {
    const { count, onChange, className, ...rest } = props;

    const increment = () => onChange(count + 1);

    const decrement = () => onChange(count - 1);

    return (
        <div className={classNames(styles.counter, className)} {...rest}>
            <Button onClick={decrement}>-</Button>
            <Typography
                color="primary"
                className={styles.count}
            >
                {count}
            </Typography>
            <Button onClick={increment}>+</Button>
        </div>
    );
};

export default Counter;
