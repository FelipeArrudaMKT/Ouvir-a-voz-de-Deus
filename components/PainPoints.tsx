
import React from 'react';
import { CloudOff, HeartCrack, HelpCircle, MessageSquareOff } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const pains = [
    {
      icon: <MessageSquareOff className="w-8 h-8 text-amber-500" />,
      title: "O Silêncio que Dói",
      description: "Você ora, pede direção, mas parece que o céu está de bronze. O silêncio gera insegurança e medo de errar."
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-amber-500" />,
      title: "Dúvida Constant",
      description: "Será que esse pensamento é meu, de Deus, ou apenas uma vontade passageira? A falta de clareza rouba sua paz."
    },
    {
      icon: <HeartCrack className="w-8 h-8 text-amber-500" />,
      title: "Cansaço Espiritual",
      description: "Você tenta ser fiel, mas sente que falta aquela conexão íntima, aquele sussurro doce que guia cada passo."
    },
    {
      icon: <CloudOff className="w-8 h-8 text-amber-500" />,
      title: "Vidas em Suspenso",
      description: "Quantas decisões importantes você adiou ou tomou errado por não saber discernir a vontade do Criador?"
    }
  ];

  return (
    <section id="pain" className="py-24 px-4 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Você sente que está <span className="text-amber-500 italic">caminhando no escuro?</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Muitas vezes, a voz de Deus é um sussurro suave, mas o barulho da vida moderna nos impede de ouvir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div 
              key={index} 
              className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-amber-500/50 transition-colors group"
              data-aos="fade-up"
              data-aos-delay={isMobile ? "50" : index * 150} // Quase simultâneo ou muito rápido no mobile
            >
              <div className="mb-6 bg-amber-500/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{pain.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

        <div 
          className="mt-20 p-8 md:p-12 bg-gradient-to-br from-amber-900/20 to-zinc-900 rounded-3xl border border-amber-500/20 text-center space-y-6"
          data-aos="zoom-in"
          data-aos-offset={isMobile ? "50" : "120"}
        >
          <p className="text-2xl md:text-3xl font-serif italic text-gray-200">
            "Não foi no terremoto, não foi no vento forte... Deus falou com Elias num sussurro."
          </p>
          <p className="text-amber-500 font-semibold">— 1 Reis 19:12</p>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Se você se sente perdido, saiba que o Pai nunca parou de falar. Ele só quer que você aprenda a SINTONIZAR seu coração com a frequência da eternidade.
          </p>
        </div>
      </div>
    </section>
  );
};
