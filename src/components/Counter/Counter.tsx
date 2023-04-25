/**
 * Created by chaikovskiy on 25.04.2023
 */
import React from "react";
import { shallow } from "zustand/shallow";
import useCounter from "@/store/useCounter";
import Button from "@/components/UI/Button";
import Typography from "@/components/UI/Typography";
import styles from "./Counter.module.sass";

const Counter: React.FC = () => {
    const { count, increment, decrement } = useCounter(
        (state) => ({
            count: state.count,
            increment: state.increment,
            decrement: state.decrement,
        }),
        shallow,
    );

    return (
        <div>
            <Button onClick={decrement}>-</Button>
            <Typography className={styles.count}>
                {count}
            </Typography>
            <Button onClick={increment}>+</Button>
        </div>
    );
};

export default Counter;
