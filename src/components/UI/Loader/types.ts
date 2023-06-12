import { HTMLAttributes } from "react";

type Type = "fixed" | "absolute" | "static";

type Size = "extra-small" | "small" | "medium" | "large";

type LoaderOwnProps = {
    type?: Type;
    size?: Size;
    full?: boolean;
    center?: boolean;
};

type Props = LoaderOwnProps & HTMLAttributes<HTMLDivElement>;

export default Props;
