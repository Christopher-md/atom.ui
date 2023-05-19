import React, { FC } from "react";
import NumberFormat from "react-number-format";
import validDate from "./utils/validDate";
import type { DateBaseProps } from "./types";

const DateBase: FC<DateBaseProps> = (props) => {
    const { hyphen = ".", yearMax = 2050, yearMin = 1920, ...rest } = props;

    const format = (v: string) => validDate(v, {
        hyphen,
        yearMax: String(yearMax),
        yearMin: String(yearMin),
    });

    return (
        <NumberFormat
            format={format}
            {...rest}
        />
    );
};

export default DateBase;
