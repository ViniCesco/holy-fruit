import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";

interface FruitClickCardProps {
  name: string;
  verse: string;
  verseReference: string;
  explanation: string;
  application: string;
  icon: string;
}

export const FruitClickCard = ({ name, verse, verseReference, explanation, application, icon }: FruitClickCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          ref={cardRef}
          className={`p-6 transition-all duration-700 shadow-lg hover:shadow-xl border-border/50 cursor-pointer hover:scale-105 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="text-5xl animate-glow" aria-hidden="true">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-primary">{name}</h3>
            <p className="text-sm text-muted-foreground">Clique para saber mais</p>
          </div>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-4xl text-center mb-6 text-primary flex items-center justify-center gap-3">
            <span className="text-5xl">{icon}</span>
            {name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 px-2">
          <div className="border-l-4 border-accent pl-4 py-2 bg-secondary/30 rounded-r-lg">
            <p className="text-lg italic text-foreground/90 leading-relaxed">
              "{verse}"
            </p>
            <p className="text-sm text-muted-foreground mt-2">— {verseReference}</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-primary mb-3">Explicação:</h4>
            <p className="text-foreground/80 leading-relaxed text-base">{explanation}</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-primary mb-3">Aplicação:</h4>
            <p className="text-foreground/80 leading-relaxed text-base">{application}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
