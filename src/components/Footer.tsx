import { Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#8B5E4D] to-[#6B4839] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl font-serif mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Bianca Moura
            </h3>
            <p
              className="text-white/90 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Lash Designer especializada em extensão de cílios fio a fio,
              oferecendo beleza, técnica e elegância.
            </p>
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5531991028853"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Phone size={18} />
                <span>(31) 99102-8853</span>
              </a>
              <a
                href="https://www.instagram.com/bianca.cilioss?igsh=MW0yeWJ2Yjh5b2g4bw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Instagram size={18} />
                <span>@bianca.cilioss</span>
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Localização
            </h4>
            <div className="flex items-start gap-2 text-white/90">
              <MapPin size={18} className="flex-shrink-0 mt-1" />
              <p style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Belo Horizonte, MG
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p
            className="text-white/80 text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            © 2026 Bianca Moura - Lash Designer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
