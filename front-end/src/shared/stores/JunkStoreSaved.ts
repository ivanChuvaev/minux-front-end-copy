import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  counter: number
}

/**
 * global store that is persisted in local storage
 */
export const useJunkStoreSaved = create<State>()(persist(() => ({
    counter: 0,
  }),
  {
    name: 'junk-store-saved',
    version: 1
  }
));
