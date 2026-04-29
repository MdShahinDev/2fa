import { Check, LockKeyhole, Shield } from "lucide-react";
import CodeGenerator from "./CodeGenerator";
export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/70 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <p
              className="flex items-center gap-2 cursor-pointer group shrink-0"
            >
              <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-text group-hover:text-white transition-colors duration-300">
                KeyGen<span className="text-primary">.</span>
              </span>
            </p>

            {/* Desktop Actions */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="mailto:hello.shahinofficial@gmail.com"
                className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden py-20">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Text & Security Info */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wide backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <LockKeyhole className="w-4 h-4" />
            Military-Grade Encryption
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Unbreakable <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              2FA Security.
            </span>
          </h1>
          
          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Your data is completely safe with us. We utilize industry-leading, high-standard encryption protocols to ensure that your secret keys and generated codes remain fundamentally secure and private.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <div className="flex items-center gap-3 text-text-muted bg-surface/50 px-4 py-2 rounded-xl border border-border/30">
              <Check className="w-5 h-5 text-secondary" />
              <span className="font-medium">Zero-knowledge</span>
            </div>
            <div className="flex items-center gap-3 text-text-muted bg-surface/50 px-4 py-2 rounded-xl border border-border/30">
              <Check className="w-5 h-5 text-secondary" />
              <span className="font-medium">Instant Generation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Generator Component */}
        <CodeGenerator />

      </div>
    </main>
    </>
  );
}
