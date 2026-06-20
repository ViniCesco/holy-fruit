import { useState } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { id: "verse-section", label: "Versículo Base" },
    { id: "divine-fruits", label: "Ligação com Deus" },
    { id: "connection-fruits", label: "Conexão com o Próximo" },
    { id: "maturity-fruits", label: "Maturidade Interior" },
    { id: "prayer-section", label: "Oração" },
  ];

  return (
    <nav className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="md:hidden bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2">
        {!isCollapsed && (
          <ul className="flex gap-4 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-border/50 animate-fade-in">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
        
        {/* Collapse/Expand Button */}
        <Button
          variant="outline"
          size="icon"
          className="bg-background/80 backdrop-blur-sm shadow-lg"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expandir menu" : "Ocultar menu"}
        >
          {isCollapsed ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden absolute right-0 top-12 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-xl py-2 min-w-[200px]">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
