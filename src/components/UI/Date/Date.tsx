import React, { FC } from "react";
import DateBase from "@/components/UI/DateBase";
import Input from "@/components/UI/Input";
import type Props from "./Date.types";

const Date: FC<Props> = (props) => {
    const { value, hyphen, yearMin, yearMax, onChange, ...rest } = props;

    return (
        <Input
            value={value}
            onChange={onChange}
            options={{
                hyphen: hyphen,
                yearMin: yearMin,
                yearMax: yearMax,
                component: DateBase,
            }}
            {...rest}
        />
    );
};

export default Date;
