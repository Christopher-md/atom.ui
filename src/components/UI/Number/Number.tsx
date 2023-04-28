import React, { FC } from "react";
import Input from "@/components/UI/Input";
import NumberBase from "@/components/UI/NumberBase";
import type Props from "./Number.types";

const Number: FC<Props> = (props) => {
    const { label, value, onChange, ...rest } = props;

    return (
        <Input
            label={label}
            value={value}
            onChange={onChange}
            options={{
                component: NumberBase,
            }}
            {...rest}
        />
    );
};

export default Number;
