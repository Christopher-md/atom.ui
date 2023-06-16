import React from "react";
import Input from "@/components/UI/Input/Input";
import type Props from "./types";

/**
 * Created by chaikovskiy on 05.06.2023
 */
const Search: React.FC<Props> = (props) => {
    const { label, onEnter, onKeyDown, ...rest } = props;

    const onHandleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === "Enter" && onEnter) {
            onEnter();
        }

        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    return (
        <Input
            label={label}
            type="search"
            onKeyDown={onHandleKeyDown}
            {...rest}
        />
    );
};

export default Search;
