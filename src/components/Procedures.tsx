import { useState, useEffect, useRef } from 'react';
import BookingModal from './BookingModal';

interface Procedure {
  name: string;
  price: number;
  maintenancePrice: number;
  image: string;
}

const procedures: Procedure[] = [
  {
    name: 'Volume Brasileiro',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/WhatsApp_Image_2026-02-16_at_12.14.05.jpeg'
  },
  {
    name: 'Volume Fox',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/WhatsApp_Image_2026-02-16_at_12.14.06_(1).jpeg'
  },
  {
    name: 'Volume Fox Marrom',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/WhatsApp_Image_2026-02-16_at_14.40.49.jpeg'
  },
  {
    name: 'Volume Express',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/WhatsApp_Image_2026-02-16_at_14.40.49_(1).jpeg'
  },
  {
    name: 'Volume Europeu',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/WhatsApp_Image_2026-02-16_at_12.14.05.jpeg'
  },
  {
    name: 'Mega Volume',
    price: 180.00,
    maintenancePrice: 120.00,
    image: '/WhatsApp_Image_2026-02-16_at_12.14.06_(1).jpeg'
  },
];

export default function Procedures() {
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(procedures.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <>
      <section id="procedures" className="py-20 px-4 bg-gradient-to-br from-[#F5E6E0] to-[#E8D5CE]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-serif text-center text-[#8B5E4D] mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Procedimentos
          </h2>
          <p
            className="text-center text-[#A67C6D] mb-12 text-lg"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Escolha o volume perfeito para você
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-[#E8A598] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={procedure.image}
                    alt={procedure.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-semibold text-[#8B5E4D] mb-3"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {procedure.name}
                  </h3>
                  <p
                    className="text-3xl font-bold text-[#C17B6C] mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    R$ {procedure.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => setSelectedProcedure(procedure)}
                    className="w-full py-3 bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProcedure && (
        <BookingModal
          isOpen={!!selectedProcedure}
          onClose={() => setSelectedProcedure(null)}
          procedureName={selectedProcedure.name}
          applicationPrice={selectedProcedure.price}
          maintenancePrice={selectedProcedure.maintenancePrice}
        />
      )}
    </>
  );
}
