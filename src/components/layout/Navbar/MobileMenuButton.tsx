import { CloseIcon, MenuIcon } from "../../icons";

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="ml-auto hidden h-11 w-11 flex-shrink-0 items-center justify-center border-none bg-transparent text-[#27354A] mw-980:flex"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}
