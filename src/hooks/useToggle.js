import { useCallback, useState } from "react";

const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const handleChangeValue = useCallback(() => {
    setState((state) => !state);
  }, []);

  const handleUpdateValue = useCallback((state) => setState(state), []);

  return [state, handleChangeValue, handleUpdateValue];
};

export default useToggle;
