import { Dispatch, SetStateAction, useCallback, useState } from "react";

type Type = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

function useToggle(initialState = false): Type {
    const [value, setValue] = useState(initialState);

    const toggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return [value, toggle, setValue];
}

export default useToggle;
