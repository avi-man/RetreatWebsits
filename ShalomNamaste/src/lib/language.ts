export type Language = 'en' | 'he';

export const languages: Language[] = ['en', 'he'];

export const languageNames: Record<Language, string> = {
  en: 'English',
  he: 'עברית',
};

export const languageDirections: Record<Language, 'ltr' | 'rtl'> = {
  en: 'ltr',
  he: 'rtl',
};

export function getLanguageFromPath(path: string): Language {
  const segments = path.split('/').filter(Boolean);
  return languages.includes(segments[0] as Language) ? (segments[0] as Language) : 'en';
}

export function getPathWithoutLanguage(path: string): string {
  const segments = path.split('/').filter(Boolean);
  return languages.includes(segments[0] as Language) ? '/' + segments.slice(1).join('/') : path;
}

export function getLocalizedPath(path: string, lang: Language): string {
  const pathWithoutLang = getPathWithoutLanguage(path);
  return `/${lang}${pathWithoutLang}`;
} 