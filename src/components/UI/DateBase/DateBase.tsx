import React, { FC } from "react";
import NumberFormat from "react-number-format";
import { validDate } from "./utils";
import type { DateBaseProps } from "./DateBase.types";

const DateBase: FC<DateBaseProps> = (props) => {
    const { hyphen = ".", yearMax = 2050, yearMin = 1920, ...rest } = props;

    const validDateHandler = React.useCallback((v: string) => validDate(v, {
        hyphen,
        yearMax: String(yearMax),
        yearMin: String(yearMin),
    }), [hyphen, yearMax, yearMin]);

    return (
        <NumberFormat
            format={validDateHandler}
            {...rest}
        />
    );
};

export default DateBase;
