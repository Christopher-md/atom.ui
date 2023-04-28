import React, { FC } from "react";
import NumberFormat from "react-number-format";
import { formatDate, validDate } from "./utils";
import type { DateBaseProps } from "./DateBase.types";

const DateBase: FC<DateBaseProps> = (props) => {
    const { hyphen = ".", yearMax = 2050, yearMin = 1920, onChange, ...rest } = props;

    const validDateHandler = React.useCallback((v: string) => validDate(v, {
        hyphen,
        yearMax: String(yearMax),
        yearMin: String(yearMin),
    }), [hyphen, yearMax, yearMin]);

    return (
        <NumberFormat
            format={validDateHandler}
            onValueChange={(values) => {
                const result = formatDate(values.value, hyphen);

                onChange({
                    floatValue: values.floatValue,
                    formattedValue: values.formattedValue,
                    value: result,
                });
            }}
            {...rest}
        />
    );
};

export default DateBase;
