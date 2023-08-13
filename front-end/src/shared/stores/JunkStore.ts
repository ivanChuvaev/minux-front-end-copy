import { create } from 'zustand'

type State = {
  counter: number
}

/**
 * global store
 */
export const useJunkStore = create<State>(() => ({
  counter: 0,
}));