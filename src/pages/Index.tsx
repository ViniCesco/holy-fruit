import { FruitClickCard } from "@/components/FruitClickCard";
import { PrayerDialog } from "@/components/PrayerDialog";
import { Navigation } from "@/components/Navigation";
import { LeafDecoration } from "@/components/LeafDecoration";
import { Footer } from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import holyFruitLogo from "@/assets/holy-fruit-logo.jpeg";

const Index = () => {
  const scrollToContent = () => {
    document.getElementById("verse-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const divineGroupFruits = [
    {
      name: "Amor",
      icon: "❤️",
      verse: "E agora permanecem a fé, a esperança e o amor. O maior deles, porém, é o amor.",
      verseReference: "1 Coríntios 13:13 (NVI)",
      explanation: "O amor é a essência de Deus e o primeiro fruto que revela a presença do Espírito Santo. Não é apenas sentimento, mas uma escolha constante de refletir o caráter divino — amar mesmo quando não é fácil, perdoar quando dói, e servir quando ninguém vê.",
      application: "Cultive o amor nas pequenas coisas — um gesto gentil, uma palavra de encorajamento, uma escuta verdadeira. O amor é o suco mais puro que flui do Espírito; quanto mais você oferece, mais o Céu te enche.",
    },
    {
      name: "Alegria",
      icon: "😊",
      verse: "A alegria do Senhor é a nossa força.",
      verseReference: "Neemias 8:10 (NVI)",
      explanation: "A verdadeira alegria não depende de circunstâncias. Ela nasce da certeza de que Deus está presente, mesmo em meio às tempestades. É a luz que o Espírito acende dentro de nós, mesmo quando tudo parece escuro.",
      application: "Comece o dia agradecendo — a gratidão desperta a alegria. Quando a alma aprende a ver beleza no simples, ela nunca mais perde a cor.",
    },
    {
      name: "Paz",
      icon: "🕊️",
      verse: "Deixo-lhes a paz; a minha paz lhes dou. Não a dou como o mundo a dá.",
      verseReference: "João 14:27 (NVI)",
      explanation: "A paz é o fruto da confiança em Deus. Ela não é ausência de luta, mas presença de calma mesmo quando há guerra. Quando o Espírito habita em nós, Ele silencia o medo e traz equilíbrio à mente.",
      application: "Ore antes de reagir. Respire antes de responder. A paz cresce onde o coração aprende a esperar em Deus, e não em si mesmo.",
    },
  ];

  const connectionGroupFruits = [
    {
      name: "Paciência",
      icon: "⏳",
      verse: "Sejam completamente humildes e dóceis, e sejam pacientes, suportando uns aos outros com amor.",
      verseReference: "Efésios 4:2 (NVI)",
      explanation: "A paciência é o tempo do amor em ação. Ela nos ensina a respeitar o ritmo do outro, a suportar sem reclamar e a esperar com fé o que Deus está construindo.",
      application: "Respire fundo diante da demora e lembre-se: o Espírito age no silêncio. Enquanto você espera, Ele trabalha — dentro e fora de você.",
    },
    {
      name: "Amabilidade",
      icon: "🤝",
      verse: "A resposta calma desvia a fúria, mas a palavra ríspida desperta a ira.",
      verseReference: "Provérbios 15:1 (NVI)",
      explanation: "A amabilidade é o tom suave da presença de Deus em nós. Ela é firme, mas nunca rude. É luz que acalma, voz que acolhe e gesto que cura.",
      application: "Trate cada pessoa como um campo fértil — uma palavra gentil pode ser a semente que muda o dia (ou a vida) de alguém.",
    },
    {
      name: "Bondade",
      icon: "💚",
      verse: "Façamos o bem a todos, especialmente aos da família da fé.",
      verseReference: "Gálatas 6:10 (NVI)",
      explanation: "A bondade é o amor em movimento. Não fala alto, não busca recompensa — apenas age, silenciosamente, espalhando o perfume do Espírito.",
      application: "Seja generoso quando ninguém estiver olhando. A bondade é o fruto que amadurece no secreto e exala o cheiro do Céu.",
    },
  ];

  const maturityGroupFruits = [
    {
      name: "Fidelidade",
      icon: "🛡️",
      verse: "Sê fiel até à morte, e eu te darei a coroa da vida.",
      verseReference: "Apocalipse 2:10 (NVI)",
      explanation: "A fidelidade é constância — permanecer mesmo quando tudo convida a desistir. É caminhar com Deus nos vales e nos montes, com o mesmo amor e devoção.",
      application: "Seja fiel nas pequenas coisas — nelas o Espírito te prova e te prepara para o muito. A fidelidade é o solo onde os outros frutos crescem.",
    },
    {
      name: "Mansidão",
      icon: "🌸",
      verse: "Aprendam de mim, pois sou manso e humilde de coração.",
      verseReference: "Mateus 11:29 (NVI)",
      explanation: "A mansidão é a força controlada pela graça. Não é fraqueza, é sabedoria. Quem é manso não precisa vencer pela voz — vence pela paz que carrega.",
      application: "Quando o mundo gritar, escolha o silêncio do Espírito. A mansidão é o tempero da sabedoria e o perfume da maturidade.",
    },
    {
      name: "Domínio Próprio",
      icon: "⚖️",
      verse: "Como a cidade com seus muros derrubados, assim é quem não sabe dominar-se.",
      verseReference: "Provérbios 25:28 (NVI)",
      explanation: "Domínio próprio é o fruto que governa os demais. É a disciplina do Espírito dentro de nós — o controle sobre palavras, impulsos e desejos. Sem ele, o jardim da alma se desorganiza.",
      application: "Antes de agir, pergunte: 'Isso reflete o Espírito que habita em mim?' Domínio próprio é liberdade verdadeira — a liberdade de ser guiado por Deus, não pelas emoções.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Decoração de folhas no fundo */}
      <LeafDecoration />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 gradient-divine relative overflow-hidden">
        {/* Logo no canto superior esquerdo */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
          <img 
            src={holyFruitLogo} 
            alt="Holy Fruit Logo" 
            className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Menu de navegação */}
        <Navigation />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <div className="text-7xl mb-8 animate-glow">🍋</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary text-balance">
            Os 9 Frutos do Espírito
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto text-balance">
            Aprenda e cultive as virtudes que florescem de um coração guiado por Deus.
          </p>
          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors animate-bounce"
            aria-label="Desça e descubra cada fruto"
          >
            <span className="text-lg">Desça e Descubra cada um!</span>
            <ChevronDown className="h-6 w-6" />
            <span className="text-2xl">🌿</span>
          </button>
        </div>
      </section>

      {/* Verse Section */}
      <section id="verse-section" className="py-24 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="bg-secondary/50 rounded-2xl p-12 shadow-lg border border-border/50">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground/90 leading-relaxed mb-4">
              "Mas o fruto do Espírito é: amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio."
            </blockquote>
            <cite className="text-lg text-muted-foreground not-italic">
              — Gálatas 5:22-23 (NVI)
            </cite>
          </div>
        </div>
      </section>

      {/* Divine Group */}
      <section id="divine-fruits" className="py-24 px-4 gradient-divine relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">🌤️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Frutos que nos ligam a Deus
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Essas virtudes florescem quando cultivamos intimidade com o Criador.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {divineGroupFruits.map((fruit) => (
              <FruitClickCard key={fruit.name} {...fruit} />
            ))}
          </div>
        </div>
      </section>

      {/* Connection Group */}
      <section id="connection-fruits" className="py-24 px-4 gradient-nature relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">🌿</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Frutos que nos conectam ao próximo
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Esses frutos brotam quando tratamos os outros com compaixão, empatia e paciência.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {connectionGroupFruits.map((fruit) => (
              <FruitClickCard key={fruit.name} {...fruit} />
            ))}
          </div>
        </div>
      </section>

      {/* Maturity Group */}
      <section id="maturity-fruits" className="py-24 px-4 gradient-peace relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">🌾</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Frutos que amadurecem dentro de nós
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Essas virtudes revelam o domínio e equilíbrio de uma vida transformada pelo Espírito Santo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {maturityGroupFruits.map((fruit) => (
              <FruitClickCard key={fruit.name} {...fruit} />
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section id="prayer-section" className="py-24 px-4 gradient-divine relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="text-6xl mb-6 animate-glow">🎁</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Presente do Espírito
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Cada fruto do Espírito é uma semente divina plantada dentro de nós. Quando a cultivamos, ela transforma nossa vida e o mundo ao redor. Receba esta oração como um presente espiritual.
            </p>
          </div>
          <PrayerDialog />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
