import React, { ChangeEvent } from "react";
import { InputOwnProps } from "@/components/UI/Input/Input.types";

type NumberOwnProps = InputOwnProps<string, ChangeEvent<HTMLInputElement>>;

type Props =
    NumberOwnProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof NumberOwnProps>;

export default Props;
