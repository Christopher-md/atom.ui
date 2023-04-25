import React from "react";
import { DateTime as Luxon } from "luxon";
import Counter from "@/components/Counter";
import Timestamp from "@/components/Timestamp";
import Typography from "@/components/UI/Typography";
import styles from "./App.module.sass";

function App() {
    return (
        <div className={styles.app}>
            <Counter />
            <Timestamp
                locale="en"
                className={styles.timestamp}
                format={Luxon.DATETIME_MED_WITH_SECONDS}
            />
            <Typography className={styles["read-the-docs"]}>
                App is running in {import.meta.env.MODE} mode
                <br />
                Click on the Vite and React logos to learn more
            </Typography>
        </div>
    );
}

export default App;
