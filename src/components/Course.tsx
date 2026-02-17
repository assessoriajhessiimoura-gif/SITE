import { useEffect, useRef, useState } from 'react';
import { Award, Clock, Users, BookOpen } from 'lucide-react';

export default function Course() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-[#D4A598]/70 via-[#C97D6F]/60 to-[#B87A6D]/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/WhatsApp_Image_2026-02-16_at_14.40.49.jpeg"
                alt="Curso de Extensão de Cílios"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <Award className="text-[#C17B6C]" size={48} />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2
              className="text-4xl md:text-5xl font-serif text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Curso de Extensão de Cílios
            </h2>
            <p
              className="text-lg text-white/95 mb-8 leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Aprenda a arte de transformar olhares com técnica, profissionalismo e elegância.
              Um curso completo que vai te preparar para dominar todas as técnicas de extensão
              de cílios fio a fio.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <Clock className="text-white flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Carga Horária Completa
                  </h4>
                  <p className="text-white/90 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Teoria e prática intensiva para domínio completo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <Users className="text-white flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Turmas Reduzidas
                  </h4>
                  <p className="text-white/90 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Atendimento personalizado e individual
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <BookOpen className="text-white flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Material Completo
                  </h4>
                  <p className="text-white/90 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Kit profissional incluído no curso
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5531991028853"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#C17B6C] font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Saiba Mais sobre o Curso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
