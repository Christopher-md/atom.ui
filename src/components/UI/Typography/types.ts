import React, { ComponentProps, ComponentType } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type Size = "small" | "medium" | "large" | "inherit";

type Color = "primary" | "secondary" | "red";

type Elements =
    { [K in `h${HeadingLevel}`]: React.HTMLAttributes<HTMLHeadingElement>; } & {
        span: React.HTMLAttributes<HTMLSpanElement>;
        p: React.HTMLAttributes<HTMLParagraphElement>;
    };

type Keys = keyof Elements;

type ElementType<P = any> =
    { [K in Keys]: P extends Elements[K] ? K : never }[Keys] |
    ComponentType<P>;

interface TypographyOwnProps<E extends ElementType = ElementType> {
    as?: E;
    size?: Size;
    color?: Color;
    children: React.ReactNode;
    disableSelection?: boolean;
}

type Props<E extends ElementType> =
    TypographyOwnProps<E> &
    Omit<ComponentProps<E>, keyof TypographyOwnProps>;

export type {
    Keys,
    Props,
    Elements,
    ElementType,
    TypographyOwnProps,
};
