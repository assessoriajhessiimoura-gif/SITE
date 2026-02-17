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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/WhatsApp_Image_2026-02-17_at_16.23.22.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8A598] via-[#E8A598]/60 to-transparent"
             style={{ backgroundPosition: 'bottom', height: '60%', bottom: 0, top: 'auto' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-serif mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            letterSpacing: '0.02em',
            color: '#8B5E4D',
            textShadow: '1px 2px 8px rgba(255,255,255,0.2)'
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
            fontWeight: 400,
            letterSpacing: '0.15em',
            color: '#F5F5F5',
            textShadow: '1px 2px 8px rgba(0,0,0,0.3)'
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
            fontWeight: 400,
            color: '#F5F5F5',
            textShadow: '1px 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Beleza, técnica e elegância em cada olhar.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <button
            onClick={scrollToProcedures}
            className="px-8 py-4 bg-gradient-to-r from-[#C17B6C] to-[#D4967E] text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ver Procedimentos
          </button>

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
