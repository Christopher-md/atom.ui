/**
 * Created by chaikovskiy on 25.04.2023
 */
import React, { useState } from "react";
import classNames from "classnames";
import Button from "@/components/UI/Button";
import Typography from "@/components/UI/Typography";
import type Props from "./types";
import styles from "./Counter.module.sass";

const Counter: React.FC<Props> = (props) => {
    const { className, ...rest } = props;

    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);

    const decrement = () => setCount((prev) => prev - 1);

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
