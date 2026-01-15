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
						{ label: 'Métodos de string', slug: 'guides/06-metodos-string' },
						{ label: 'Listas, definición e indexación', slug: 'guides/07-listas' },
						{ label: 'Métodos de listas', slug: 'guides/08-metodos-listas' },
						{ label: 'Tuplas, definición e indexación', slug: 'guides/09-tuplas' },
						{ label: 'Métodos de tuplas', slug: 'guides/10-metodos-tuplas' },
						{ label: 'Diccionarios, definición e indexación', slug: 'guides/11-diccionarios' },
						{ label: 'Métodos de diccionarios', slug: 'guides/12-metodos-diccionarios' },
						{ label: 'Sets', slug: 'guides/13-sets' },
						{ label: 'Condicionales', slug: 'guides/14-condicionales' },
						{ label: 'Estructuras de iteración: Bucle for en listas, tuplas y sets', slug: 'guides/15-iteracion-lista-tupla-set' },
						{ label: 'Estructuras de iteración: Bucles for en diccionarios', slug: 'guides/16-iteracion-diccionario' },
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
