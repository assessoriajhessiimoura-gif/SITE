import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Amanda Silva',
    text: 'Gente, eu AMO demais o trabalho da Bianca! Os cílios ficam perfeitos, naturais e duram bastante. Ela é super caprichosa e o ambiente é uma delícia. Já sou cliente fiel!'
  },
  {
    name: 'Juliana Costa',
    text: 'Melhor investimento que já fiz! Acordo linda todos os dias e nem preciso de máscara. A Bianca é muito atenciosa e explica tudo direitinho. Super recomendo!'
  },
  {
    name: 'Camila Rodrigues',
    text: 'Sempre tive medo de fazer extensão, mas a Bianca me deixou super tranquila. O resultado ficou incrível! Parece que nasci com esses cílios, tá tudo muito natural e lindo.'
  },
  {
    name: 'Mariana Pereira',
    text: 'A qualidade do trabalho é impecável! Meus cílios duram meses e continuam lindos. A Bianca é muito profissional e dedicada. Voltarei sempre!'
  },
  {
    name: 'Fernanda Oliveira',
    text: 'Fiz o curso e aprendir tudo que preciso! A Bianca ensina com paciência e detalhe. Já estou aplicando em minhas clientes e os resultados falam por si.'
  },
  {
    name: 'Patricia Mendes',
    text: 'Não tenho palavras para descrever! Meus cílios ficaram incríveis e naturais. Já recomendei para todas as minhas amigas. Bianca, você é top demais!'
  }
];

export default function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<boolean[]>(new Array(testimonials.length).fill(false));
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = testimonialRefs.current.map((testimonial, index) => {
      if (!testimonial) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleTestimonials(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(testimonial);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F5E6E0] to-[#E8D5CE]">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-serif text-center text-[#8B5E4D] mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
        >
          O que minhas clientes dizem
        </h2>
        <p
          className="text-center text-[#A67C6D] mb-12 text-lg"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Experiências reais de quem confia no meu trabalho
        </p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={el => testimonialRefs.current[index] = el}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                visibleTestimonials[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3
                className="text-xl font-semibold text-[#8B5E4D] mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {testimonial.name}
              </h3>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#F5C542] fill-[#F5C542]" size={20} />
                ))}
              </div>

              <p
                className="text-[#A67C6D] leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
