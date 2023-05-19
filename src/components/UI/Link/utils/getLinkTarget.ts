import { To } from "react-router-dom";
import { HTMLAttributeAnchorTarget } from "react";
import isExternalLink from "@/utils/isExternalLink";

const getLinkTarget = (to: To, target?: HTMLAttributeAnchorTarget) => {
    if (target) return target;

    const url = typeof to === "string" ? to : to.pathname;

    return isExternalLink(url) ? "_blank" : "_self";
};

export default getLinkTarget;
