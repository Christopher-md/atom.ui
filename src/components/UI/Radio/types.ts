import { InputHTMLAttributes } from "react";

type LabelPlacement = "top" | "bottom" | "left" | "right";

interface RadioOwnProps {
    label: string;
    labelPlacement?: LabelPlacement;
}

type Props = InputHTMLAttributes<HTMLInputElement> & RadioOwnProps;

export default Props;
