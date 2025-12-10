import React from 'react';
import { Section } from './ui/Section';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    text: "A Dra. Carolina é excelente! O consultório é lindo, super aconchegante e o atendimento é impecável.",
    author: "Mariana Silva",
    role: "Paciente",
    initial: "M"
  },
  {
    text: "Fiz meu clareamento na Clínica Carvalho e o resultado ficou incrível. Recomendo de olhos fechados.",
    author: "Ricardo Gomes",
    role: "Paciente",
    initial: "R"
  },
  {
    text: "Ótima localização em Itabirito e estrutura de primeira. Profissionais muito atenciosos.",
    author: "Fernanda Dias",
    role: "Paciente",
    initial: "F"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-gradient-to-b from-white to-rose-50/30">
       <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-gray-900 mb-4">Histórias Reais</h2>
        <p className="text-xs tracking-widest uppercase text-gray-500">A satisfação de quem confia em nosso trabalho</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
            <Quote className="absolute top-8 right-8 text-rose-100 w-10 h-10 fill-current" />
            
            <div className="flex gap-1 mb-6 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
              "{review.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-dark font-serif font-bold">
                {review.initial}
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-gray-900">{review.author}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};