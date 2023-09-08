import { Views } from "../store/viewsStore";
import useViewSelector from "../utils/useViewSelector";

interface ButtonProps {
  currentView: Views;
  targetView: Views;
  children: React.ReactNode;
}

export default function ViewSelectButton({
  currentView,
  targetView,
  children,
}: ButtonProps) {
  const { handleViewSelector } = useViewSelector();

  return (
    <button
      id={`context-${currentView}`}
      onClick={handleViewSelector}
      data-view={targetView}
      type="button"
      role="view switcher"
    >
      {children}
    </button>
  );
}
