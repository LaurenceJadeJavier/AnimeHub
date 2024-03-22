import { create } from "zustand";


// STATE MANAGEMENT ZUSTAND can you use REDUX also
interface AnimeStore {
  selectedAnimeId: string | null;
  setSelectedAnimeId: (id: string | null) => void;
}

const useAnimeStore = create<AnimeStore>((set) => ({
  selectedAnimeId: null,
  setSelectedAnimeId: (id) => set({ selectedAnimeId: id }),
}));

export default useAnimeStore;
