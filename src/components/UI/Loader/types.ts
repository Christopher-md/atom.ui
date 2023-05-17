import { HTMLAttributes } from "react";

type Size = "small" | "medium" | "large";

type Type = "fixed" | "absolute" | "static";

type LoaderOwnProps = {
    type?: Type;
    size?: Size;
    full?: boolean;
    center?: boolean;
};

type Props = LoaderOwnProps & HTMLAttributes<HTMLDivElement>;

export default Props;
