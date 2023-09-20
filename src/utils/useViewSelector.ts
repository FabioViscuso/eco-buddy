import uiStore from "../state/useUIStore";
import viewsStore, { Views } from "../state/useViewsStore";

const useViewSelector = () => {
  const isFirstTime = uiStore((state) => state.isFirstTime);
  const setIsFirstTime = uiStore((state) => state.setIsFirstTime);
  const setView = viewsStore((state) => state.setView);

  return {
    handleViewSelector: (e: React.MouseEvent) => {
      const newView: Views = e.currentTarget.getAttribute(
        "data-nextview"
      ) as Views;
      setView(newView);
      if (newView === Views.Calendar && isFirstTime) {
        setIsFirstTime(false);
      }
    },
  };
};

export default useViewSelector;
