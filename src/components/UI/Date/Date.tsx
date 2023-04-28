import React, { FC } from "react";
import DateBase from "@/components/UI/DateBase";
import Input from "@/components/UI/Input";
import type Props from "./Date.types";

const Date: FC<Props> = (props) => {
    const { value, onChange, options = {}, ...rest } = props;
    const { hyphen, yearMin, yearMax } = options;

    return (
        <Input
            value={value}
            hyphen={hyphen}
            yearMin={yearMin}
            yearMax={yearMax}
            onChange={onChange}
            options={{
                component: DateBase,
            }}
            {...rest}
        />
    );
};

export default Date;
