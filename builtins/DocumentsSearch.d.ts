/// <reference path="../modules/cts.d.ts" />

declare namespace MarkLogic {
	interface DocumentsSearchWithOptionsOptions {
		readonly search?: string[];
		readonly qualityWeight?: number;
		readonly forestNames?: string[];
		readonly returnEstimate?: boolean;
		readonly returnQueryPlan?: boolean;
		readonly returnRelevanceTrace?: boolean;
	}

	interface BaseDocumentsSearch<T = unknown> {
		filter(): this;
		orderBy(sortKeys: cts.order): this;
		result(type?: 'value' | 'iterator'): Iterable<T>;
		slice(start: number, end: number): this;
		where(queries: cts.query | cts.query[]): this;
		withOptions(options: DocumentsSearchWithOptionsOptions): this;
	}

	interface DocumentsSearchMapSnippetsOptions {
		readonly preferredMatches?: string[];
		readonly maxMatches?: number;
		readonly perMatchTokens?: number;
		readonly maxSnippetChars?: number;
		readonly query?: cts.query;
	}

	interface DocumentsSearchMapExtractOptions {
		readonly selected?: 'include' | 'include-with-ancestors' | 'exclude' | 'all';
		readonly paths?: string | string[];
	}

	interface DocumentsSearchMapOptions {
		readonly snippets?: boolean | DocumentsSearchMapSnippetsOptions;
		readonly extract?: DocumentsSearchMapExtractOptions;
		readonly namespaces?: Record<string, string>;
		readonly returnSimilar?: boolean;
	}

	interface DocumentsSearchWithMap<T> extends BaseDocumentsSearch<T> {
		map<K = T>(cb: ((item: T) => K)): DocumentsSearchWithMap<K>;
		map(options: DocumentsSearchMapOptions): DocumentsSearchWithMap<T>;
	}

	interface DocumentsSearchWithReduce<T> extends BaseDocumentsSearch<T> {
		reduce<K = T>(cb: ((prev: K, current: T, index: number, state: { isLast: boolean }) => K), seed: K): DocumentsSearchWithReduce<K>;
	}

	type DocumentsSearch<T = unknown> = DocumentsSearchWithMap<T> & DocumentsSearchWithReduce<T>;
}
