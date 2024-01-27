import { create } from "zustand";

const useCounter = create((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  removeCount: () => set({ counter: 0 }),
  data: [],
  nextPage: null,
  loading: false,
  error: null,
  fetchData: async () => {
    try {
      set({ loading: true, error: null });
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const result = await response.json();
      set({ data: result.results, nextPage: result.next, loading: false });
    } catch (error) {
      set({ loading: false, error: "Error on fetching data" });
      console.log("Error on fetching data");
    }
  },
}));

export default useCounter;
