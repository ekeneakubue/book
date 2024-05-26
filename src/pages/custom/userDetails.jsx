import { useState } from 'react';

// Custom hook definition
const useCustomHook = () => {
  const [value, setValue] = useState('');
  

  const setValueAndUpdate = (newValue) => {
    console.log(newValue,'someting')
    setValue(newValue);
  };

  return {
    value,
    setValue: setValueAndUpdate,
  };
};

export default useCustomHook;
