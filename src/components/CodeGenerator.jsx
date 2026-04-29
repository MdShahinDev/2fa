import { ShieldCheck, Code, ArrowRight, Copy, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import * as OTPAuth from 'otpauth';

export default function CodeGenerator() {
  const [secretKey, setSecretKey] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState('');
  const [counter, setCounter] = useState(0);

  // Validate Base32 string
  const isValidBase32 = (str) => {
    if (!str) return false;
    const cleanStr = str.replace(/\s+/g, '').toUpperCase();
    return /^[A-Z2-7]+=*$/.test(cleanStr);
  };

  // Handle Code Generation
  const handleGenerate = () => {
    setError('');
    const cleanKey = secretKey.replace(/\s+/g, '').toUpperCase();

    if (!cleanKey) {
      setError('Please enter a secret key.');
      return;
    }

    if (!isValidBase32(cleanKey)) {
      setError('Invalid format. Secret keys must be valid Base32 (A-Z, 2-7).');
      return;
    }

    try {
      let hotp = new OTPAuth.HOTP({
        issuer: 'KeyGen',
        label: 'User',
        algorithm: 'SHA1',
        digits: 6,
        counter: counter,
        secret: OTPAuth.Secret.fromBase32(cleanKey)
      });

      const code = hotp.generate();
      setGeneratedCode(code);
      setCounter(prev => prev + 1);
      setIsCopied(false);
    } catch (err) {
      setError('Failed to process secret key. Please check the input.');
      console.error(err);
    }
  };

  // Handle Copy
  const handleCopy = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="relative animate-in fade-in zoom-in-95 duration-700 delay-300 w-full">
      {/* Glow effect behind the card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-[32px] blur-2xl opacity-60 pointer-events-none"></div>

      <div className="relative bg-surface/80 border border-border/50 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
        <div className="space-y-8">
          {/* Input Area */}
          <div className="space-y-3">
            <label htmlFor="secret" className="text-sm font-medium text-text-muted flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Enter Secret Key
            </label>
            <input
              id="secret"
              type="text"
              value={secretKey}
              onChange={(e) => {
                setSecretKey(e.target.value);
                if (error) setError('');
              }}
              placeholder="e.g. PM7K WQBQ IHEW EGKC XHG6"
              className={`w-full bg-background/50 border rounded-2xl px-5 py-4 text-white placeholder:text-text-muted/30 focus:outline-none focus:ring-2 transition-all text-base shadow-inner ${error ? 'border-primary/50 focus:ring-primary/50 focus:border-primary' : 'border-border/50 focus:ring-primary/50 focus:border-primary'}`}
              autoComplete="off"
            />

            {/* Error Message Display */}
            <div className={`flex items-center gap-2 text-primary text-sm font-medium transition-all duration-300 overflow-hidden ${error ? 'opacity-100 h-6 mt-2' : 'opacity-0 h-0'}`}>
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Code className="w-5 h-5" />
            Generate Code
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Always Visible Code Display Area */}
          <div className="pt-6 border-t border-border/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-text-muted">Your Security Code</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1 bg-background/80 border border-primary/30 rounded-lg py-2 px-4 flex items-center justify-center shadow-inner h-12">
                <span className="text-xl sm:text-2xl font-mono font-bold tracking-[0.2em] text-white">
                  {generatedCode || '------'}
                </span>
              </div>

              <button
                onClick={handleCopy}
                disabled={!generatedCode}
                className={`p-2 sm:p-3 rounded-lg border transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed ${isCopied ? 'bg-secondary/20 border-secondary text-secondary focus:ring-secondary' : 'bg-surface hover:bg-white/5 border-border/50 text-text-muted hover:text-white focus:ring-primary cursor-pointer'}`}
                title="Copy to clipboard"
              >
                {isCopied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
