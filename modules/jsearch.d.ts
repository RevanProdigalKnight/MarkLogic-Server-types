// deno-lint-ignore-file no-empty-interface ban-types
/// <reference path="../builtins/DocumentsSearch.d.ts" />
/// <reference path="../builtins/FacetDefinition.d.ts" />
/// <reference path="../builtins/FacetsSearch.d.ts" />
/// <reference path="../builtins/TuplesSearch.d.ts" />
/// <reference path="../builtins/ValuesSearch.d.ts" />
/// <reference path="../builtins/WordsSearch.d.ts" />

/// <reference path="./cts.d.ts" />
/// <reference path="./xs.d.ts" />

declare module 'jsearch' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/jsearch'): jsearch.JSearch;
			}

			namespace jsearch {
				interface BucketDefinition {}
				interface BucketNameDefinition {}
				interface GeospatialBucketDefinition extends BucketDefinition {}
				interface LexiconDefinition {}

				interface JSearch {
					bucketName(name: string): BucketNameDefinition;
					byExample(qbe: object | Node): cts.query;
					collections(uris: string[]): JSearch;
					databaseLexicon(): LexiconDefinition;
					documents<T = unknown>(): DocumentsSearch<T>;
					documentSelect<T = unknown>(results: Document[], configuration: object): IterableIterator<T>;
					elementAttributeLexicon(elementNames: string | xs.QName | string[] | xs.QName[], attributeNames: string | xs.QName | string[] | xs.QName[]): LexiconDefinition;
					elementLexicon(names: string | xs.QName | string[] | xs.QName[]): LexiconDefinition;
					facet(name: string, index: cts.reference): FacetDefinition;
					facets(facets: FacetDefinition, document: DocumentsSearch): FacetsSearch;
					fieldLexicon(names: string | string[]): LexiconDefinition;
					jsonPropertyLexicon(names: string | string[]): LexiconDefinition;
					makeBuckets(configuration: object): BucketDefinition;
					makeHeatmap(configuration: object): GeospatialBucketDefinition;
					tuples(index: cts.reference): TuplesSearch;
					udf(plugin: string, aggregate: string, arguments?: unknown): LexiconDefinition;
					values(index: cts.reference): ValuesSearch;
					words(index: LexiconDefinition): WordsSearch;
				}
			}
		}
	}
}
