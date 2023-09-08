import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

export enum Views {
  Calendar = "calendar",
  Settings = "settings",
  Welcome = "welcome",
  Wizard = "wizard"
}

interface State {
  view: Views;
  setView: (newView: Views) => void;
}

const viewsStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        view: Views.Calendar,
        setView: (newView) => set({ view: newView }),
      }),
      {
        name: "viewsState",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default viewsStore;
