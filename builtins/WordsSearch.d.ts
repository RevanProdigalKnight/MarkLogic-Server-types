/// <reference lib="es2015.iterable" />

/// <reference path="./Element.d.ts" />
/// <reference path="./Node.d.ts" />

/// <reference path="../modules/cts.d.ts" />
/// <reference path="../modules/jsearch.d.ts" />
/// <reference path="../modules/xs.d.ts" />

declare namespace MarkLogic {
	interface WordsSearchResult<T> {
		readonly results: T;
		readonly estimate: number;
	}

	interface BaseWordsSearch<T = unknown> {
		match(pattern: xs.anyAtomicType): this;
		orderBy(direction: 'ascending' | 'descending'): this;
		result(type: null): WordsSearchResult<T[]>;
		result(type: 'iterator'): WordsSearchResult<IterableIterator<T>>;
		result(type?: 'value'): WordsSearchResult<T[]>;
		slice(start: number, end: number): this;
		where(queries: cts.query | cts.query[]): this;
		withOptions(options: object): this;
	}

	interface WordsSearchWithMap<T = unknown> extends BaseWordsSearch<T> {
		map<K = T>(mapper: ((item: T) => K)): WordsSearchWithMap<K>;
	}

	interface WordsSearchWithReduce<T = unknown> extends BaseWordsSearch<T> {
		reduce<K = T>(reducer: ((acc: K, current: T, index: number, state: { isLast: boolean }) => K), seed?: K): WordsSearchWithReduce<K>;
	}

	type WordsSearch<T = unknown> = WordsSearchWithMap<T> & WordsSearchWithReduce<T>;
}
