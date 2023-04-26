import React, { useState } from "react";
import { DateTime as Luxon } from "luxon";
import Input from "@/components/UI/Input";
import Counter from "@/components/Counter";
import Timestamp from "@/components/Timestamp";
import Typography from "@/components/UI/Typography";
import styles from "./App.module.sass";

function App() {
    const [input, setInput] = useState("Hello, world!");

    return (
        <div className={styles.app}>
            <Counter />
            <div className={styles["input-container"]}>
                <Input
                    label="ФИО"
                    value={input}
                    placeholder="Чайковский К.А."
                    onChange={(e) => setInput(e.target.value)}
                />
                <Typography
                    color="secondary"
                    className={styles["input-container__text"]}
                >
                    {input}
                </Typography>
            </div>
            <Timestamp
                locale="en"
                className={styles.timestamp}
                format={Luxon.DATETIME_MED_WITH_SECONDS}
            />
            <Typography color="secondary">
                App is running in {import.meta.env.MODE} mode
                <br />
                Click on the Vite and React logos to learn more
            </Typography>
        </div>
    );
}

export default App;
