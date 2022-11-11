// deno-lint-ignore-file no-empty-interface ban-types
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./cts.d.ts" />
/// <reference path="./sec.d.ts" />
/// <reference path="./xs.d.ts" />

declare module 'sec' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/semantics.xqy'): sem.Semantics;
			}

			namespace sem {
				type ID = number | string;

				interface TypedData {
					readonly value: xs.anyAtomicType;
					readonly datatype: string | iri;
				}
				interface Triple {
					readonly subject: xs.anyAtomicType | TypedData;
					readonly predicate: xs.anyAtomicType | TypedData;
					readonly object: xs.anyAtomicType | TypedData;
				}
				interface TripleObject {
					readonly triple: Triple;
				}

				interface binding {}
				interface blank {}
				interface invalid {}
				interface iri {}
				interface store {}
				interface triple {}
				interface sem_unknown {} // Name conflicts with built-in `unknown`

				interface queryResultsSerialize {}

				interface queryResultsSerializeElement extends Element {}

				type OneOrMany<T> = T | T[];

				interface Semantics {
					binding(bindings?: object): binding;
					bnode(value?: xs.anyAtomicType): blank;
					coalesce<T = unknown>(...values: T[]): Sequence<T>;
					curieExpand(curie: string, mapping?: object): iri;
					curieShorten(iri: iri, mapping?: object): string;
					databaseNodes(triples: triple[], options?: string[], query?: cts.query): Sequence<Node>;
					datatype(value: xs.anyAtomicType): iri;
					defaultGraphIri(): iri;
					describe(iris: iri[]): Sequence<triple>;
					graph(graphName: iri): Sequence<triple>;
					graphAddPermissions(graph: iri, permissions: sec.permission[]): null;
					graphDelete(graphName: iri): null;
					graphGetPermissions(graph: iri, format: 'elements'): sec.permissionElement[];
					graphGetPermissions(graph: iri, format?: 'objects'): sec.permission[];
					graphInsert(graphName: iri, triples: triple[], permissions?: sec.permission[], collections?: string[], quality?: xs.int, forestIds?: ID[]): Sequence<ID>;
					graphRemovePermissions(graph: iri, permissions: sec.permission[]): null;
					graphSetPermissions(graph: iri, permissions: sec.permission[]): null;
					if<T, F>(condition: boolean, ifTrue: T, ifFalse: F): T | F;
					inMemoryStore(dataset: triple[]): store;
					invalid(str: string, datatype: iri): invalid;
					invalidDatatype(val: invalid): iri;
					iri(iriString: string): iri;
					isBlank(value: xs.anyAtomicType): boolean;
					isIRI(value: xs.anyAtomicType): boolean;
					isLiteral(value: xs.anyAtomicType): boolean;
					isNumeric(value: xs.anyAtomicType): boolean;
					lang(value: xs.anyAtomicType): string;
					langMatches(langTag: string, langRange: string): boolean;
					prefixes(prefixDef: string, includeCommon?: boolean): Record<string, string>;
					queryResultsSerialize(results: Sequence, output: 'json'): queryResultsSerialize;
					queryResultsSerialize(results: Sequence, output?: 'xml'): queryResultsSerializeElement;
					random(): number;
					rdfBuilder(prefixes?: object, graph?: iri): (subject: xs.anyAtomicType, predicate: xs.anyAtomicType, object: xs.anyAtomicType) => triple;
					rdfGet(location: string, options?: string[], httpOptions?: Node): Sequence<triple>;
					rdfInsert(triples: triple | Sequence<triple> | triple[], options?: string[], permissions?: sec.permission[], collections?: string[], quality?: xs.int, forestIds?: ID[]): Sequence<string>;
					rdfLoad(location: string, options?: string[], httpOptions?: Node, permissions?: sec.permission[], collections?: string[], quality?: xs.int, forestIds?: ID[]): Sequence<string>;
					rdfParse(source: string | Node, options?: string[]): Sequence<triple>;
					rdfSerialize(triples: triple[], options?: string[]): string | object | Element;
					resolveIri(relative: string, base?: string): iri;
					rulesetStore(locations: string[], store?: store[], options?: string[]): store;
					sameTerm(a: OneOrMany<string | number | boolean | null | unknown[] | object>, b: OneOrMany<string | number | boolean | null | unknown[] | object>): boolean;
					sparql<T = unknown>(sparql: string, bindings?: object, options?: string[], store?: store[]): Sequence<T>;
					sparqlPlan(sparql: string, bindings?: object, options?: string[]): ObjectNode;
					sparqlUpdate(sparql: string, bindings?: object, options?: string[], store?: store[], defaultPermissions?: sec.permission[]): null;
					sparqlValues<T = unknown>(sparql: string, bindings?: object, options?: string[], store?: store[]): Sequence<T>;
					store(options?: string[], query?: cts.query): store;
					timezoneString(value: xs.dateTime): string;
					transitiveClosure(seeds: iri[], predicates: iri[], limit: number): Sequence<iri>;
					triple(subject_or_node: xs.anyAtomicType | TripleObject, predicate?: xs.anyAtomicType, object?: xs.anyAtomicType, graph?: iri): triple;
					tripleGraph(triple: triple): iri;
					tripleObject(triple: triple): xs.anyAtomicType;
					triplePredicate(triple: triple): xs.anyAtomicType;
					tripleSubject(triple: triple): xs.anyAtomicType;
					typedLiteral(value: string, datatype: iri): xs.anyAtomicType;
					unknown(string: string, datatype: iri): sem_unknown;
					unknownDatabase(value: sem_unknown): iri;
					uuid(): iri;
					uuidString(): string;
				}
			}
		}
	}
}
