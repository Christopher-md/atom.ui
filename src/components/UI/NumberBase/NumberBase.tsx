import React from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";

/**
 * Created by chaikovskiy on 28.04.2023
 */
const NumberBase: React.FC<NumberFormatProps> = (props) => {
    const { type = "tel", decimalScale = 0, allowNegative = false, allowLeadingZeros = true, ...rest } = props;

    return (
        <NumberFormat
            type={type}
            decimalScale={decimalScale}
            allowNegative={allowNegative}
            allowLeadingZeros={allowLeadingZeros}
            {...rest}
        />
    );
};

export default NumberBase;
