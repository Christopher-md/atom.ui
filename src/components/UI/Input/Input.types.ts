import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    fullWidth?: boolean;
    error?: boolean | string;
}

export default Props;
