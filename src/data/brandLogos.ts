/** Client marks for the partners carousel — SVGs in `public/logos/brands/clients/`. */

export interface BrandLogo {
	readonly src: string;
	readonly alt: string;
}

export const brandLogos = [
	{ src: '/logos/brands/clients/coca-cola.svg', alt: 'Coca-Cola' },
	{ src: '/logos/brands/clients/mcdonalds.svg', alt: "McDonald's" },
	{ src: '/logos/brands/clients/fifco.svg', alt: 'FIFCO' },
	{ src: '/logos/brands/clients/imperial.svg', alt: 'Imperial' },
	{ src: '/logos/brands/clients/pilsen.svg', alt: 'Pilsen' },
	{ src: '/logos/brands/clients/sony-music.svg', alt: 'Sony Music' },
	{ src: '/logos/brands/clients/kfc.svg', alt: 'KFC' },
	{ src: '/logos/brands/clients/taco-bell.svg', alt: 'Taco Bell' },
	{ src: '/logos/brands/clients/popeyes.svg', alt: 'Popeyes' },
	{ src: '/logos/brands/clients/burger-king.svg', alt: 'Burger King' },
	{ src: '/logos/brands/clients/monster-energy.svg', alt: 'Monster Energy' },
	{ src: '/logos/brands/clients/pepsi.svg', alt: 'Pepsi' },
	{ src: '/logos/brands/clients/dominos.svg', alt: "Domino's" },
	{ src: '/logos/brands/clients/claro.svg', alt: 'Claro' },
	{ src: '/logos/brands/clients/sneax.svg', alt: 'Sneax' },
	{ src: '/logos/brands/clients/lays.svg', alt: "Lay's" },
	{ src: '/logos/brands/clients/converse.svg', alt: 'Converse' },
	{ src: '/logos/brands/clients/uber.svg', alt: 'Uber' },
	{ src: '/logos/brands/clients/fanta.svg', alt: 'Fanta' },
	{ src: '/logos/brands/clients/kotex.svg', alt: 'Kotex' },
	{ src: '/logos/brands/clients/schweppes.svg', alt: 'Schweppes' },
	{ src: '/logos/brands/clients/takis.svg', alt: 'Takis' },
	{ src: '/logos/brands/clients/pozuelo.svg', alt: 'Pozuelo' },
	{ src: '/logos/brands/clients/jet.svg', alt: 'Jet' },
	{ src: '/logos/brands/clients/dos-pinos.svg', alt: 'Dos Pinos' },
	{ src: '/logos/brands/clients/trident.svg', alt: 'Trident' },
	{ src: '/logos/brands/clients/lili-pink.svg', alt: 'Lili Pink' },
	{ src: '/logos/brands/clients/choys.svg', alt: "Choy's" },
	{ src: '/logos/brands/clients/pringles.svg', alt: 'Pringles' },
	{ src: '/logos/brands/clients/bamboo.svg', alt: 'BAMBOO' },
	{ src: '/logos/brands/clients/rock.svg', alt: 'Rock' },
	{ src: '/logos/brands/clients/banco-nacional.svg', alt: 'Banco Nacional' },
	{ src: '/logos/brands/clients/liberty.svg', alt: 'Liberty' },
	{ src: '/logos/brands/clients/masxmenos.svg', alt: 'Masxmenos' },
	{ src: '/logos/brands/clients/aspirin.svg', alt: 'Aspirin' },
	{ src: '/logos/brands/clients/maxxx-energy.svg', alt: 'Maxxx Energy' },
	{ src: '/logos/brands/clients/alka-seltzer.svg', alt: 'Alka-Seltzer' },
	{ src: '/logos/brands/clients/ambacar.svg', alt: 'ambacar' },
] as const satisfies readonly BrandLogo[];
