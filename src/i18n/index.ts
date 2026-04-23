import { en } from './en';
import { es } from './es';
import type { Lang } from './types';
import type { Messages } from './types';

export type { Lang, Messages, PartnerShowcaseItem, PartnerVideoRow } from './types';

export function getMessages(lang: Lang): Messages {
	return lang === 'es' ? es : en;
}
