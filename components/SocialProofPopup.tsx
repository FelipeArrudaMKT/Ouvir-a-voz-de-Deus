
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const compras = [
  { nome: "Maria Aparecida Santos", cidade: "São Paulo - SP" },
  { nome: "José Carlos Oliveira", cidade: "Belo Horizonte - MG" },
  { nome: "Ana Lúcia Pereira", cidade: "Salvador - BA" },
  { nome: "João Batista Rodrigues", cidade: "Campinas - SP" },
  { nome: "Francisca das Dores Lima", cidade: "Fortaleza - CE" },
  { nome: "Antônio Marcos Ferreira", cidade: "Goiânia - GO" },
  { nome: "Rosa Maria Costa", cidade: "Rio de Janeiro - RJ" },
  { nome: "Paulo Roberto Alves", cidade: "Sorocaba - SP" },
  { nome: "Helena Cristina Ribeiro", cidade: "Curitiba - PR" },
  { nome: "Luiz Fernando Rocha", cidade: "Porto Alegre - RS" },
  { nome: "Sebastiana Nogueira Silva", cidade: "Juiz de Fora - MG" },
  { nome: "Carlos Eduardo Martins", cidade: "Ribeirão Preto - SP" },
  { nome: "Terezinha de Jesus Barros", cidade: "Natal - RN" },
  { nome: "Pedro Henrique Araújo", cidade: "São Luís - MA" },
  { nome: "Marta Regina Pacheco", cidade: "Uberlândia - MG" },
  { nome: "Raimundo Nonato Teixeira", cidade: "Teresina - PI" },
  { nome: "Sandra Maria Guedes", cidade: "São José dos Campos - SP" },
  { nome: "Francisco José Farias", cidade: "Aracaju - SE" },
  { nome: "Neusa Aparecida Cunha", cidade: "Bauru - SP" },
  { nome: "Roberto Luiz Macedo", cidade: "Niterói - RJ" }
];

export const SocialProofPopup: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cyclePopup = () => {
      const compra = compras[Math.floor(Math.random() * compras.length)];
      setCurrentText(`${compra.nome} (${compra.cidade}) acabou de adquirir o acesso`);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 5000);
    };

    // Primeira exibição após 4 segundos
    const firstTimeout = setTimeout(cyclePopup, 4000);

    // Ciclo a cada 12 segundos
    const interval = setInterval(cyclePopup, 12000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`social-popup ${show ? 'show' : ''}`}>
      <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
        <ShoppingBag className="w-5 h-5 text-black" />
      </div>
      <div className="flex flex-col">
        <p className="text-white text-sm font-bold leading-tight">{currentText}</p>
        <p className="text-amber-500 text-[10px] uppercase font-black tracking-widest mt-0.5">Verificado em tempo real</p>
      </div>
    </div>
  );
};
