import { TFunction } from 'i18next';

/**
 * Helper function to ensure a string is returned from i18next
 * Falls back to default value if the translation isn't found
 * @param t The i18next translation function
 * @param key The translation key
 * @param defaultValue Default value if translation doesn't exist
 * @returns A string either from translation or default value
 */
export function ensureString(t: TFunction, key: string, defaultValue: string): string {
  const translation = t(key);
  
  // Check if translation is missing, i18next returns the key if no translation is found
  if (translation === key || !translation) {
    return defaultValue;
  }
  
  return translation;
}