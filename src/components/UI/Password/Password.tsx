import React from "react";
import Input from "@/components/UI/Input";
import PasswordBase from "@/components/UI/Password/PasswordBase";
import type Props from "./types";

/**
 * Created by chaikovskiy on 10.05.2023
 */
const Password: React.FC<Props> = (props) => {
    const { label, ...rest } = props;

    return (
        <Input
            label={label}
            as={PasswordBase}
            {...rest}
        />
    );
};

export default Password;
