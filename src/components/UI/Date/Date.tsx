import React, { FC } from "react";
import Input from "@/components/UI/Input";
import DateBase from "@/components/UI/Date/DateBase";
import type Props from "./types";

const Date: FC<Props> = (props) => {
    const { value, onChange, options = {}, ...rest } = props;
    const { hyphen, yearMin, yearMax } = options;

    return (
        <Input
            as={DateBase}
            value={value}
            hyphen={hyphen}
            yearMin={yearMin}
            yearMax={yearMax}
            onChange={onChange}
            {...rest}
        />
    );
};

export default Date;
