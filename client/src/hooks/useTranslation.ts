import { useLanguage } from "../lib/stores/useLanguage";
import { getTranslations, type TranslationKeys } from "../i18n";

export function useTranslation(): TranslationKeys {
  const { language } = useLanguage();
  return getTranslations(language);
}
