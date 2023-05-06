import { InputHTMLAttributes } from "react";

type LabelPlacement = "top" | "bottom" | "left" | "right";

interface CheckboxOwnProps {
    label: string
    labelPlacement?: LabelPlacement
}

type Props = InputHTMLAttributes<HTMLInputElement> & CheckboxOwnProps;

export default Props;
