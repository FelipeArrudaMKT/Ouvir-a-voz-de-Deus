
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-zinc-800 bg-black text-center text-gray-500 text-sm">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-center items-center gap-2 text-amber-500 font-display font-bold text-xl tracking-widest mb-4">
          CONEXÃO <span className="text-white">DIVINA</span>
        </div>
        
        <p className="max-w-2xl mx-auto leading-relaxed">
          Este site não faz parte do Facebook ou Google. Além disso, este site NÃO é endossado pelo Facebook ou Google de forma alguma. Os resultados variam de pessoa para pessoa e dependem da sua fé e prática.
        </p>

        <div className="pt-6 flex flex-wrap justify-center gap-8 border-t border-zinc-900 mt-6">
          <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Contato</a>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 opacity-50">
          Feito com <Heart className="w-3 h-3 text-red-500 fill-red-500" /> para corações que buscam a verdade.
        </div>
        
        <p className="text-xs pt-4">© 2024 Conexão Divina - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
