import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    interval?: number;
    children: React.ReactNode;
}

export default Props;
