export const LeafDecoration = () => {
  return (
    <>
      {/* Folhas decorativas flutuantes */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Folha 1 - Topo Esquerdo */}
        <div className="absolute -top-10 -left-10 text-9xl text-nature/10 animate-float-slow rotate-45">
          🍃
        </div>
        
        {/* Folha 2 - Topo Direito */}
        <div className="absolute top-20 -right-16 text-8xl text-nature/15 animate-float-medium -rotate-12">
          🌿
        </div>
        
        {/* Folha 3 - Meio Esquerdo */}
        <div className="absolute top-1/3 -left-12 text-7xl text-nature/10 animate-float-slow rotate-90">
          🍂
        </div>
        
        {/* Folha 4 - Meio Direito */}
        <div className="absolute top-1/2 -right-10 text-9xl text-nature/10 animate-float-medium -rotate-45">
          🌱
        </div>
        
        {/* Folha 5 - Baixo Esquerdo */}
        <div className="absolute bottom-32 -left-14 text-8xl text-nature/15 animate-float-slow -rotate-12">
          🍃
        </div>
        
        {/* Folha 6 - Baixo Direito */}
        <div className="absolute bottom-20 -right-12 text-7xl text-nature/10 animate-float-medium rotate-45">
          🌿
        </div>

        {/* Folhas pequenas adicionais */}
        <div className="absolute top-2/3 left-1/4 text-5xl text-nature/10 animate-float-slow rotate-12">
          🍂
        </div>
        
        <div className="absolute top-1/4 right-1/3 text-6xl text-nature/10 animate-float-medium -rotate-90">
          🌱
        </div>
      </div>
    </>
  );
};
