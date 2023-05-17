import { DependencyList, EffectCallback, useEffect, useRef } from "react";

function useDidUpdateEffect(fn: EffectCallback, deps: DependencyList): void {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }

        fn();
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}

export default useDidUpdateEffect;
