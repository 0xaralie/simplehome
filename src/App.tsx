import { GlassCard } from './components/GlassCard';
import { GlassButton } from './components/GlassButton';
import { CountdownTimer } from './components/CountdownTimer';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
  const handleJoinCanva = () => {
    const encodedLink = "aHR0cHM6Ly93d3cuY2FudmEuY29tL2JyYW5kL2pvaW4/dG9rZW49VmFKYms1RUtNSi1GbENLX0dWc25WZyZyZWZlcnJlcj10ZWFtLWludml0ZQ==";
    const link = atob(encodedLink);
    window.open(link, "_blank");
  };

  const shareToWhatsApp = () => {
    const link = 'https://rains.web.id';
    const message = `Canva Pro ${link}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 text-center py-8">
        <div className="backdrop-blur-md bg-white/5 border-b border-white/10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent tracking-[0.15em] py-6">
            RAINS
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-6">
        <GlassCard className="text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Canva Pro Team
            </h2>
            
            <div className="space-y-4">
              <p className="text-xl text-white/90">
                Canva Pro akan berakhir dalam
              </p>
              
              <CountdownTimer />
              
              <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
                Akan selalu diperbarui saat masa berlakunya habis. Kembali ke sini jika kalian butuh lagi.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <GlassButton 
              onClick={handleJoinCanva}
              variant="primary"
              className="w-full sm:w-auto text-lg"
            >
              Join Canva Pro
            </GlassButton>
            
            <GlassButton 
              onClick={shareToWhatsApp}
              variant="secondary"
              className="w-full sm:w-auto text-lg"
            >
              Simpan ke WhatsApp
            </GlassButton>
          </div>
        </GlassCard>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 mt-16">
        <div className="backdrop-blur-md bg-white/5 border-t border-white/10 py-6">
          <p className="text-white/60">
            &copy; 2025 Rains. Made for fun.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;