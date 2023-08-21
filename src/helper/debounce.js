import { useEffect, useState } from "react";

const useDebounce = (text, delay = 500) => {
  const [debouncedValue, setDebounceValue] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return [debouncedValue];
};

export default useDebounce;
