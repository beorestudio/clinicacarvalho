import React from 'react';
import { Sparkles, Smile, Stethoscope, CalendarCheck } from 'lucide-react';
import { Section } from './ui/Section';

const SERVICES = [
  {
    icon: Sparkles,
    title: "Odontologia Estética",
    description: "Lentes de contato dental, clareamento e restaurações estéticas para harmonizar seu sorriso."
  },
  {
    icon: Smile,
    title: "Implantes e Próteses",
    description: "Reabilitação oral completa com tecnologia de ponta para devolver sua função e autoestima."
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Prevenção, limpeza (profilaxia) e cuidados essenciais para manter sua saúde bucal em dia."
  },
  {
    icon: CalendarCheck,
    title: "Aluguel de Salas",
    description: "Espaço moderno e equipado disponível para locação por diária ou turno para profissionais de saúde."
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-offwhite">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-rose font-bold text-xs uppercase tracking-widest mb-2 block">Nossas Especialidades</span>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
          Cuidado integral para <br />
          <span className="italic">o seu sorriso</span>
        </h2>
        <p className="text-gray-600">
          Da estética à funcionalidade, oferecemos tratamentos completos com o que há de mais moderno na odontologia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx}
            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-soft hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose group-hover:text-white transition-colors duration-300 text-rose-dark">
              <service.icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-gray-900 mb-3">{service.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};