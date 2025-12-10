import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

const HIGHLIGHTS = [
  "Equipamentos de Última Geração",
  "Ambiente Sofisticado e Acolhedor",
  "CRO/MG 55.454",
  "Localização Privilegiada"
];

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Grid */}
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
              alt="Consultório Moderno" 
              className="rounded-2xl shadow-lg mt-12 w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2148&auto=format&fit=crop" 
              alt="Tecnologia Odontológica" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-rose/10 rounded-full blur-xl -z-10" />
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2">
          <span className="text-rose font-bold text-xs uppercase tracking-widest mb-2 block">Sobre a Clínica</span>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Excelência e dedicação <br />
            na <span className="text-rose italic">odontologia moderna</span>.
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Localizada em Itabirito, a <strong>Clínica Carvalho</strong> é liderada pela Dra. Carolina de Carvalho. 
            Nosso espaço foi meticulosamente projetado para oferecer o máximo de conforto, aliando tecnologia de ponta 
            (como Scanners Intraorais e Impressão 3D) a um atendimento profundamente humano e personalizado.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Acreditamos que um sorriso saudável é a base para a autoconfiança. Por isso, cada tratamento é planejado 
            de forma única, respeitando as características e desejos de cada paciente.
          </p>

           {/* Rental Badge/Callout */}
           <div className="bg-rose-50 border border-rose/10 rounded-xl p-6 mb-8">
            <h3 className="font-serif text-lg text-gray-900 mb-2">Para Profissionais da Saúde</h3>
            <p className="text-sm text-gray-600 mb-3">
              Além dos tratamentos, oferecemos uma estrutura completa e sofisticada através do nosso sistema de <strong>Aluguel de Salas</strong> por diária ou turno.
            </p>
            <a href="#contact" className="text-rose font-bold text-xs uppercase tracking-wide hover:underline">Saiba Mais →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};