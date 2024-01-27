import { create } from "zustand";
import axiosUrl from "./api/axiosURL";

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
      const result = await axiosUrl();
      set({
        data: result.data.results,
        nextPage: result.data.next,
        loading: false,
      });
    } catch (error) {
      set({ loading: false, error: "Error on fetching data" });
      console.log("Error on fetching data");
    }
  },
}));

export default useCounter;
