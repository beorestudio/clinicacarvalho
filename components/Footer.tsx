import React from 'react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
           <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="font-serif text-2xl">Clínica <span className="italic text-rose-light">Carvalho</span></h4>
            <p className="text-xs text-gray-500 mt-2">Dra. Carolina de Carvalho</p>
            <p className="text-xs text-gray-600">{CONTACT_INFO.cro}</p>
           </div>
           
           <div className="flex gap-8">
              {NAV_ITEMS.map(item => (
                  <a key={item.label} href={item.href} className="text-sm text-gray-400 hover:text-rose-light transition-colors">
                      {item.label}
                  </a>
              ))}
           </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Clínica Carvalho. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Design High-End</p>
        </div>
      </div>
    </footer>
  );
};