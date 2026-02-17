import { useState, useEffect, useRef } from "react";

interface Procedure {
  name: string;
  price: number;
  maintenancePrice: number;
  image: string;
}

const procedures: Procedure[] = [
  {
    name: "Volume Brasileiro",
    price: 165,
    maintenancePrice: 110,
    image: "/volume-brasileiro.jpeg",
  },
  {
    name: "Volume Fox",
    price: 165,
    maintenancePrice: 110,
    image: "/volume-fox.jpeg",
  },
  {
    name: "Volume Fox Marrom",
    price: 165,
    maintenancePrice: 110,
    image: "/volume-fox-marrom.jpeg",
  },
  {
    name: "Volume Express",
    price: 165,
    maintenancePrice: 110,
    image: "/volume-express.jpeg",
  },
  {
    name: "Volume Europeu",
    price: 165,
    maintenancePrice: 110,
    image: "/volume-europeu.jpeg",
  },
  {
    name: "Mega Volume",
    price: 180,
    maintenancePrice: 120,
    image: "/mega-volume.jpeg",
  },
];

const Procedures = () => {
  const [selectedProcedure, setSelectedProcedure] =
    useState<Procedure | null>(null);

  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(procedures.length).fill(false)
  );

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handlePagamento = () => {
    window.open("https://pag.ae/81vUL4Buv", "_blank");
    setSelectedProcedure(null);
  };

  return (
    <section className="py-20 px-6 bg-[#f4d7cd] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-14 text-[#7a4e45]">
        Nossos Procedimentos
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {procedures.map((procedure, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`group bg-[#fff5f0] border border-[#e8b8a8] rounded-3xl shadow-lg p-6 flex flex-col
            transition-all duration-700
            ${
              visibleCards[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
            hover:-translate-y-3 hover:shadow-2xl`}
          >
            <div className="overflow-hidden rounded-2xl mb-4">
              <img
                src={procedure.image}
                alt={procedure.name}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <h3 className="text-xl font-semibold text-[#7a4e45]">
              {procedure.name}
            </h3>

            <p className="text-lg mt-2 text-[#a85c52]">
              Aplicação: R$ {procedure.price.toFixed(2)}
            </p>

            <p className="text-md text-[#7a4e45]">
              Manutenção: R$ {procedure.maintenancePrice.toFixed(2)}
            </p>

            <div className="mt-auto">
              <button
                onClick={() => setSelectedProcedure(procedure)}
                className="w-full mt-6 py-3 rounded-2xl text-white font-semibold
                bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600
                shadow-md hover:shadow-2xl
                hover:scale-[1.03] hover:-translate-y-1 hover:brightness-110
                transition-all duration-300"
              >
                Agendar
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProcedure && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-2xl animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-6 text-[#7a4e45]">
              {selectedProcedure.name}
            </h3>

            <button
              onClick={handlePagamento}
              className="w-full mb-4 py-3 rounded-2xl text-white font-semibold
              bg-gradient-to-r from-green-500 to-emerald-600
              hover:scale-[1.02] hover:-translate-y-1 hover:brightness-110
              transition-all duration-300"
            >
              Aplicação – R$ {selectedProcedure.price.toFixed(2)}
            </button>

            <button
              onClick={handlePagamento}
              className="w-full py-3 rounded-2xl text-white font-semibold
              bg-gradient-to-r from-emerald-600 to-green-700
              hover:scale-[1.02] hover:-translate-y-1 hover:brightness-110
              transition-all duration-300"
            >
              Manutenção – R$ {selectedProcedure.maintenancePrice.toFixed(2)}
            </button>

            <button
              onClick={() => setSelectedProcedure(null)}
              className="mt-6 text-sm text-gray-500 w-full hover:text-gray-700 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Procedures;
