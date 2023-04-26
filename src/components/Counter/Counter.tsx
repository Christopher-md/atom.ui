/**
 * Created by chaikovskiy on 25.04.2023
 */
import React, { useState } from "react";
import Button from "@/components/UI/Button";
import Typography from "@/components/UI/Typography";
import styles from "./Counter.module.sass";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);

    const decrement = () => setCount((prev) => prev - 1);

    return (
        <div className={styles.counter}>
            <Button onClick={decrement}>-</Button>
            <Typography className={styles.count}>
                {count}
            </Typography>
            <Button onClick={increment}>+</Button>
        </div>
    );
};

export default Counter;
