interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function GlassButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: GlassButtonProps) {
  const baseClasses = `
    backdrop-blur-md border rounded-full px-8 py-4 font-medium
    transition-all duration-300 cursor-pointer
    hover:scale-105 active:scale-95
    shadow-lg hover:shadow-2xl
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-cyan-500/30 to-blue-600/30
      border-white/30 text-white
      hover:from-cyan-400/40 hover:to-blue-500/40
      hover:border-white/50
    `,
    secondary: `
      bg-white/10 border-white/20 text-white
      hover:bg-white/20 hover:border-white/40
    `
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}