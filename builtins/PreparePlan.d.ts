/// <reference path="./Plan.d.ts" />
/// <reference path="./IteratePlan.d.ts" />

/// <reference path="../modules/op.d.ts" />

declare namespace MarkLogic {
	interface PreparePlan<T = unknown> extends Plan<T> {
		map<K = T>(mapFn: ((entry: T) => K)): IteratePlan<K>;
		reduce<K = T>(reduceFn: ((accumulator: K, entry: T) => K), seed?: K): IteratePlan<K>;
	}
}
