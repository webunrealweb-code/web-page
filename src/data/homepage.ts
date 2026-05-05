/** Placeholder content for the marketing homepage — replace with CMS or collections later. */

import celesteImage from '../assets/talents/Celeste01.jpg';
import eduardoImage from '../assets/talents/eduardo.jpeg';
import kevinImage from '../assets/talents/KevinJimenez01.jpeg';
import churryImage from '../assets/talents/churry.jpeg';
import rodezelImage from '../assets/talents/Rodezel01.png';
import distoImage from '../assets/talents/Disto01.jpg';

export const talentRoster = [
	{ name: 'Celeste', tags: ['Lifestyle', 'Events', 'Experience vlogs'], image: celesteImage.src },
	{ name: 'Rodezel', tags: ['Streaming', 'Music', 'Lifestyle'], image: rodezelImage.src },
	{ name: 'Disto', tags: ['Music', 'Producer', 'DJ'], image: distoImage.src },
	{ name: 'Eduardo Delvo', tags: ['Education', 'Informational', 'Entertainment'], image: eduardoImage.src },
	{ name: 'Kevin Jiménez', tags: ['Football', 'Journalist'], image: kevinImage.src },
	{ name: 'Churry', tags: ['Lifestyle', 'Football'], image: churryImage.src },
] as const;

export { brandLogos } from './brandLogos';

/**
 * Vimeo URLs for the partner showcase
 * (same order as `messages.partners.showcase`).
 */
export const partnerVideoSources = [
	'https://vimeo.com/1185748257?share=copy&fl=sv&fe=ci',
	'https://vimeo.com/1189268159?share=copy&fl=tl&fe=ec',
	'https://vimeo.com/1189268157?share=copy&fl=sv&fe=ci',
	'https://vimeo.com/1189268162?share=copy&fl=sv&fe=ci',
	'https://vimeo.com/1189268391?share=copy&fl=tl&fe=ec',
	'https://vimeo.com/1189268388?share=copy&fl=sv&fe=ci',
] as const;