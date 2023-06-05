import { InputHTMLAttributes } from "react";
import { InputOwnProps } from "@/components/UI/Input/types";
import { SearchBaseOwnProps } from "./SearchBase/types";

type Props = InputHTMLAttributes<HTMLInputElement> & InputOwnProps & SearchBaseOwnProps;

export default Props;
