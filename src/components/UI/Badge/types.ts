import React, { HTMLAttributes } from "react";

type Color = "red" | "green" | "orange" | "blue";

interface BadgeOwnProps {
    color?: Color;
    children: React.ReactNode;
    content?: string | number;
}

type Props = HTMLAttributes<HTMLDivElement> & BadgeOwnProps;

export default Props;
