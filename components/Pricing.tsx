
import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Clock, BookmarkCheck, CreditCard, Landmark, Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  // LINK DE CHECKOUT SOLICITADO
  const checkoutUrl = "https://pay.kirvano.com/0a2474c3-3f6c-4a60-b36e-7ecbc8c12bf9?aff=d1909329-1b88-4646-824b-1fd3bec02d2a";
  
  const [timeLeft, setTimeLeft] = useState(894); // ~15 min

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="offer" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 border border-red-400 text-white rounded-2xl text-base font-black animate-pulse mb-8 shadow-lg shadow-red-900/50">
            <Clock className="w-5 h-5" />
            OFERTA EXCLUSIVA TERMINA EM: {formatTime(timeLeft)}
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">
            Sua Nova Vida <br />
            <span className="text-amber-400">Começa Aqui</span>
          </h2>
          <p className="text-gray-100 text-lg max-w-xl mx-auto leading-relaxed">Não deixe o barulho do mundo roubar a voz Daquele que mais te ama. Invista na sua eternidade hoje.</p>
        </div>

        <div 
          className="bg-zinc-900/90 border-4 border-amber-500 rounded-[3rem] overflow-hidden shadow-[0_0_120px_rgba(251,191,36,0.3)] backdrop-blur-xl"
          data-aos="flip-up"
        >
          <div className="bg-amber-500 py-4 px-6 text-center">
            <span className="text-black font-black tracking-[0.3em] text-sm uppercase">ACESSO IMEDIATO + BÔNUS EXCLUSIVOS</span>
          </div>

          <div className="p-8 md:p-14">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-white leading-tight">Você vai receber:</h3>
                <ul className="space-y-5">
                  {[
                    { t: "Guia 'A Frequência do Céu'", d: "O mapa para discernir pensamentos." },
                    { t: "3 Áudios de Meditação Guiada", d: "Práticas de silêncio e escuta." },
                    { t: "Checklist 'É Deus ou sou Eu?'", d: "Ferramenta de validação rápida." },
                    { t: "Bônus: Oração de Autoridade", d: "Para clareza em momentos críticos." },
                    { t: "Suporte via WhatsApp", d: "Nossa equipe caminha com você." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-100">
                      <div className="mt-1 p-1 bg-amber-500 rounded-full shadow-inner">
                        <Check className="w-4 h-4 text-black stroke-[4]" />
                      </div>
                      <div>
                        <p className="font-bold text-lg leading-none">{item.t}</p>
                        <p className="text-sm text-gray-400 mt-1">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:border-l-2 border-white/10 md:pl-12 space-y-8 py-6">
                <div className="space-y-2">
                  <p className="text-gray-500 line-through text-2xl font-bold">R$ 197,00</p>
                  <p className="text-amber-400 text-sm font-black uppercase tracking-[0.2em]">VALOR SIMBÓLICO HOJE:</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl text-white font-bold">R$</span>
                    <span className="text-8xl md:text-9xl text-white font-black tracking-tighter drop-shadow-2xl">47</span>
                    <span className="text-3xl text-gray-400 font-bold">,00</span>
                  </div>
                  <p className="text-gray-300 text-lg font-medium italic">em pagamento único</p>
                </div>

                <a 
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta w-full"
                >
                  QUERO OUVIR O PAI AGORA
                  <Sparkles className="w-6 h-6" />
                </a>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-center gap-6 text-gray-400">
                    <div className="flex flex-col items-center">
                      <CreditCard className="w-6 h-6 mb-1" />
                      <span className="text-[10px] font-bold">CARTÃO</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 flex items-center justify-center font-black border-2 border-gray-400 rounded-md text-[10px]">PIX</div>
                      <span className="text-[10px] font-bold">PIX</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-green-500 font-black text-sm uppercase tracking-widest">
                    <Shield className="w-5 h-5" />
                    Compra 100% Segura
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 glass rounded-[2rem] text-center border-amber-500/20" data-aos="fade-up" data-aos-delay="200">
            <Clock className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <p className="text-sm text-gray-100 font-black uppercase tracking-tighter leading-tight">Acesso Imediato <br /><span className="text-[10px] font-normal text-gray-400">No seu e-mail</span></p>
          </div>
          <div className="p-6 glass rounded-[2rem] text-center border-amber-500/20" data-aos="fade-up" data-aos-delay="400">
            <Shield className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <p className="text-sm text-gray-100 font-black uppercase tracking-tighter leading-tight">Risco Zero <br /><span className="text-[10px] font-normal text-gray-400">7 dias de garantia</span></p>
          </div>
          <div className="p-6 glass rounded-[2rem] text-center border-amber-500/20 col-span-2 md:col-span-1" data-aos="fade-up" data-aos-delay="600">
            <BookmarkCheck className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <p className="text-sm text-gray-100 font-black uppercase tracking-tighter leading-tight">Conteúdo Vitalício <br /><span className="text-[10px] font-normal text-gray-400">Estude no seu tempo</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};
