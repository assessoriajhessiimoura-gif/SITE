import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/WhatsApp_Image_2026-02-17_at_16.23.22.jpeg)",
        }}
      >
        {/* sombra */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(60,30,25,0.28)" }}
        ></div>

        {/* degradê rosé */}
        <div
          className="absolute inset-x-0 bottom-0 h-[75%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(219,139,128,0.95) 0%, rgba(235,167,156,0.65) 45%, rgba(248,190,180,0.35) 70%, rgba(255,255,255,0) 100%)",
          }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-serif mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "#FDF6F3",
            textShadow: "0px 4px 20px rgba(0,0,0,0.4)"
          }}
        >
          BIANCA MOURA
        </h1>

        <p
          className={`text-xl md:text-2xl mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "0.15em",
            color: "#FFFFFF",
            textShadow: "0px 3px 12px rgba(0,0,0,0.5)"
          }}
        >
          Lash Designer
        </p>

        <p
          className={`text-lg md:text-xl mb-12 max-w-2xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#FFFFFF",
            textShadow: "0px 3px 12px rgba(0,0,0,0.5)"
          }}
        >
          Beleza, técnica e elegância em cada olhar.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Botão Procedimentos */}
          <a
            href="#procedures"
            className="px-8 py-4 text-white font-medium rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:brightness-110"
            style={{
              fontFamily: "Montserrat, sans-serif",
              background: "linear-gradient(135deg,#FF6C85,#FF8E72)", // degradê suave
              backgroundSize: "200% 200%",
              animation: "gradientShift 6s ease infinite",
            }}
          >
            Ver Procedimentos
          </a>

          {/* Botão Curso */}
          <a
            href="#course" // id correto da seção de cursos
            className="px-8 py-4 text-white font-medium rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:brightness-110"
            style={{
              fontFamily: "Montserrat, sans-serif",
              background: "linear-gradient(135deg,#FFB072,#FF8E9D)", // degradê suave
              backgroundSize: "200% 200%",
              animation: "gradientShift 6s ease infinite",
            }}
          >
            Ver Curso
          </a>
        </div>
      </div>

      {/* Gradiente animado dos botões */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
