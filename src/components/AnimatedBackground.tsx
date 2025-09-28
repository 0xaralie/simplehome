export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-800" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500/25 rounded-full blur-3xl animate-pulse delay-2000" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}