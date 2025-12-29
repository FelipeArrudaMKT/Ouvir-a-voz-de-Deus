
import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Dona Maria Helena, 68 anos",
      text: "Eu sempre achei que Deus só falava com pastores. Depois que aprendi a ouvir na simplicidade, minha oração mudou. Hoje sinto uma paz que nunca tive antes.",
      image: "https://picsum.photos/seed/oldwoman1/100/100"
    },
    {
      name: "Seu Joaquim, 74 anos",
      text: "Estava angustiado com uma decisão familiar. Através desse discernimento, consegui enxergar o caminho certo com tranquilidade. Foi um bálsamo para minha alma cansada.",
      image: "https://picsum.photos/seed/oldman1/100/100"
    },
    {
      name: "Sra. Carmen, 62 anos",
      text: "Muitas vezes o medo me paralisava. Aprender a discernir a voz do Pai me deu coragem para viver meus últimos anos com muito mais alegria e propósito.",
      image: "https://picsum.photos/seed/oldwoman2/100/100"
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Vidas <span className="text-amber-500">Transformadas</span> pela Escuta
          </h2>
          <p className="text-gray-400">Pessoas reais que encontraram o caminho da paz.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div 
              key={i} 
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl relative flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-amber-500/10" />
              <img src={rev.image} alt={rev.name} className="w-20 h-20 rounded-full border-2 border-amber-500 p-1 mb-6 object-cover" />
              <p className="text-gray-300 font-serif italic mb-6 leading-relaxed">
                "{rev.text}"
              </p>
              <div className="mt-auto">
                <p className="text-white font-bold">{rev.name}</p>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-500 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
