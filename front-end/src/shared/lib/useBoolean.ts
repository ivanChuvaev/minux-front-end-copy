import { useStateObj } from "./useStateObj"

export const useBoolean = (defaultValue: boolean) => {
  const state = useStateObj(defaultValue)
  return {
    ...state,
    setTrue: () => state.setValue(true),
    setFalse: () => state.setValue(false),
    toggle: () => state.setValue(prev => !prev)
  }
}
