import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    interval?: number;
    children: React.ReactNode;
}

export default Props;
