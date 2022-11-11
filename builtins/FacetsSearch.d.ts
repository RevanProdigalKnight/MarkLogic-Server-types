// deno-lint-ignore-file ban-types
/// <reference path="./Element.d.ts" />
/// <reference path="./Node.d.ts" />

/// <reference path="../modules/cts.d.ts" />

declare namespace MarkLogic {
	interface FacetsSearchResult<T> {
		readonly results: T;
		readonly estimate: number;
	}

	interface FacetsSearch<T = unknown> {
		result(type: null): FacetsSearchResult<T[]>;
		result(type: 'iterator'): FacetsSearchResult<IterableIterator<T>>;
		result(type?: 'value'): FacetsSearchResult<T[]>;
		where(queries: cts.query | cts.query[]): this;
		withOptions(options: object): this;
	}
}
