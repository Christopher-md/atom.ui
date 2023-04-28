import React, { forwardRef, Ref } from "react";
import type Props from "./InputBase.types";
import type { InputBaseType } from "./InputBase.types";

function InputBase<T extends string, E>(props: Props<T, E>, ref: Ref<HTMLInputElement>) {
    const { type = "text", onChange, options = {}, value, ...rest } = props;
    const { component: Component = "input", ...restOptions } = options;

    return (
        <Component
            ref={ref}
            type={type}
            value={value}
            onChange={(event) => onChange(event as E)}
            {...restOptions}
            {...rest}
        />
    );
}

export default forwardRef(InputBase) as InputBaseType;
