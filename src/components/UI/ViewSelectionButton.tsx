import { Views } from "../../state/useViewsStore";
import useViewSelector from "../../utils/useViewSelector";

interface ButtonProps {
  targetView: Views;
  className: string;
  children: React.ReactNode;
}

export default function ViewSelectionButton({
  targetView,
  className,
  children,
}: ButtonProps) {
  const { handleViewSelector } = useViewSelector();

  return (
    <button
      className={`${className}`}
      onClick={handleViewSelector}
      data-nextview={targetView}
      type="button"
      role="view switcher"
    >
      {children}
    </button>
  );
}
