// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Introducción a Python', slug: 'guides/01-introduccion' },
						{ label: 'Variables en Python', slug: 'guides/02-variables' },
						{ label: 'Tipos de Datos y Funciones', slug: 'guides/03-tipos-datos' },
						{ label: 'Operadores en Python', slug: 'guides/04-operadores' },
						{ label: 'Indexación de Strings', slug: 'guides/05-indexacion-strings' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
