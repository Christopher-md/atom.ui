import { useCallback, useEffect, useRef } from "react";

type Handler = () => void;

const useClickOutside = <T extends HTMLElement = HTMLElement>(callback: Handler) => {
    const ref = useRef<T>(null);

    const handleClick = useCallback((e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            callback();
        }
    }, [callback]);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [handleClick]);

    return ref;
};

export default useClickOutside;
