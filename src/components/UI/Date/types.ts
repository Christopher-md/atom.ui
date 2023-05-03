import { NumberFormatProps } from "react-number-format";
import { InputOwnProps } from "@/components/UI/Input/types";
import { DateBaseOptions } from "@/components/UI/DateBase/types";

type InputProps = InputOwnProps & NumberFormatProps;

type Props = InputProps & {
    options?: DateBaseOptions
};

export default Props;
