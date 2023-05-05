import React, { useEffect, useRef, useState } from "react";
import { DateTime as Luxon } from "luxon";
import Input from "@/components/UI/Input";
import Counter from "@/components/Counter";
import Button from "@/components/UI/Button";
import Number from "@/components/UI/Number";
import Switch from "@/components/UI/Switch";
import Date from "@/components/UI/Date/Date";
import Tooltip from "@/components/UI/Tooltip";
import Timestamp from "@/components/Timestamp";
import Typography from "@/components/UI/Typography";
import styles from "./App.module.sass";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, expedita";

function App() {
    const [checked, setChecked] = useState(false);
    const [input, setInput] = useState({
        phone: undefined,
        date: "29.07.2000",
        fullName: "Чайковский К.А.",
    });
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        ref.current.focus();
    }, []);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInput((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.app}>
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
                    label="Номер телефона"
                    onChange={onHandleChange}
                    format="+373 (###) #####"
                    placeholder="+373 (###) #####"
                />
                <Date
                    name="date"
                    label="Дата"
                    value={input.date}
                    className={styles.date}
                    onChange={onHandleChange}
                />
            </div>
            <Counter className={styles.counter} />
            <Tooltip text={lorem}>
                <Button>Hover me</Button>
            </Tooltip>
            <Switch
                checked={checked}
                className={styles.switch}
                onChange={(event) => {
                    setChecked(event.target.checked);
                }}
            />
            <Timestamp
                locale="en"
                className={styles.timestamp}
                format={Luxon.DATETIME_MED_WITH_SECONDS}
            />
            <Typography color="secondary">
                App is running in {import.meta.env.MODE} mode
            </Typography>
        </div>
    );
}

export default App;
