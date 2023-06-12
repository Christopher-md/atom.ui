import { InputHTMLAttributes } from "react";

interface SearchBaseOwnProps {
    onEnter?: () => void;
    onSearch?: () => void;
}

type Props = InputHTMLAttributes<HTMLInputElement> & SearchBaseOwnProps;

export type {
    Props,
    SearchBaseOwnProps,
};
