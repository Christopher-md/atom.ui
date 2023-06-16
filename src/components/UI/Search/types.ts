import { InputHTMLAttributes } from "react";
import { InputOwnProps } from "@/components/UI/Input/types";

interface SearchOwnProps extends InputHTMLAttributes<HTMLInputElement> {
    onEnter: () => void
}

type Props = SearchOwnProps & InputOwnProps;

export default Props;
