import { en, type TranslationKeys } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { zh } from "./zh";
import { ar } from "./ar";
import { hi } from "./hi";
import { ja } from "./ja";
import { pt } from "./pt";
import { ta } from "./ta";
import { de } from "./de";
import { ko } from "./ko";
import { th } from "./th";
import { tr } from "./tr";
import { el } from "./el";
import { it } from "./it";
import { pl } from "./pl";
import { ms } from "./ms";
import { vi } from "./vi";
import { tl } from "./tl";
import { id } from "./id";
import { fa } from "./fa";
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
  ta,
  de,
  ko,
  th,
  tr,
  el,
  it,
  pl,
  ms,
  vi,
  tl,
  id,
  fa,
};

export function getTranslations(lang: LanguageCode): TranslationKeys {
  return translations[lang] || en;
}

export type { TranslationKeys };
