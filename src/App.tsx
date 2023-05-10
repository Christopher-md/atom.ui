import React, { useEffect, useRef, useState } from "react";
import { DateTime as Luxon } from "luxon";
import Input from "@/components/UI/Input";
import Radio from "@/components/UI/Radio";
import Counter from "@/components/Counter";
import Button from "@/components/UI/Button";
import Number from "@/components/UI/Number";
import Switch from "@/components/UI/Switch";
import Date from "@/components/UI/Date/Date";
import Tooltip from "@/components/UI/Tooltip";
import Timestamp from "@/components/Timestamp";
import Checkbox from "@/components/UI/Checkbox";
import Password from "@/components/UI/Password";
import Typography from "@/components/UI/Typography";
import styles from "./App.module.sass";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, expedita";

function App() {
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(true);
    const [input, setInput] = useState({
        gender: "Male",
        phone: undefined,
        date: "29.07.2000",
        password: "qwerty",
        fullName: "Чайковский К.А.",
    });
    const [cars, setCars] = useState({
        mercedes: false,
        volkswagen: true,
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
            <Typography color="secondary">
                App is running in {import.meta.env.MODE} mode
            </Typography>
            <Timestamp
                locale="en"
                className={styles.timestamp}
                format={Luxon.DATETIME_MED_WITH_SECONDS}
            />
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
                    placeholder="дд.мм.гггг"
                    onChange={onHandleChange}
                />
                <Password
                    label="Пароль"
                    name="password"
                    value={input.password}
                    onChange={onHandleChange}
                />
            </div>
            <Counter
                count={count}
                className={styles.counter}
                onChange={(number) => setCount(number)}
            />
            <Tooltip
                text={lorem}
                className={styles.tooltip}
            >
                <Button>Hover me</Button>
            </Tooltip>
            <Switch
                checked={checked}
                className={styles.switch}
                onChange={(event) => {
                    setChecked(event.target.checked);
                }}
            />
            <div>
                <Radio
                    label="Male"
                    value="Male"
                    name="gender"
                    onChange={onHandleChange}
                    checked={input.gender === "Male"}
                />
                <Radio
                    name="gender"
                    label="Female"
                    value="Female"
                    onChange={onHandleChange}
                    checked={input.gender === "Female"}
                />
            </div>
            <div>
                <Checkbox
                    label="Volkswagen"
                    checked={cars.volkswagen}
                    onChange={({ target }) => {
                        setCars((prev) => ({
                            ...prev,
                            volkswagen: target.checked,
                        }));
                    }}
                />
                <Checkbox
                    label="Mercedes"
                    checked={cars.mercedes}
                    onChange={({ target }) => {
                        setCars((prev) => ({
                            ...prev,
                            mercedes: target.checked,
                        }));
                    }}
                />
            </div>
        </div>
    );
}

export default App;
