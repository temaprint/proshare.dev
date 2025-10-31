import i18nData from '../data/i18n.json';

export type Locale = 'en' | 'ru';

export function getTranslations(locale: Locale) {
  return i18nData[locale];
}

export function getLocalizedUrl(url: string, locale: Locale): string {
  // Remove any existing locale prefix first
  const cleanUrl = url.startsWith('/ru') ? url.replace('/ru', '') : url;
  const normalizedUrl = cleanUrl === '' ? '/' : cleanUrl;
  
  if (locale === 'en') return normalizedUrl;
  return `/${locale}${normalizedUrl === '/' ? '' : normalizedUrl}`;
}

export function getCurrentLocale(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.startsWith('/ru')) return 'ru';
  return 'en';
}