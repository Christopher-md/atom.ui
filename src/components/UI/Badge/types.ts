import React, { HTMLAttributes } from "react";

type Color = "red" | "green" | "orange" | "blue";

type Placement = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface BadgeOwnProps {
    color?: Color;
    placement?: Placement;
    children: React.ReactNode;
    content?: string | number;
}

type Props = HTMLAttributes<HTMLDivElement> & BadgeOwnProps;

export default Props;
