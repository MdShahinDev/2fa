import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/70 border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <p className="flex items-center gap-2 cursor-pointer group shrink-0">
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
    </>
  );
}
