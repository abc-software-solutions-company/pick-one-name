import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

type State = {
  bgImage: string;
  color: string;
};

type Actions = {
  storageBgImage: (bgImage: string) => void;
  storageColor: (color: string) => void;
};

const initialState: State = {bgImage: '', color: ''};

export const useLocalStorage = create<State & Actions>()(
  persist(
    set => ({
      ...initialState,
      storageBgImage: (bgImage: string) => set({bgImage: bgImage}),
      storageColor: (color: string) => set({color: color})
    }),
    {
      name: 'setting-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
