import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="mailto:contato@amanzilife.com.br" className="flex items-start gap-3 hover:text-white/70 transition-colors">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>contato@amanzilife.com.br</span>
              </a>
              <a href="tel:+5515996529535" className="flex items-start gap-3 hover:text-white/70 transition-colors">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>(15) 99652-9535</p>
                  <p className="text-sm text-white/70">Sorocaba - SP</p>
                </div>
              </a>
              <a href="tel:+5519999255131" className="flex items-start gap-3 hover:text-white/70 transition-colors">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>(19) 99925-5131</p>
                  <p className="text-sm text-white/70">Nova Odessa - SP</p>
                </div>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Endereço</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p>Av Jose Joaquim Seabra, 85</p>
                <p>Anexo 91 - Sala 05</p>
                <p>Jardim Ivana</p>
                <p>São Paulo (SP)</p>
                <p className="mt-2 text-white/70">CEP 05364-000</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">
          
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;