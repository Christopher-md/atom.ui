import React, {ComponentProps, ComponentType} from 'react';

interface Elements {
    span: React.HTMLAttributes<HTMLSpanElement>
    h1: React.HTMLAttributes<HTMLHeadingElement>
    h2: React.HTMLAttributes<HTMLHeadingElement>
    h3: React.HTMLAttributes<HTMLHeadingElement>
    h4: React.HTMLAttributes<HTMLHeadingElement>
    h5: React.HTMLAttributes<HTMLHeadingElement>
    h6: React.HTMLAttributes<HTMLHeadingElement>
    p: React.HTMLAttributes<HTMLParagraphElement>
}

type Keys = keyof Elements;

type ElementType<P = any> =
    { [K in Keys]: P extends Elements[K] ? K : never }[Keys] |
    ComponentType<P>;

interface TypographyOwnProps<E extends ElementType = ElementType> {
    as?: E;
    children: React.ReactNode;
}

type Props<E extends ElementType> =
    TypographyOwnProps<E> &
    Omit<ComponentProps<E>, keyof TypographyOwnProps>;

export type {
    Keys,
    Props,
    Elements,
    ElementType,
    TypographyOwnProps
};
