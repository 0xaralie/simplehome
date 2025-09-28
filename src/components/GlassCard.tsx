import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`
      backdrop-blur-md bg-white/10 
      border border-white/20 
      rounded-3xl p-8 
      shadow-2xl shadow-black/10
      hover:bg-white/15 
      transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}