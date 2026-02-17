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
    image: '/volume-brasileiro.jpeg'
  },
  {
    name: 'Volume Fox',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/volume-fox.jpeg'
  },
  {
    name: 'Volume Fox Marrom',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/volume-fox-marrom.jpeg'
  },
  {
    name: 'Volume Express',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/volume-express.jpeg'
  },
  {
    name: 'Volume Europeu',
    price: 165.00,
    maintenancePrice: 110.00,
    image: '/volume-europeu.jpeg'
  },
  {
    name: 'Mega Volume',
    price: 180.00,
    maintenancePrice: 120.00,
    image: '/mega-volume.jpeg'
  },
];

const Procedures = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Nossos Procedimentos
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {procedures.map((procedure, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-4">
            <img
              src={procedure.image}
              alt={procedure.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">
              {procedure.name}
            </h3>
            <p>Aplicação: R$ {procedure.price.toFixed(2)}</p>
            <p>Manutenção: R$ {procedure.maintenancePrice.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Procedures;
