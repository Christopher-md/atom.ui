import React, {
    MutableRefObject,
    useEffect, useRef, useState,
} from "react";
import { DateTime as Luxon } from "luxon";
import Input from "@/components/UI/Input";
import Counter from "@/components/Counter";
import Number from "@/components/UI/Number";
import Timestamp from "@/components/Timestamp";
import Typography from "@/components/UI/Typography";
import Date from "@/components/UI/Date/Date";
import styles from "./App.module.sass";

function App() {
    const [input, setInput] = useState({
        fullName: "Hello, world!",
        phone: "",
        date: "",
    });
    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInput((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <div className={styles.app}>
            <Counter />
            <div className={styles.fields}>
                <Input
                    ref={ref}
                    label="ФИО"
                    name="fullName"
                    value={input.fullName}
                    onChange={onHandleChange}
                    placeholder="Чайковский К.А."
                />
                <Number
                    name="phone"
                    value={input.phone}
                    placeholder="77*****"
                    label="Номер телефона"
                    onChange={onHandleChange}
                />
                <Date
                    label="Дата"
                    value={input.date}
                    className={styles.date}
                    onChange={(event) => {
                        setInput((prev) => ({
                            ...prev,
                            date: event.value,
                        }));
                    }}
                />
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
