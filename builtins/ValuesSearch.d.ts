// deno-lint-ignore-file ban-types
/// <reference path="./Element.d.ts" />
/// <reference path="./Node.d.ts" />

/// <reference path="../modules/cts.d.ts" />
/// <reference path="../modules/jsearch.d.ts" />
/// <reference path="../modules/xs.d.ts" />

declare namespace MarkLogic {
	interface ValuesReducerObject {
		readonly frequency?: 'fragment' | 'item' | 'none';
	}

	interface ValuesMapperObject extends ValuesReducerObject {
		readonly names?: string[];
	}

	interface ValuesSearchResult<T> {
		readonly results: T;
		readonly estimate: number;
	}

	interface BaseValuesSearch<T = unknown> {
		aggregate(name: string | jsearch.LexiconDefinition): this;
		groupInto(bounds: jsearch.BucketDefinition): this;
		match(pattern: xs.anyAtomicType): this;
		orderBy(sortKeys: string, direction: 'ascending' | 'descending'): this;
		result(type: null): ValuesSearchResult<T[]>;
		result(type: 'iterator'): ValuesSearchResult<IterableIterator<T>>;
		result(type?: 'value'): ValuesSearchResult<T[]>;
		slice(start: number, end: number): this;
		where(queries: cts.query | cts.query[]): this;
		withOptions(options: object): this;
	}

	interface ValuesSearchWithMap<T = unknown> extends BaseValuesSearch<T> {
		map<K = T>(mapper: ((item: T) => K) | ValuesMapperObject): ValuesSearchWithMap<K>;
	}

	interface ValuesSearchWithReduce<T = unknown> extends BaseValuesSearch<T> {
		reduce<K = T>(reducer: ((acc: K, current: T, index: number, state: { isLast: boolean }) => K) | ValuesReducerObject, seed?: K): ValuesSearchWithReduce<K>;
	}

	type ValuesSearch<T = unknown> = ValuesSearchWithMap<T> & ValuesSearchWithReduce<T>;
}
