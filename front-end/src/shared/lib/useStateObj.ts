import { useState } from 'react'

export const useStateObj = <T>(defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);
  return { value, setValue }
}
