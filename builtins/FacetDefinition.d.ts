/// <reference path="../modules/cts.d.ts" />
/// <reference path="../modules/jsearch.d.ts" />

declare namespace MarkLogic {
	interface FacetDefinitionWithOptionsOptions {
		readonly values?: string[];
		readonly qualityWeight?: number;
		readonly forestNames?: string[];
	}

	type FacetDefinitionFrequency = 'fragment' | 'item' | 'none';

	interface FacetDefinitionMapOptions {
		readonly frequency?: FacetDefinitionFrequency;
		readonly names?: string[];
	}

	interface FacetDefinitionReduceOptions {
		readonly frequency?: FacetDefinitionFrequency;
	}

	interface BaseFacetDefinition {
		groupInto(bounds: (jsearch.BucketDefinition | jsearch.BucketNameDefinition | unknown)[]): this;
		orderBy(sortKey: 'item' | 'frequency', direction: 'ascending' | 'descending'): this;
		othersWhere(queries: cts.query | cts.query[]): this;
		slice(start: number, end: number): this;
		thisWhere(queries: cts.query | cts.query[]): this;
		withOptions(options: FacetDefinitionWithOptionsOptions): this;
	}

	interface FacetDefinitionWithMap<T> extends BaseFacetDefinition {
		map<K = T>(cb: ((item: T) => K)): FacetDefinitionWithMap<K>;
		map(options: FacetDefinitionMapOptions): FacetDefinitionWithMap<T>;
	}

	interface FacetDefinitionWithReduce<T> extends BaseFacetDefinition {
		reduce<K = T>(cb: ((prev: K, current: T, index: number, state: { isLast: boolean }) => K), seed: K): FacetDefinitionWithReduce<K>;
		reduce(options: FacetDefinitionReduceOptions): FacetDefinitionWithReduce<T>;
	}

	type FacetDefinition<T = unknown> = FacetDefinitionWithMap<T> & FacetDefinitionWithReduce<T>;
}
