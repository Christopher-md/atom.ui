import React from "react";
import ReactSelect, { GroupBase } from "react-select";
import messages from "./constants/messages";
import type { SelectProps as Props } from "./types";
import style from "./style";

/**
 * Created by chaikovskiy on 13.06.2023
 */
const Select = <
    Option = unknown,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) => {
    const { fullWidth, menuPlacement = "auto", placeholder = "Select..." } = props;

    const styles = style<Option, IsMulti, Group>({
        fullWidth: fullWidth,
    });

    return (
        <ReactSelect
            styles={styles}
            placeholder={placeholder}
            menuPlacement={menuPlacement}
            noOptionsMessage={() => messages.empty}
            {...props}
        />
    );
};

export default Select;
