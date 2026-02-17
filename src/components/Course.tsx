import { useEffect, useRef, useState } from 'react';
import { Award, Clock, Users, BookOpen, CheckCircle } from 'lucide-react';

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
      className="py-20 px-4 bg-gradient-to-br from-[#F5E6E0] via-[#E8D5CE] to-[#F3D7CC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Imagem do curso */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/WhatsApp_Image_2026-02-16_at_12.53.19_(1).jpeg"
                alt="Curso de Extensão de Cílios"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-white/40">
              <Award className="text-[#C17B6C]" size={48} />
            </div>
          </div>

          {/* Texto e informações do curso */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2
              className="text-4xl md:text-5xl font-serif text-[#7a4e45] mb-6 drop-shadow-sm"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Curso de Extensão de Cílios
            </h2>

            <div className="space-y-6 mb-8">
              {/* Benefícios */}
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { icon: CheckCircle, title: 'Certificado Reconhecido', desc: 'Certificação profissional reconhecida pelo mercado' },
                  { icon: Users, title: 'Curso VIP', desc: 'Turmas reduzidas e atendimento personalizado' },
                  { icon: Clock, title: 'Suporte Completo', desc: 'Acompanhamento durante o curso' },
                  { icon: Award, title: 'Suporte Pós-Curso', desc: 'Dúvidas e orientações após concluir' },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 transition-all hover:scale-[1.02] duration-300"
                  >
                    <benefit.icon className="text-[#C17B6C] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="text-[#8B5E4D] font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {benefit.title}
                      </h4>
                      <p className="text-[#7a4e45] text-sm opacity-90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* O que você vai aprender */}
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-[#8B5E4D] mb-4">O que você vai aprender</h3>
                <ul className="list-disc list-inside text-[#7a4e45] space-y-2">
                  <li>Técnicas de alongamento e fios tecnológicos</li>
                  <li>Alinhamento e direcionamento dos cílios</li>
                  <li>Cuidados e manutenção</li>
                  <li>Lista de materiais (materiais a parte)</li>
                </ul>
              </div>

              {/* Valores destacados */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex-1 bg-[#FCE6DC]/90 backdrop-blur-md rounded-2xl p-4 text-center border border-[#F5D3C2]">
                  <p className="text-lg font-semibold text-[#8B5E4D]">1 Dia</p>
                  <p className="text-2xl font-bold text-[#7a4e45]">R$ 650,00</p>
                </div>
                <div className="flex-1 bg-[#FCE6DC]/90 backdrop-blur-md rounded-2xl p-4 text-center border border-[#F5D3C2]">
                  <p className="text-lg font-semibold text-[#8B5E4D]">2 Dias</p>
                  <p className="text-2xl font-bold text-[#7a4e45]">R$ 850,00</p>
                </div>
              </div>

              {/* Botão Quero me inscrever */}
              <a
                href="https://wa.me/5531991028853?text=Oi quero informações sobre o curso de extensão de cílios!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-[#C97D6F] to-[#C17B6C] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Quero me inscrever
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
