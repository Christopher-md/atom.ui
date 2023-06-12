import React from "react";
import Input from "@/components/UI/Input/Input";
import SearchBase from "./SearchBase";
import type Props from "./types";

/**
 * Created by chaikovskiy on 05.06.2023
 */
const Search: React.FC<Props> = (props) => {
    const { label, ...rest } = props;

    return (
        <Input
            label={label}
            as={SearchBase}
            {...rest}
        />
    );
};

export default Search;
