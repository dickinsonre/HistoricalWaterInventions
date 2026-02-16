import { en, type TranslationKeys } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { zh } from "./zh";
import { ar } from "./ar";
import { hi } from "./hi";
import { ja } from "./ja";
import { pt } from "./pt";
import type { LanguageCode } from "../lib/stores/useLanguage";

const translations: Record<LanguageCode, TranslationKeys> = {
  en,
  es,
  fr,
  zh,
  ar,
  hi,
  ja,
  pt,
};

export function getTranslations(lang: LanguageCode): TranslationKeys {
  return translations[lang] || en;
}

export type { TranslationKeys };
