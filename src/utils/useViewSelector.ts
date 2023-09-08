import userStore from "../store/store";
import { Views } from "../store/viewsStore";
import viewsStore from "../store/viewsStore";

const useViewSelector = () => {
  const isFirstTime = userStore(state => state.isFirstTime);
  const setIsFirstTime = userStore(state => state.setIsFirstTime)
  const setView = viewsStore(state => state.setView);

  return {
    handleViewSelector: (e: React.MouseEvent) => {
      const newView: Views = e.currentTarget.getAttribute("data-view") as Views;
      setView(newView);
      if (e.currentTarget.id === `context-${Views.Wizard}` && isFirstTime) {
        setIsFirstTime(false);
      }
    },
  };
}

export default useViewSelector;