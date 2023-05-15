import { HTMLAttributes } from "react";

type Type = "fixed" | "absolute" | "static";

type LoaderOwnProps = {
    type?: Type
    full?: boolean;
    center?: boolean;
};

type Props = LoaderOwnProps & HTMLAttributes<HTMLDivElement>;

export default Props;
