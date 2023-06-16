import React from "react";
import { GroupBase } from "react-select";
import ReactSelect from "react-select/async";
import messages from "./constants/messages";
import type { AsyncSelectProps as Props } from "./types";
import style from "./style";

/**
 * Created by chaikovskiy on 13.06.2023
 */
const AsyncSelect = <
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
            loadingMessage={() => messages.loading}
            {...props}
        />
    );
};

export default AsyncSelect;
