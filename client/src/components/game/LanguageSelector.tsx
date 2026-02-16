import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage, LANGUAGES, type LanguageCode } from "../../lib/stores/useLanguage";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === language);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg water-card text-[var(--parchment)] hover:bg-[var(--cerulean)]/30 border border-[var(--aqua)]/30 transition-colors text-sm"
        title="Change Language"
      >
        <Globe size={15} className="text-[var(--aqua)]" />
        <span className="hidden sm:inline">{currentLang?.nativeName}</span>
        <span className="sm:hidden">{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 z-50 w-48 rounded-lg overflow-hidden shadow-xl border border-[var(--aqua)]/30"
          style={{ background: 'rgba(26, 58, 82, 0.98)' }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as LanguageCode);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors ${
                language === lang.code
                  ? "bg-[var(--cerulean)]/30 text-[var(--gold)]"
                  : "text-[var(--parchment)] hover:bg-[var(--cerulean)]/20"
              }`}
            >
              <span className="text-sm">{lang.nativeName}</span>
              <span className="text-xs opacity-60">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
