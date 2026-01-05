
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SocialProofPopup } from './components/SocialProofPopup';
import { Sparkles, Menu } from 'lucide-react';

declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Inicializa AOS com otimizações para mobile
    if (window.AOS) {
      const isMobile = window.innerWidth < 768;
      window.AOS.init({
        duration: isMobile ? 800 : 1200, // Mais rápido no mobile
        once: true,
        easing: 'ease-out-quad', // Easing mais leve
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: isMobile ? 60 : 120, // Menor offset no mobile
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-3 ${scrollY > 100 ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-2' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-amber-500 tracking-tighter text-xl">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black">C</div>
            <span className="hidden sm:inline">CONEXÃO DIVINA</span>
          </div>
          <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all transform active:scale-95 ${scrollY > 100 ? 'bg-amber-600 text-white hover:bg-amber-500 shadow-lg' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}
          >
            OUVIR O PAI
          </button>
        </div>
      </header>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[150px] rounded-full"></div>
      </div>

      <main className="relative z-10">
        <Hero />
        <PainPoints />
        <Solution />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
      
      {/* Social Proof Popup */}
      <SocialProofPopup />
      
      {/* Mobile Floating Button */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 md:hidden transition-all duration-500 ${scrollY > 500 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-4 bg-amber-600 text-white font-bold rounded-2xl shadow-[0_15px_40px_rgba(217,119,6,0.6)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <Sparkles className="w-5 h-5" />
          QUERO OUVIR A VOZ DE DEUS
        </button>
      </div>
    </div>
  );
};

export default App;
