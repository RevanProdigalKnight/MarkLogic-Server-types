// deno-lint-ignore-file no-empty-interface
/// <reference path="./ModifyPlan.d.ts" />

declare namespace MarkLogic {
	interface columnIdentifier {}
	interface namedGroupdef {}
	interface aggregatedef {}

	interface SampleByOptions {
		readonly limit?: number;
	}

	interface AccessPlan<T = unknown> extends ModifyPlan<T> {
		col(colName: string): columnIdentifier;
		groupToArrays(groups: namedGroupdef[], aggregates?: aggregatedef[]): ModifyPlan<T>;
		sampleBy(options?: SampleByOptions): ModifyPlan<T>;
	}
}
