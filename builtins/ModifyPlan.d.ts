/// <reference path="./PreparePlan.d.ts" />

/// <reference path="../modules/cts.d.ts" />
/// <reference path="../modules/op.d.ts" />
/// <reference path="../modules/sem.d.ts" />

declare namespace MarkLogic {
	interface ModifyPlan<T = unknown> extends PreparePlan<T> {
		bind(columns: op.columnIdentifier | op.columnIdentifier[]): ModifyPlan<T>;
		bindAs(column: string, expression: op.expression): ModifyPlan<T>;
		except(right: PreparePlan): ModifyPlan<T>;
		existsJoin(right: PreparePlan, ondef?: op.ondef, condition?: op.booleanExpression): ModifyPlan<T>;
		facetBy(keys: op.columnIdentifier[], counter?: op.columnIdentifier): ModifyPlan<T>;
		groupBy(groupdef: op.groupdef, aggregatedef?: op.aggregatedef): ModifyPlan<T>;
		groupByUnion(groups: op.groupdef[], aggregates?: op.aggregatedef[]): ModifyPlan<T>;
		intersect(right: PreparePlan): ModifyPlan<T>;
		joinCrossProduct(right: PreparePlan, condition?: op.booleanExpression): ModifyPlan<T>;
		joinDoc(docCol: string | op.columnIdentifier, sourceCol: op.columnIdentifier | op.fragmentIdColDef): ModifyPlan<T>;
		joinDocUri(uriCol: op.columnIdentifier, fragmentIdCol: op.fragmentIdColDef): ModifyPlan<T>;
		joinFullOuter(right: PreparePlan, ondef?: op.ondef, condition?: op.booleanExpression): ModifyPlan<T>;
		joinInner(right: PreparePlan, ondef?: op.ondef, condition?: op.booleanExpression): ModifyPlan<T>;
		joinLeftOuter(right: PreparePlan, ondef?: op.ondef, condition?: op.booleanExpression): ModifyPlan<T>;
		limit(length: number): ModifyPlan<T>;
		notExistsJoin(right: PreparePlan, ondef?: op.ondef, condition?: op.booleanExpression): ModifyPlan<T>;
		offset(start: number): ModifyPlan<T>;
		offsetLimit(start: number, length: number): ModifyPlan<T>;
		orderBy(orderdef: op.orderdef): ModifyPlan<T>;
		prepare(optimize?: 0 | 1 | 2): PreparePlan;
		select(columns: op.columnIdentifier | op.columnIdentifier[], qualifier?: string): ModifyPlan<T>;
		union(right: PreparePlan): ModifyPlan<T>;
		where(filterExpression: cts.query | op.booleanExpression | op.filterdef | sem.store): ModifyPlan<T>;
		whereDistinct(): ModifyPlan<T>;
	}
}
