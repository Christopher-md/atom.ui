import { useEffect, useLayoutEffect } from "react";

// The browser will use - `useLayoutEffect`, but in SSR it will be - `useEffect`
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
