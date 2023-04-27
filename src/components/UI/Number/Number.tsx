import React, { FC } from "react";
import Input from "@/components/UI/Input";
import type Props from "./Number.types";

const Number: FC<Props> = (props) => {
    const { label, value, onChange, ...rest } = props;

    return (
        <Input
            type="tel"
            label={label}
            value={value}
            onChange={(e) => {
                if (!onChange) return;

                const { value: input } = e.target;
                const regex = /^[0-9]*$/;

                if (!regex.test(input)) return;

                onChange(e);
            }}
            {...rest}
        />
    );
};

export default Number;
