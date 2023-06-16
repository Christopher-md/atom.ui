import { GroupBase, StylesConfig } from "react-select";
import type { SelectOwnProps } from "./types";

const color = "var(--text-secondary, #707070)";
const background = "var(--bg-tertiary, #ececec)";

// Styles (React Select offers 3 main APIs for styling)
// https://react-select.com/styles
const style = <
    Option = unknown,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>({ fullWidth }: SelectOwnProps): StylesConfig<Option, IsMulti, Group> => ({
    container: (styles) => ({
        ...styles,
        minHeight: "55px",
        width: fullWidth
            ? "100%"
            : "200px",
    }),
    control: (styles) => ({
        ...styles,
        width: "100%",
        height: "100%",
        border: "none",
        boxShadow: "none",
        transition: "none",
        borderRadius: "8px",
        backgroundColor: background,
    }),
    menu: (styles) => ({
        ...styles,
        boxShadow: "none",
        backgroundColor: background,
    }),
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        fontSize: "14px",
        cursor: "pointer",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        color: (isSelected || isFocused)
            ? "#ffffff"
            : color,
        backgroundColor: isSelected
            ? "#3a8976"
            : isFocused
                ? "rgba(0, 0, 0, .20)"
                : "transparent",

        ":active": {
            color: "#ffffff",
            backgroundColor: "#3a8976",
        },
    }),
    placeholder: (styles) => ({
        ...styles,
        color: color,
        fontSize: "14px",
    }),
    singleValue: (styles) => ({
        ...styles,
        color: color,
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        backgroundColor: color,
    }),
    indicatorsContainer: (styles) => ({
        ...styles,
        cursor: "pointer",
        svg: {
            fill: color,
            width: "18px",
            height: "18px",
        },
    }),
    input: (styles) => ({
        ...styles,
        color: color,
    }),
    valueContainer: (styles) => ({
        ...styles,
        fontSize: "14px",
    }),
    multiValue: (styles) => ({
        ...styles,
        color: "white",
        backgroundColor: "#3a8976",
    }),
    multiValueLabel: (styles) => ({
        ...styles,
        color: "white",
    }),
    multiValueRemove: (styles) => ({
        ...styles,

        ":hover": {
            backgroundColor: "#ff5761",
        },
    }),
});

export default style;
