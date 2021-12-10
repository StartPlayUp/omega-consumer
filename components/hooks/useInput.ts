import { useState, useCallback } from 'react';

// https://www.typescriptlang.org/docs/handbook/2/generics.html

const UseInput = <Type>(initValue: Type | null = null): [Type | null, Function] => {
  const [value, setter] = useState<Type | null>(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

export default UseInput
