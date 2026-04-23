export type Lang = 'en' | 'es';

export interface PartnerShowcaseItem {
	readonly partner: string;
	readonly headline: string;
	readonly title: string;
	readonly description: string;
}

/** Merged showcase row with video URL/path (built in `[lang]/index.astro`). */
export interface PartnerVideoRow extends PartnerShowcaseItem {
	readonly videoSrc: string;
}

export interface Messages {
	meta: {
		title: string;
		description: string;
	};
	ogLocale: string;
	a11y: {
		skipToMain: string;
		navPrimary: string;
		navSocial: string;
		brandLogo: string;
		menuToggle: string;
		menuOpen: string;
		menuClose: string;
		statsRegion: string;
		partnersRegion: string;
		showcaseRegion: string;
		pressAside: string;
	};
	nav: {
		home: string;
		about: string;
		services: string;
		partnersWork: string;
		contact: string;
	};
	lang: {
		switchToEn: string;
		switchToEs: string;
		current: string;
	};
	footer: {
		privacy: string;
		copyright: string;
	};
	statsLabels: readonly string[];
	hero: {
		eyebrow: string;
		title: string;
		lead: string;
		ctaTalent: string;
		ctaContact: string;
	};
	about: {
		title: string;
		subtitle: string;
		missionTitle: string;
		missionBody: string;
		visionTitle: string;
		visionBody: string;
	};
	services: {
		title: string;
		subtitle: string;
		block1Title: string;
		block1Body: string;
		block2Title: string;
		block2Body: string;
		rosterTitle: string;
		rosterLead: string;
		rosterContactCta: string;
	};
	partners: {
		regionLabel: string;
		title: string;
		lead: string;
		logoStripTitle: string;
		/** Ribbon headline above the logo carousel (solid + outline stack). */
		clientsHeadline: string;
		/** Accessible name for the infinite logo track. */
		clientsCarouselLabel: string;
		workTitle: string;
		workSubtitle: string;
		showcase: readonly PartnerShowcaseItem[];
	};
	contact: {
		title: string;
		intro: string;
		formTitle: string;
		formNote: string;
		fields: {
			name: string;
			role: string;
			email: string;
			company: string;
			message: string;
		};
		submit: string;
		asideTitle: string;
		channelsLead: string;
		channelEmail: string;
		channelPhone: string;
		channelWhatsapp: string;
		phoneDisplay: string;
		mailSubject: string;
		mailLines: { name: string; role: string; email: string; company: string };
	};
}
