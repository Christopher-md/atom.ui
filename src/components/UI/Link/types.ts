import { LinkProps } from "react-router-dom";

interface LinkOwnProps {
    disabled?: boolean;
}

type Props = LinkProps & LinkOwnProps;

export default Props;
