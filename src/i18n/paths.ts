import type { Lang } from './types';

export const langs: readonly Lang[] = ['en', 'es'] as const;

export function isLang(value: string): value is Lang {
	return value === 'en' || value === 'es';
}

export function otherLang(lang: Lang): Lang {
	return lang === 'en' ? 'es' : 'en';
}

export function homePath(lang: Lang): string {
	return `/${lang}/`;
}

/** In-page anchor on the localized homepage, e.g. `/en/#contact`. */
export function href(lang: Lang, hash: string): string {
	const h = hash.startsWith('#') ? hash : `#${hash}`;
	// Keep trailing slash before the hash so static hosts resolve `/en/index.html` + fragment correctly.
	return `${homePath(lang)}${h}`;
}
