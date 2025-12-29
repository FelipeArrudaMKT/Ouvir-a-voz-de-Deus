
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Eu não ouço vozes, isso é pra mim?",
      a: "Com certeza. Deus raramente fala com voz audível. Ele fala através da Sua Palavra, de pensamentos que Ele planta em nós e da paz que Ele nos dá. Nosso guia ensina justamente a perceber esses sinais sutis."
    },
    {
      q: "Preciso ser de alguma religião específica?",
      a: "Nossa base é bíblica e cristã, focada no relacionamento direto com o Criador. Acolhemos todos que buscam verdadeiramente uma conexão com o Pai."
    },
    {
      q: "Como recebo o conteúdo?",
      a: "O acesso é imediato. Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o guia e os áudios."
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia incondicional. Se sentir que o conteúdo não é para você, devolvemos seu dinheiro sem perguntas."
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-white text-center mb-12" data-aos="fade-up">
          Dúvidas <span className="text-amber-500">Comuns</span>
        </h2>
        
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-zinc-900 transition-colors"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen ? <ChevronUp className="text-amber-500" /> : <ChevronDown className="text-gray-500" />}
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-zinc-800/50">
          {answer}
        </div>
      </div>
    </div>
  );
};
