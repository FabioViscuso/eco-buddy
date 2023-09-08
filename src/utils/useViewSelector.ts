import userStore from "../state/store";
import viewsStore, { Views } from "../state/viewsStore";

const useViewSelector = () => {
  const isFirstTime = userStore((state) => state.isFirstTime);
  const setIsFirstTime = userStore((state) => state.setIsFirstTime);
  const currentView = viewsStore((state) => state.view);
  const setView = viewsStore((state) => state.setView);

  return {
    handleViewSelector: (e: React.MouseEvent) => {
      const newView: Views = e.currentTarget.getAttribute(
        "data-nextview"
      ) as Views;
      setView(newView);
      if (currentView === Views.Wizard && isFirstTime) {
        setIsFirstTime(false);
      }
    },
  };
};

export default useViewSelector;
