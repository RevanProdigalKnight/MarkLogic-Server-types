// deno-lint-ignore-file no-empty-interface
/// <reference path="../builtins/Element.d.ts" />

declare module 'rdf' {
	global {
		const rdf: MarkLogic.rdf.RDF;

		namespace MarkLogic.rdf {
			interface langString {}

			interface RDF {
				langString(str: string, lang: string): langString;
				langStringLanguage(langstring: langString): string;
			}
		}
	}
}
