import { useCallback, useRef } from 'react';

export const useDebounce = (callback: () => any, delay: number) => {
    type TimeoutType = ReturnType<typeof setTimeout>;
    const timer = useRef<TimeoutType>();

    const debouncedCallback = useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => callback(), delay);
    }, [callback, delay]);

    return debouncedCallback;
};
