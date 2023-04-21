import React, { useState } from "react";
import { DateTime as Luxon } from "luxon";
import Button from "@/components/UI/Button";
import Timestamp from "@/components/Timestamp";
import Typography from "@/components/UI/Typography";
import styles from "./App.module.sass";

function App() {
    const [count, setCount] = useState<number>(0);

    function onHandleIncrement() {
        setCount((prevState) => prevState + 1);
    }

    return (
        <div className={styles.app}>
            <Button onClick={onHandleIncrement}>
                {count}
            </Button>
            <Timestamp
                locale="en"
                className={styles.timestamp}
                format={Luxon.DATETIME_MED_WITH_SECONDS}
            />
            <Typography as="span" className={styles["read-the-docs"]}>
                App is running in {import.meta.env.MODE} mode
                <br />
                Click on the Vite and React logos to learn more
            </Typography>
        </div>
    );
}

export default App;
