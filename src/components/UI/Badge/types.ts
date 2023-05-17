import React, { HTMLAttributes } from "react";

interface BadgeOwnProps {
    content?: string | number;
    children: React.ReactNode;
}

type Props = HTMLAttributes<HTMLDivElement> & BadgeOwnProps;

export default Props;
