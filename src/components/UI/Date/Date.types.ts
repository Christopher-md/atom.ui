import React from "react";
import { NumberFormatValues } from "react-number-format";
import { InputOwnProps } from "@/components/UI/Input/Input.types";
import { DateBaseOptions } from "@/components/UI/DateBase/DateBase.types";

type InputProps = InputOwnProps<string, NumberFormatValues>;

type DateOwnProps = Partial<DateBaseOptions> & InputProps;

type Props =
    DateOwnProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputProps>;

export default Props;
