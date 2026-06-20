import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export const PrayerDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
        >
          <Gift className="mr-2 h-6 w-6" />
          Receber Oração
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center mb-4 text-primary">
            Oração dos Frutos do Espírito
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-foreground/90 leading-relaxed text-lg px-4">
          <p className="text-center italic">
            "Senhor, que Teu Espírito floresça em mim.
          </p>
          <p className="text-center">
            Ensina-me a amar sem medida, a alegrar-me mesmo na dor e a viver em paz contigo.
          </p>
          <p className="text-center">
            Dá-me paciência para com os outros, amabilidade nas palavras e bondade nas ações.
          </p>
          <p className="text-center">
            Fortalece minha fidelidade, molda minha mansidão e guia-me no domínio próprio.
          </p>
          <p className="text-center">
            Que cada fruto do Teu Espírito cresça e frutifique em mim,
            para que minha vida Te reflita todos os dias.
          </p>
          <p className="text-center font-semibold italic">
            Amém."
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
