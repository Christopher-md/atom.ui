import { NumberFormatProps } from "react-number-format";
import { InputOwnProps } from "@/components/UI/Input/Input.types";

type NumberOwnProps = NumberFormatProps & InputOwnProps & {
    value: string | number | ReadonlyArray<string> | undefined
};

type Props = NumberOwnProps;

export default Props;
