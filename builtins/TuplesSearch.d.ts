// deno-lint-ignore-file ban-types
/// <reference path="./Element.d.ts" />
/// <reference path="./Node.d.ts" />

/// <reference path="../modules/cts.d.ts" />
/// <reference path="../modules/jsearch.d.ts" />

declare namespace MarkLogic {
	interface TuplesMapperObject {
		readonly frequency?: 'fragment' | 'item' | 'none';
		readonly names?: string[];
	}

	interface TuplesSearchResult<T> {
		readonly results: T;
		readonly estimate: number;
	}

	interface BaseTuplesSearch<T = unknown> {
		aggregate(name: string | jsearch.LexiconDefinition): this;
		orderBy(sortKeys: string, direction: 'ascending' | 'descending'): this;
		result(type: null): TuplesSearchResult<T[]>;
		result(type: 'iterator'): TuplesSearchResult<IterableIterator<T>>;
		result(type?: 'value'): TuplesSearchResult<T[]>;
		slice(start: number, end: number): this;
		where(queries: cts.query | cts.query[]): this;
		withOptions(options: object): this;
	}

	interface TuplesSearchWithMap<T = unknown> extends BaseTuplesSearch<T> {
		map<K = T>(mapper: ((item: T) => K) | TuplesMapperObject): TuplesSearchWithMap<K>;
	}

	interface TuplesSearchWithReduce<T = unknown> extends BaseTuplesSearch<T> {
		reduce<K = T>(reducer: ((acc: K, current: T, index: number, state: { isLast: boolean }) => K), seed?: K): TuplesSearchWithReduce<K>;
	}

	type TuplesSearch<T = unknown> = TuplesSearchWithMap<T> & TuplesSearchWithReduce<T>;
}
