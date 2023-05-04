import { NumberFormatProps } from "react-number-format";

interface DateBaseOptions {
    hyphen?: string;
    yearMax?: number;
    yearMin?: number;
}

type DateBaseProps = NumberFormatProps & DateBaseOptions;

export type {
    DateBaseProps,
    DateBaseOptions,
};
