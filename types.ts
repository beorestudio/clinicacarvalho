import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isHighlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Paciente", "Paciente de Estética"
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}