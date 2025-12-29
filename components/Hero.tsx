
import React from 'react';
import { ChevronDown, Star, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black/40 border border-amber-500/50 text-amber-400 text-xs uppercase tracking-[0.2em] font-bold animate-pulse backdrop-blur-md" data-aos="zoom-in" data-aos-delay="200">
          <Star className="w-3 h-3 fill-amber-400" />
          O Segredo Revelado do Discernimento
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] text-white text-shadow-gold" data-aos="fade-up" data-aos-delay="400">
          Sinta a Presença. <br />
          <span className="text-amber-400 italic">Ouça a Voz.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-100 font-serif italic max-w-3xl mx-auto leading-relaxed drop-shadow-md" data-aos="fade-up" data-aos-delay="600">
          "Aprenda a silenciar o ruído do mundo e sintonize seu coração com a paz que excede todo o entendimento."
        </p>

        <div className="pt-8 flex flex-col items-center gap-6" data-aos="fade-up" data-aos-delay="800">
          <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta"
          >
            SIM, QUERO CONVERSAR COM O PAI
            <Sparkles className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2 text-gray-200 text-sm font-medium bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            Método 100% Bíblico e Prático
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('pain')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown className="w-10 h-10 text-white/50" />
      </div>
    </section>
  );
};
