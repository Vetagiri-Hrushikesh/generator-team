import { useState, useEffect } from 'react';

export const useTransientState = <T,>(defaultValue: T, persistKey?: string) => {
  const [state, setState] = useState<T>(() => {
    if (persistKey) {
      const saved = localStorage.getItem(persistKey);
      return saved ? JSON.parse(saved) : defaultValue;
    }
    return defaultValue;
  });

  const resetState = () => {
    setState(defaultValue);
  };

  useEffect(() => {
    if (persistKey) {
      localStorage.setItem(persistKey, JSON.stringify(state));
    }
  }, [state, persistKey]);

  return { state, setState, resetState };
};