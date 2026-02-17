import { Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProcedures = () => {
    document.getElementById('procedures')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/WhatsApp_Image_2026-02-17_at_16.23.22.jpeg)',
        }}
      >
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Gradiente inferior suave */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#8BC34A]/80 via-[#A5D6A7]/50 to-transparent"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-serif mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            letterSpacing: '0.02em',
            color: '#FDF6F3',
            textShadow: '0px 4px 20px rgba(0,0,0,0.4)'
          }}
        >
          BIANCA MOURA
        </h1>

        <p
          className={`text-xl md:text-2xl mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.15em',
            color: '#FFFFFF',
            textShadow: '0px 3px 12px rgba(0,0,0,0.5)'
          }}
        >
          Lash Designer
        </p>

        <p
          className={`text-lg md:text-xl mb-12 max-w-2xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#FFFFFF',
            textShadow: '0px 3px 12px rgba(0,0,0,0.5)'
          }}
        >
          Beleza, técnica e elegância em cada olhar.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Botão Ver Procedimentos com degradê verde */}
          <button
            onClick={scrollToProcedures}
            className="px-8 py-4 bg-gradient-to-r from-[#66BB6A] via-[#81C784] to-[#A5D6A7] text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ver Procedimentos
          </button>

          {/* Botão Instagram */}
          <a
            href="https://www.instagram.com/bianca.cilioss?igsh=MW0yeWJ2Yjh5b2g4bw=="
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#C17B6C]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <Instagram size={20} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
