import React, { useState } from "react";
import { DateTime as Luxon } from "luxon";
import Input from "@/components/UI/Input";
import Counter from "@/components/Counter";
import Number from "@/components/UI/Number";
import Timestamp from "@/components/Timestamp";
import Typography from "@/components/UI/Typography";
import styles from "./App.module.sass";

function App() {
    const [input, setInput] = useState({
        fullName: "Hello, world!",
        phone: "",
    });

    const onHandleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;

        setInput((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.app}>
            <Counter />
            <div className={styles["input-container"]}>
                <Input
                    label="ФИО"
                    name="fullName"
                    value={input.fullName}
                    onChange={onHandleChange}
                    placeholder="Чайковский К.А."
                />
                <Typography
                    color="secondary"
                    className={styles["input-container__text"]}
                >
                    {input.fullName}
                </Typography>
            </div>
            <Number
                name="phone"
                value={input.phone}
                placeholder="77*****"
                label="Номер телефона"
                onChange={onHandleChange}
            />
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
