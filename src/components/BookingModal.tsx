import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  procedureName: string;
  applicationPrice: number;
  maintenancePrice: number;
}

export default function BookingModal({
  isOpen,
  onClose,
  procedureName,
  applicationPrice,
  maintenancePrice
}: BookingModalProps) {
  if (!isOpen) return null;

  const handleBooking = (type: 'application' | 'maintenance') => {
    window.open('https://pag.ae/81vUL4Buv', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-[#F5E6E0] to-[#E8D5CE] rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/50 transition-colors"
        >
          <X size={24} className="text-[#8B5E4D]" />
        </button>

        <h3 className="text-2xl font-semibold text-[#8B5E4D] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {procedureName}
        </h3>
        <p className="text-[#A67C6D] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Escolha o tipo de serviço:
        </p>

        <div className="space-y-4">
          <button
            onClick={() => handleBooking('application')}
            className="w-full p-6 bg-gradient-to-r from-[#C17B6C] to-[#D4967E] text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-left">
              <p className="text-lg font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Aplicação Completa
              </p>
              <p className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                R$ {applicationPrice.toFixed(2)}
              </p>
            </div>
          </button>

          <button
            onClick={() => handleBooking('maintenance')}
            className="w-full p-6 bg-gradient-to-r from-[#C17B6C] to-[#D4967E] text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-left">
              <p className="text-lg font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Manutenção
              </p>
              <p className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                R$ {maintenancePrice.toFixed(2)}
              </p>
            </div>
          </button>
        </div>

        <p className="text-sm text-[#A67C6D] mt-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Você será redirecionada para finalizar o pagamento
        </p>
      </div>
    </div>
  );
}
