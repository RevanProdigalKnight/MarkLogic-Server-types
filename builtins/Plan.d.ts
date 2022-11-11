// deno-lint-ignore-file ban-types
/// <reference path="./Element.d.ts" />

/// <reference path="../modules/op.d.ts" />

declare namespace MarkLogic {
	interface ColumnDeclaration {
		readonly name: string;
		readonly type: string;
		readonly collation: string;

		readonly nullable?: boolean;
		readonly invalidValues?: 'skip' | 'reject';
	}

	interface Plan<T = unknown> {
		explain(format?: 'xml' | 'json'): Plan;
		export(): object;
		generateView(schemaName: string, viewName: string, columnDeclarations?: ColumnDeclaration[]): Element;
		result(outputType: null, bindings?: object, options?: string[]): Sequence<T>;
		result(outputType: 'array', bindings?: object, options?: string[]): T[];
		result(outputType?: 'object', bindings?: object, options?: string[]): Sequence<T>;
	}
}
