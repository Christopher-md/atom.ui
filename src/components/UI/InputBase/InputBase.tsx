import React from "react";
import type Props from "./InputBase.types";

const InputBase = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { type = "text", ...rest } = props;

    return (
        <input
            ref={ref}
            type={type}
            {...rest}
        />
    );
});

export default InputBase;
