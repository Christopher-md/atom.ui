import { Props as ReactSelectProps, GroupBase } from "react-select";
import { AsyncProps as ReactSelectAsyncProps } from "react-select/async";

interface SelectOwnProps {
    fullWidth?: boolean;
}

type SelectProps<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
> = ReactSelectProps<Option, IsMulti, Group> & SelectOwnProps;

type AsyncSelectProps<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
> = ReactSelectAsyncProps<Option, IsMulti, Group> & SelectOwnProps;

export type {
    SelectProps,
    SelectOwnProps,
    AsyncSelectProps,
};
