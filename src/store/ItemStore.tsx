import create from "zustand";

interface ItemState {
  id: number;
  setId: (id: number) => void;
  name: string;
  setName: (name: string) => void;
  category: number;
  setCategory: (category: number) => void;
  note: string;
  setNote: (note: string) => void;
  image: string;
  setImage: (image: string) => void;
  showDetails: number;
  setShowDetails: (showDetails: number) => void;
}

export const itemStore = create<ItemState>((set) => ({
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
  category: 0,
  setCategory: (category) =>
    set((state) => ({
      ...state,
      category,
    })),
  note: "",
  setNote: (note) =>
    set((state) => ({
      ...state,
      note,
    })),
  image: "",
  setImage: (image) =>
    set((state) => ({
      ...state,
      image,
    })),
  showDetails: 0,
  setShowDetails: (showDetails) =>
    set((state) => ({
      ...state,
      showDetails,
    })),
}));
