import { create } from 'zustand'

const useStore = create((set) => ({
  complaints: [],
  updateComplaints: (newComplaints) => set({ complaints: newComplaints }),
}))

export default useStore;