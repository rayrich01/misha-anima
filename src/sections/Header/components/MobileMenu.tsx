import { useState } from "react";
import { MobileMenuToggle } from "@/sections/Header/components/MobileMenuToggle";
import { MobileMenuContent } from "@/sections/Header/components/MobileMenuContent";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box-border caret-transparent block md:hidden">
      <MobileMenuToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <MobileMenuContent isOpen={isOpen} />
    </div>
  );
};
