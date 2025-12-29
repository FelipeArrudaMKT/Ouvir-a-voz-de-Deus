
import React from 'react';
import { CheckCircle, ShieldCheck, Sun, Compass } from 'lucide-react';

export const Solution: React.FC = () => {
  const steps = [
    {
      title: "O Filtro da Verdade",
      text: "Aprenda as 3 chaves fundamentais para saber se uma direção vem de Deus ou da sua própria imaginação.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Paz como Bússola",
      text: "Descubra como o 'sentimento de paz' funciona na prática e como ele confirma os planos do Pai.",
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: "Intimidade Prática",
      text: "Exercícios simples de silêncio e escuta que você pode fazer enquanto toma seu café ou caminha.",
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: "Discernimento em Decisões",
      text: "Como aplicar a orientação divina em finanças, família e propósito de vida sem fanatismo.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative" data-aos="fade-right">
          <img 
            src="https://picsum.photos/seed/divine/800/1000" 
            alt="Pessoa em contemplação" 
            className="rounded-3xl shadow-2xl border border-white/10 brightness-75 transition-all duration-700 hover:brightness-100"
          />
          <div className="absolute -bottom-6 -right-6 p-6 bg-zinc-900 border border-amber-500/30 rounded-2xl shadow-xl max-w-xs animate-float">
            <p className="text-amber-500 font-bold mb-2">Simples e Acessível</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Não é preciso ser um teólogo. O Evangelho é simples e a voz de Deus é para todos os Seus filhos.
            </p>
          </div>
        </div>

        <div className="space-y-10" data-aos="fade-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              O Caminho para uma <br />
              <span className="text-amber-500">Vida Guiada pelo Alto</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Nosso guia digital foi desenhado para quem busca profundidade espiritual sem as amarras da religiosidade fria. É sobre relacionamento, não sobre rituais.
            </p>
          </div>

          <div className="grid gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
             onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
             className="cta"
             data-aos="zoom-in"
             data-aos-delay="500"
          >
            QUERO COMEÇAR MINHA JORNADA
          </button>
        </div>
      </div>
    </section>
  );
};
