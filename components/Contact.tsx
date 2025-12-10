import React from 'react';
import { MapPin, Phone, Instagram, Clock, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-gold font-bold text-xs uppercase tracking-widest mb-2 block">Fale Conosco</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              Estamos esperando <br />
              por <span className="text-rose-light italic">você.</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-md">
              Agende sua avaliação ou venha conhecer nosso espaço de locação.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-rose/20 p-3 rounded-full text-rose-light">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Localização</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="bg-rose/20 p-3 rounded-full text-rose-light">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Contato</h3>
                  <p className="text-gray-400 text-sm">{CONTACT_INFO.phone}</p>
                  <a href="mailto:contato@clinicacarvalho.com.br" className="text-gold text-sm hover:underline">contato@clinicacarvalho.com.br</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                 <div className="bg-rose/20 p-3 rounded-full text-rose-light">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-400 text-sm">Segunda a Sexta: 08h às 18h</p>
                  <p className="text-gray-500 text-xs mt-1">Sábados: Sob agendamento</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Button href={CONTACT_INFO.whatsappLink} variant="primary" className="!bg-rose-light hover:!bg-rose">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
              </Button>
               <Button href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} variant="outline" className="!border-gray-700 !text-gray-300 hover:!bg-gray-800 hover:!text-white">
                <Instagram className="w-4 h-4 mr-2" /> Instagram
              </Button>
            </div>
          </div>

          {/* Map/Image Side */}
          <div className="h-full min-h-[400px] relative rounded-3xl overflow-hidden border border-gray-800">
             {/* Using a placeholder for the interior/map view */}
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop" 
              alt="Recepção Clínica Carvalho" 
              className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
                    <h3 className="font-serif text-xl text-white">Clínica Carvalho</h3>
                    <p className="text-xs text-gray-400">Conforto e sofisticação em Itabirito.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};