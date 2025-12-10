import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-offwhite">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50 to-transparent opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1 mb-6 border border-gold/30 rounded-full">
            <span className="text-xs font-bold tracking-widest text-gold uppercase">Referência em Odontologia</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 mb-8">
            A arte de criar <br />
            <span className="text-rose italic">sorrisos únicos</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg font-sans">
            Experiência premium em odontologia estética e funcional com a Dra. Carolina de Carvalho. 
            Tecnologia de ponta e acolhimento em cada detalhe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={CONTACT_INFO.whatsappLink} icon>
              Agende sua Consulta
            </Button>
            <Button href="#about" variant="outline">
              Conheça a Clínica
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 text-gray-500">
            <div>
              <p className="font-serif text-3xl text-gray-800">10+</p>
              <p className="text-xs uppercase tracking-wider">Anos de experiência</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="font-serif text-3xl text-gray-800">5k+</p>
              <p className="text-xs uppercase tracking-wider">Sorrisos transformados</p>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Main Image Container with Organic Shape */}
          <div className="relative z-10 rounded-[2rem] md:rounded-[4rem] rounded-tr-[8rem] overflow-hidden shadow-2xl">
            <div className="aspect-[4/5] bg-gray-200 relative">
               {/* Using a placeholder of a professional dentist */}
               <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Dra. Carolina de Carvalho" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-[240px]"
            >
              <div className="flex items-start gap-3">
                <span className="text-gold text-2xl">★</span>
                <div>
                  <p className="font-serif font-bold text-gray-900 mb-1">Espaço para Profissionais</p>
                  <p className="text-xs text-gray-600 leading-tight">Conheça nosso aluguel de salas</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Background Decorative Blob */}
          <div className="absolute -top-12 -right-12 w-full h-full border-2 border-rose/20 rounded-[4rem] rounded-bl-[8rem] -z-10" />
        </motion.div>

      </div>
    </section>
  );
};