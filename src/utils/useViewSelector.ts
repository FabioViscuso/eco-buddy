import userStore from "../state/store";
import { Views } from "../state/viewsStore";
import viewsStore from "../state/viewsStore";

const useViewSelector = () => {
  const isFirstTime = userStore(state => state.isFirstTime);
  const setIsFirstTime = userStore(state => state.setIsFirstTime)
  const setView = viewsStore(state => state.setView);

  return {
    handleViewSelector: (e: React.MouseEvent) => {
      const newView: Views = e.currentTarget.getAttribute("data-nextview") as Views;
      setView(newView);
      if (e.currentTarget.getAttribute("data-currentview") === `${Views.Wizard}` && isFirstTime) {
        setIsFirstTime(false);
      }
    },
  };
}

export default useViewSelector;