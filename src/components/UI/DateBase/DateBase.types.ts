import { NumberFormatValues } from "react-number-format";

interface DateBaseOptions {
    hyphen: string;
    yearMax: number;
    yearMin: number;
}

interface Props {
    value: string;
    onChange: (event: NumberFormatValues) => void;
}

type DateBaseProps = Props & DateBaseOptions;

export type {
    DateBaseProps,
    DateBaseOptions,
};
