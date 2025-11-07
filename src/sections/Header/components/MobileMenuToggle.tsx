import { useState } from "react";
import { Menu, X } from "lucide-react";

export type MobileMenuToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileMenuToggle = ({ isOpen, onToggle }: MobileMenuToggleProps) => {
  return (
    <div className="relative bg-black/100 box-border caret-transparent min-h-[57px] text-center overflow-hidden">
      <button
        onClick={onToggle}
        className="absolute text-black text-[17px] bg-amber-200 box-border caret-transparent block h-[57.8px] leading-[25.5px] right-[calc(50%_-_30px)] w-[61.2px] px-4 py-3.5 top-0 hover:bg-amber-300 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 mx-auto" />
        ) : (
          <Menu className="w-6 h-6 mx-auto" />
        )}
      </button>
    </div>
  );
};
