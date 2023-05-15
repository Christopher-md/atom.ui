import { RefObject, useEffect } from "react";

type Handler = () => void;

const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    callback: Handler,
) => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback();
            }
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [ref, callback]);
};

export default useClickOutside;
