import { create } from "zustand";

export type LanguageCode = "en" | "es" | "fr" | "zh" | "ar" | "hi" | "ja" | "pt" | "ta" | "de" | "ko" | "th";

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: LanguageInfo[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Espa\u00f1ol", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Fran\u00e7ais", dir: "ltr" },
  { code: "zh", name: "Chinese", nativeName: "\u4e2d\u6587", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", dir: "rtl" },
  { code: "hi", name: "Hindi", nativeName: "\u0939\u093f\u0928\u094d\u0926\u0940", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "\u65e5\u672c\u8a9e", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Portugu\u00eas", dir: "ltr" },
  { code: "ta", name: "Tamil", nativeName: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", dir: "ltr" },
  { code: "ko", name: "Korean", nativeName: "\ud55c\uad6d\uc5b4", dir: "ltr" },
  { code: "th", name: "Thai", nativeName: "\u0e44\u0e17\u0e22", dir: "ltr" },
];

interface LanguageState {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const savedLang = (typeof window !== "undefined" ? localStorage.getItem("app-language") : null) as LanguageCode | null;

export const useLanguage = create<LanguageState>((set) => ({
  language: savedLang && LANGUAGES.some(l => l.code === savedLang) ? savedLang : "en",
  setLanguage: (lang) => {
    localStorage.setItem("app-language", lang);
    set({ language: lang });
  },
}));
