// deno-lint-ignore-file no-empty-interface
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />

/// <reference path="./cts.d.ts" />
/// <reference path="./sec.d.ts" />
/// <reference path="./xs.d.ts" />

declare module 'dls' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/dls'): MarkLogic.dls.DLS;
			}

			namespace xi {
				interface include extends Element {}
			}

			namespace dls {
				type ID = number | string;

				interface checkout extends Element {}
				interface documentHistory extends Element {}
				interface retentionRule extends Element {}
				interface upgradeStatus extends Element {}
				interface validationResults extends Element {}

				interface DLS {
					asOfQuery(when: xs.date | xs.dateTime): cts.propertiesFragmentQuery;
					authorQuery(author: number | string): cts.propertiesFragmentQuery;
					breakCheckout(uri: string, deep: boolean): null;
					documentAddCollections(uri: string, collections: string[]): null;
					documentAddPermissions(uri: string, permissions: sec.permission[]): null;
					documentAddProperties(uri: string, properties: Node[]): null;
					documentCheckin(uri: string, deep: boolean): null;
					documentCheckout(uri: string, deep: boolean, annotation?: unknown, timeout?: number | string): null;
					documentCheckoutStatus(uri: string): checkout;
					documentCheckoutUpdateCheckin(uri: string, doc: Node, annotation: Sequence, retainHistory: boolean, permissions?: sec.permission[], collections?: string[], quality?: number, forestIds?: ID[]): Sequence;
					documentDelete(uri: string, keepOldVersions: boolean, retainHistory: boolean): null;
					documentExtractPart(newUri: string, element: Node, annotation: Sequence, retainHistory: boolean, permissions?: sec.permission[], collections?: string[], quality?: number, forestIds?: ID[]): Sequence;
					documentGetPermissions(uri: string): Sequence<sec.permission>;
					documentHistory(uri: string): documentHistory;
					documentIncludeQuery(uri: string): cts.query;
					documentInsertAndManage(uri: string, deep: boolean, doc: Node, annotation?: Sequence, permissions?: sec.permission[], collections?: string[], quality?: number, forestIds?: ID[]): Sequence;
					documentIsManaged(uri: string): boolean;
					documentManage(uri: string, deep: boolean, annotation?: Sequence): null;
					documentPurge(uri: string, del: boolean, retainHistory: boolean): Sequence;
					documentRemoveCollections(uri: string, collections: string[]): null;
					documentRemovePermissions(uri: string, permissions: sec.permission[]): null;
					documentRemoveProperties(uri: string, properties: Node[]): null;
					documentRetentionRules(uri: string): Sequence<retentionRule>;
					documentSetCollections(uri: string, collections: string[]): null;
					documentSetPermissions(uri: string, permissions: sec.permission[]): null;
					documentSetProperties(uri: string, properties: Node[]): null;
					documentSetProperty(uri: string, property: Node): null;
					documentSetQuality(uri: string, quality: xs.int): null;
					documentsQuery(): cts.query;
					documentUnmanage(uri: string, deep: boolean, removeVersions: boolean): null;
					documentUpdate(uri: string, doc: Node, annotation: Sequence, retainHistory: boolean, permissions?: sec.permission[], collections?: string[], quality?: number, forestIds?: ID[]): Sequence;
					documentVersion(uri: string, versionNumber: number): Node;
					documentVersionAsOf(uri: string, asOf: xs.date | xs.dateTime): Node;
					documentVersionDelete(uri: string, version: number, retainHistory: boolean): null;
					documentVersionQuery(version: number | string): cts.propertiesFragmentQuery;
					documentVersionsQuery(uri: string): cts.propertiesFragmentQuery;
					documentVersionUri(uri: string, version: number): string;
					documentVersionUris(uri: string): Sequence<string>;
					latestValidationResults(): validationResults;
					linkExpand(context: Node, ref: xi.include, restriction: cts.query): Sequence;
					linkReferences(node: Node, restriction: cts.query): Sequence;
					nodeExpand(node: Node, restriction: cts.query): Node;
					purge(del: boolean, retainHistory: boolean): Sequence;
					retentionRule(name: string, comment: Sequence, numVersions: number, duration: xs.duration, documentQueryText: string, documentQuery: cts.query): retentionRule;
					retentionRuleInsert(rules: retentionRule[]): null;
					retentionRuleRemove(names: string[]): null;
					retentionRules(names: string[]): Sequence<retentionRule>;
					setUpgradeStatus(promote: boolean): upgradeStatus;
					startUpgrade(): null;
					validateAllDocuments(verbose: boolean): validationResults;
				}
			}
		}
	}
}
