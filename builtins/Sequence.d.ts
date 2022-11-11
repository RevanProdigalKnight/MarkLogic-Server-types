/// <reference path="./Value.d.ts" />

declare namespace MarkLogic {
	type SequenceFromMapFn<T = unknown, K = T> = (item: T, idx: number, arr: T[]) => K;

	interface ISequenceFromOptions<T = unknown, K = T> {
		readonly mapFn?: SequenceFromMapFn<T, K>;
		readonly sequenceLimit?: string;
	}

	interface Sequence<T = unknown> extends Value {
		toArray(): T[];

		[Symbol.iterator](): IterableIterator<T>;
	}

	interface SequenceConstructor {
		new <T = unknown>(): Sequence<T>;

		from<T = unknown, K = T>(arr: ArrayLike<T>, options?: SequenceFromMapFn<T, K> | ISequenceFromOptions<T, K>, thisValue?: unknown): Sequence<K>;
	}
}

declare const Sequence: MarkLogic.SequenceConstructor;
