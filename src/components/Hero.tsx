import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background vibrante */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/WhatsApp_Image_2026-02-17_at_16.23.22.jpeg)" }}
        />
        <div className="absolute inset-0 pointer-events-none bg-black/25" />
        {/* degradê vibrante animado */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #FF416C, #FF4B2B, #FF6B00, #FF8C42)",
            backgroundSize: "400% 400%",
            animation: "gradientMove 15s ease infinite",
            mixBlendMode: "overlay",
          }}
        />
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
            color: "#FFFFFF",
            textShadow: "0px 4px 25px rgba(0,0,0,0.6)",
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
            textShadow: "0px 3px 15px rgba(0,0,0,0.5)",
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
            textShadow: "0px 3px 15px rgba(0,0,0,0.5)",
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
            className="px-8 py-4 text-white font-bold rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:brightness-125"
            style={{
              fontFamily: "Montserrat, sans-serif",
              background: "linear-gradient(135deg,#FF416C,#FF4B2B)",
            }}
          >
            Ver Procedimentos
          </a>

          {/* Botão Curso */}
          <a
            href="#curso"
            className="px-8 py-4 text-white font-bold rounded-full shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:brightness-125"
            style={{
              fontFamily: "Montserrat, sans-serif",
              background: "linear-gradient(135deg,#FF6B00,#FF8C42)",
            }}
          >
            Ver Curso
          </a>
        </div>
      </div>

      {/* Animar gradiente */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
