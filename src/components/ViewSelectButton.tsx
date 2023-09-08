import { Views } from "../state/viewsStore";
import useViewSelector from "../utils/useViewSelector";

interface ButtonProps {
  currentView: Views;
  targetView: Views;
  className: string;
  children: React.ReactNode;
}

export default function ViewSelectButton({
  currentView,
  targetView,
  className,
  children,
}: ButtonProps) {
  const { handleViewSelector } = useViewSelector();

  return (
    <button
      className={className}
      onClick={handleViewSelector}
      data-currentview={currentView}
      data-nextview={targetView}
      type="button"
      role="view switcher"
    >
      {children}
    </button>
  );
}
