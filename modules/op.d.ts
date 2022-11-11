// deno-lint-ignore-file no-empty-interface ban-types
/// <reference path="../builtins/AccessPlan.d.ts" />
/// <reference path="../builtins/ModifyPlan.d.ts" />
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Plan.d.ts" />

/// <reference path="./cts.d.ts" />
/// <reference path="./sem.d.ts" />
/// <reference path="./xs.d.ts" />

declare module 'op' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/optic'): op.Optic;
			}

			namespace op {
				interface expression {}
				interface booleanExpression extends expression {}
				interface numericExpression extends expression {}
				interface valueExpression extends expression {}
				interface whenExpression extends expression {}

				interface columnIdentifier extends expression {}
				interface columnBinding extends columnIdentifier {}
				interface fragmentIdColDef extends columnIdentifier {}

				interface placeholder extends expression {}
				interface literalPlaceholder extends placeholder {}

				interface aggregatedef {}
				interface filterdef {}
				interface groupdef {}
				interface ondef {}
				interface orderdef {}
				interface patterndef {}
				interface propertydef {}
				interface sortdef {}

				interface documentNode extends expression {}

				// XML node types
				interface xmlNode extends expression {}
				interface attributeNode extends xmlNode {}
				interface commentNode extends xmlNode {}
				interface elementNode extends xmlNode {}
				interface processingInstructionNode extends xmlNode {}
				interface textNode extends xmlNode {}

				// JSON node types
				interface objectNode extends expression {}
				interface arrayNode extends objectNode {}
				interface booleanNode extends objectNode {}
				interface nullNode extends objectNode {}
				interface numberNode extends objectNode {}
				interface stringNode extends objectNode {}

				interface NamedColumnGroup {}
				interface JavaScriptSource {}

				interface Optic {
					add(a: numericExpression, b: numericExpression): numericExpression;
					and(expr1: booleanExpression, expr2: booleanExpression, ...expressions: booleanExpression[]): booleanExpression;
					arrayAggregate(aggregateColumnName: string, columnDef: string, options?: { readonly values?: string }): aggregatedef;
					as(columnName: string, expression: expression): columnBinding;
					asc(columnDef: string): sortdef;
					avg(aggregateColumnName: string, columnDef: string, options?: { readonly values?: string }): aggregatedef;
					bucketGroup(name: string, column: columnIdentifier, boundaries: xs.anyAtomicType[], collation?: string): NamedColumnGroup;
					call(moduleUri: string, functionName: string, args?: unknown[]): expression;
					case(when: whenExpression[], value: unknown): valueExpression;
					col(columnName: string): columnIdentifier;
					columnInfo(plan: PreparePlan): object[];
					count(aggregateColumnName: string, columnDef?: string, options?: { readonly values?: 'distinct' }): aggregatedef;
					cube(columns: columnIdentifier[]): groupdef[];
					desc(columnDef: string): sortdef;
					divide(a: numericExpression, b: numericExpression): numericExpression;
					eq(expr1: valueExpression, expr2: valueExpression, ...expressions: valueExpression[]): booleanExpression;
					fragmentIdCol(name: string): fragmentIdColDef;
					fromLexicons(indexdef: string, qualifier?: string, fragmentIdCol?: fragmentIdColDef): AccessPlan;
					fromLiterals(rowDefs: object[] | sem.binding[], qualifier?: string): AccessPlan;
					fromSearch(query: cts.query, columns?: columnIdentifier[], qualifier?: string, options?: object): ModifyPlan;
					fromSearchDocs(query: cts.query, qualifier?: string): ModifyPlan;
					fromSPARQL<T extends Record<string, unknown>>(select: string, qualifier?: string, options?: object): ModifyPlan<T>;
					fromSQL(select: string, qualifier?: string): ModifyPlan;
					fromTriples(patternDef: patterndef, qualifier?: string, graphIri?: sem.iri[], options?: object): ModifyPlan;
					fromView(schema: string, view: string, qualifier?: string | null, systemCols?: fragmentIdColDef | fragmentIdColDef[]): ModifyPlan;
					ge(a: valueExpression, b: valueExpression): booleanExpression;
					graphCol(name: string): columnIdentifier;
					group(columns?: columnIdentifier[]): groupdef;
					groupConcat(aggregateColumnName: string, columndef: columnIdentifier, options?: object): aggregatedef;
					gt(a: valueExpression, b: valueExpression): booleanExpression;
					hasGroupKey(outputColumn: string, column: columnIdentifier): aggregatedef;
					import(exportedPlan: object): Plan;
					in(value: expression, anyOf: expression[]): booleanExpression;
					isDefined(expr: booleanExpression): booleanExpression;
					jsonArray(content: objectNode[]): arrayNode;
					jsonBoolean(value: expression): booleanNode;
					jsonDocument(root: arrayNode | objectNode): documentNode;
					jsonNull(): nullNode;
					jsonNumber(value: expression): numberNode;
					jsonObject(value: propertydef[]): objectNode;
					jsonString(value: expression): stringNode;
					le(a: valueExpression, b: valueExpression): booleanExpression;
					lt(a: valueExpression, b: valueExpression): booleanExpression;
					max(aggregateColumnName: string, columnDef: string, options?: { readonly values?: string }): aggregatedef;
					min(aggregateColumnName: string, columnDef: string, options?: { readonly values?: string }): aggregatedef;
					modulo(a: numericExpression, b: numericExpression): numericExpression;
					multiply(a: numericExpression, b: numericExpression): numericExpression;
					namedGroup(name: string, columns?: columnIdentifier): groupdef;
					ne(a: valueExpression, b: valueExpression): booleanExpression;
					not(expr: booleanExpression): booleanExpression;
					on(left: columnIdentifier, right: columnIdentifier): ondef;
					or(expr1: booleanExpression, expr2: booleanExpression, ...expressions: booleanExpression[]): booleanExpression;
					param(name: string): literalPlaceholder;
					pattern(subjects: columnIdentifier | sem.iri[], predicates: columnIdentifier | sem.iri[], objects: columnIdentifier | sem.iri[], systemCols?: columnIdentifier): patterndef;
					prefixer(baseUri: string): (name: xs.anyAtomicType) => sem.iri;
					prop(name: string, content: objectNode): propertydef;
					rollup(columns: columnIdentifier[]): groupdef[];
					sample(aggregateColumnName: string, columnDef: string, options?: { readonly values?: string }): aggregatedef;
					schemaCol(schemaName: string, viewName: string, columnName: string): columnIdentifier;
					sequenceAggregate(aggregateColumnName: string, columndef: string, options?: { readonly values?: string }): aggregatedef;
					sqlCondition(expr: booleanExpression): filterdef;
					subtract(a: numericExpression, b: numericExpression): numericExpression;
					sum(aggregateColumnName: string, columndef: string, options?: { readonly values?: string }): aggregatedef;
					toSource(plan: object): JavaScriptSource;
					uda(aggregateColumnName: string, columndef: string, module: string, fnName: string, options?: { readonly values?: unknown; arg?: string | placeholder }): aggregatedef;
					viewCol(viewName: string, columnName: string): columnIdentifier;
					when(expr: booleanExpression, result: valueExpression): whenExpression;
					xmlAttribute(name: expression | xs.QName, value: expression): attributeNode;
					xmlComment(value: expression): commentNode;
					xmlDocument(root: elementNode): documentNode;
					xmlElement(name: expression, attribute?: attributeNode, children?: xmlNode[]): elementNode;
					xmlPI(name: expression, value: expression): processingInstructionNode;
					xmlText(value: expression): textNode;
					xpath(columnDef: string, path: string, namespaceBindings?: Record<string, string>): expression;
				}
			}
		}
	}
}
