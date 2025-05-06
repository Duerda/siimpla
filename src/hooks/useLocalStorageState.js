import { useState, useEffect } from 'react';

// Custom Hook to manage state synchronized with localStorage
function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let storedValue;
    try {
      storedValue = localStorage.getItem(key);
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return defaultValue;
    }

    if (storedValue !== null) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error(`Error parsing JSON from localStorage key “${key}”:`, error);
        // If parsing fails, remove the corrupted item and return default
        try {
          localStorage.removeItem(key);
        } catch (removeError) {
          console.error(`Error removing corrupted localStorage key “${key}”:`, removeError);
        }
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
