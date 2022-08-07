import create from "zustand";

interface ListState {
  id: number;
  setId: (id: number) => void;
  name: string;
  setName: (name: string) => void;
  showDetails: number;
  setShowDetails: (showDetails: number) => void;
  day: string;
  setDay: (setDay: string) => void;
  date: string;
  setDate: (setDate: string) => void;
}

export const listStore = create<ListState>((set) => ({
  id: 0,
  setId: (id) =>
    set((state) => ({
      ...state,
      id,
    })),
  name: "",
  setName: (name) =>
    set((state) => ({
      ...state,
      name,
    })),
  showDetails: 0,
  setShowDetails: (showDetails) =>
    set((state) => ({
      ...state,
      showDetails,
    })),
  day: "",
  setDay: (day) =>
    set((state) => ({
      ...state,
      day,
    })),
  date: "",
  setDate: (date) =>
    set((state) => ({
      ...state,
      date,
    })),
}));
