import { useEffect, useState } from "react";

const getMatches = (query: string) => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
        return window.matchMedia(query).matches;
    }

    return false;
};

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(getMatches(query));

    useEffect(() => {
        function handleChange() {
            setMatches(getMatches(query));
        }

        const matchMedia = window.matchMedia(query);

        // Listen matchMedia
        matchMedia.addEventListener("change", handleChange);

        return () => {
            matchMedia.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
