import React from "react";

export function useEventCallback<T>(fn: T, dependencies: any[]) {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = fn;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, ...dependencies]);

  return React.useCallback(() => {
    const fn = ref.current;

    if (typeof fn === 'function') {
      return fn();
    } else {
      throw new Error('typeof fn !== function');
    }
  }, [ref]);
}
