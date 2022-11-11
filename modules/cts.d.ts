// deno-lint-ignore-file no-empty-interface ban-types
/// <reference path="../builtins/Document.d.ts" />
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/NodeBuilder.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./math.d.ts" />
/// <reference path="./xs.d.ts" />

declare module 'cts' {
	global {
		const cts: MarkLogic.cts.CTS;

		namespace MarkLogic.cts {
			type ID = number | string;

			/** Opaque MarkLogic data types returned by/used by functions in the CTS module */
			// Generic common ancestor for all other query types
			interface query {}
			// Specific query types to guarantee that we're not passing the wrong types to certain functions
			interface afterQuery extends query {}
			interface andNotQuery<P extends query, N extends query> extends query {}
			interface andQuery extends query {}
			interface beforeQuery extends query {}
			interface boostQuery extends query {}
			interface collectionQuery extends query {}
			interface directoryQuery extends query {}
			interface documentQuery extends query {}
			interface documentFragmentQuery<T extends query = query> extends query {}
			interface elementAttributePairGeospatialQuery extends query {}
			interface elementAttributeRangeQuery extends query {}
			interface elementAttributeValueQuery extends query {}
			interface elementAttributeWordQuery extends query {}
			interface elementChildGeospatialQuery extends query {}
			interface elementGeospatialQuery extends query {}
			interface elementPairGeospatialQuery extends query {}
			interface elementQuery extends query {}
			interface elementRangeQuery extends query {}
			interface elementValueQuery extends query {}
			interface elementWordQuery extends query {}
			interface falseQuery extends query {}
			interface fieldRangeQuery<T = unknown> extends query {}
			interface fieldValueQuery extends query {}
			interface fieldWordQuery extends query {}
			interface geospatialRegionQuery extends query {}
			interface jsonPropertyChildGeospatialQuery extends query {}
			interface jsonPropertyGeospatialQuery extends query {}
			interface jsonPropertyPairGeospatialQuery extends query {}
			interface jsonPropertyRangeQuery<T = unknown> extends query {}
			interface jsonPropertyScopeQuery<T = unknown> extends query {}
			interface jsonPropertyValueQuery extends query {}
			interface jsonPropertyWordQuery extends query {}
			interface locksFragmentQuery<T extends query = query> extends query {}
			interface lsqtQuery extends query {}
			interface nearQuery extends query {}
			interface notInQuery<P extends query, N extends query> extends query {}
			interface notQuery extends query {}
			interface orQuery extends query {}
			interface pathGeospacialQuery extends query {}
			interface pathRangeQuery<T = unknown> extends query {}
			interface periodCompareQuery extends query {}
			interface periodRangeQuery extends query {}
			interface propertiesFragmentQuery<T extends query = query> extends query {}
			interface rangeQuery extends query {}
			interface registeredQuery extends query {}
			interface reverseQuery extends query {}
			interface similarQuery extends query {}
			interface tripleRangeQuery extends query {}
			interface trueQuery extends query {}
			interface wordQuery extends query {}

			// Misc. opaque types
			type box = [number, number, number, number];
			interface circle {}
			interface complexPolygon {}
			interface entity {}
			interface entityDictionary {}
			interface linestring {}
			interface order {}
			interface period {}
			type point = [number, number]
			interface polygon {}
			interface reference {}
			interface token {}

			type region = box | circle | polygon | complexPolygon | point;

			// Additional defined return types
			interface relevanceInfoScore {
				readonly formula: string;
				readonly computation: string;
				readonly value: number;
			}

			interface relevanceInfoTerm {
				readonly weight: number;
				readonly score: relevanceInfoScore;
				readonly key: string;
				readonly annotation: string;
			}

			interface relevanceInfo {
				readonly score: relevanceInfoScore;
				readonly confidence: relevanceInfoScore;
				readonly fitness: relevanceInfoScore;
				readonly uri: string;
				readonly path: string;
				readonly term: relevanceInfoTerm;
			}

			interface relevanceInfoElement extends Element {}

			// Helper types and/or commonly used aliases
			type SingleOrMultiple<T = unknown> = T | T[] | Sequence<T>/* Maybe? Not sure. */;

			type QueryOperator = '<' | '<=' | '>' | '>=' | '=' | '!=';
			type QueryValue = string | number | boolean | null | unknown[] | object;

			// Excludes deprecated CTS functions which have been moved to other modules
			interface CTS {
				afterQuery(timestamp: number | string): afterQuery;
				afterQueryTimestamp(query: afterQuery): number | string;
				aggregate(nativePlugin: string, aggregateName: string, rangeIndices: reference[], argument?: Sequence, options?: string[], query?: query, forestIds?: ID[]): Sequence;
				andNotQuery<P extends query, N extends query>(positiveQuery: P, negativeQuery: N): andNotQuery<P, N>;
				andNotQueryNegativeQuery<P extends query, N extends query>(query: andNotQuery<P, N>): N;
				andNotQueryPositiveQuery<P extends query, N extends query>(query: andNotQuery<P, N>): P;
				andQuery(queries: query[], options?: string[]): andQuery;
				andQueryOptions(query: andQuery): Sequence<string>;
				andQueryQueries(query: andQuery): Sequence<query>;
				avgAggregate(rangeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): xs.anyAtomicType;
				beforeQuery(timestamp: number | string): beforeQuery;
				beforeQueryTimestamp(query: beforeQuery): number | string;
				boostQuery(matchingQuery: query, boostingQuery: query): boostQuery;
				boostQueryBoostingQuery(query: boostQuery): query;
				boostQueryMatchingQuery(query: boostQuery): query;
				box(south: number, west: number, north: number, east: number): box;
				boxEast(box: box): number;
				boxNorth(box: box): number;
				boxSouth(box: box): number;
				boxWest(box: box): number;
				circle(radius: number, center: point): circle;
				circleCenter(circle: circle): point;
				circleRadius(circle: circle): number;
				classify(nodes: unknown[], classifier: object, options?: object, trainingNodes?: unknown[]): unknown[];
				cluster(nodes: unknown[], options?: object): object;
				collectionMatch(pattern: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				collectionQuery(uris: SingleOrMultiple<string>): collectionQuery;
				collectionQueryUris(query: collectionQuery): Sequence<string>;
				collectionReference(options?: string[]): reference;
				collections(start?: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence<string>;
				columnRangeQuery(schema: string, view: string, column: string, value: QueryValue, operator?: QueryOperator, options?: string[], weight?: number): tripleRangeQuery;
				complexPolygon(outer: polygon, inner: polygon[]): complexPolygon;
				complexPolygonInner(polygon: complexPolygon): Sequence<polygon>;
				complexPolygonOuter(polygon: complexPolygon): polygon;
				confidence(node: Node): number;
				confidenceOrder(options?: string[]): order;
				contains(nodes: Sequence<Node>, query: query): boolean;
				correlation(ref1: reference, ref2: reference, options?: string[], query?: query, forestIds?: ID[]): number;
				countAggregate(rangeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): number;
				covariance(ref1: reference, ref2: reference, options?: string[], query?: query, forestIds?: ID[]): number;
				covarianceP(ref1: reference, ref2: reference, options?: string[], query?: query, forestIds?: ID[]): number;
				deregister(id: ID): null;
				directoryQuery(uris: string[], depth?: '1' | 'infinity'): directoryQuery;
				directoryQueryDepth(query: directoryQuery): '1' | 'infinity';
				directoryQueryUris(query: directoryQuery): Sequence<string>;
				distinctiveTerms(nodes: Node[], options?: Node): object;
				doc<T = unknown>(uri: string): Document<T> | null;
				documentFragmentQuery<T extends query>(query: T): documentFragmentQuery<T>;
				documentFragmentQueryQuery<T extends query>(query: documentFragmentQuery<T>): T;
				documentOrder(options?: string[]): order;
				documentQuery(uris: SingleOrMultiple<string>): documentQuery;
				documentQueryUris(query: documentQuery): Sequence<string>;
				elementAttributePairGeospatialBoxes(parentElementNames: xs.QName[], latitudeNames: xs.QName[], longitudeNames: xs.QName[], latitudeBounds?: number[], longitudeBounds?: number[], options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence<box>;
				elementAttributePairGeospatialQuery(elementNames: xs.QName[], latitudeAttributeNames: xs.QName[], longitudeAttributeNames: xs.QName[], regions: SingleOrMultiple<region>, options?: string[], weight?: number): elementAttributePairGeospatialQuery;
				elementAttributePairGeospatialQueryElementName(query: elementAttributePairGeospatialQuery): Sequence<xs.QName>;
				elementAttributePairGeospatialQueryLatitudeName(query: elementAttributePairGeospatialQuery): Sequence<xs.QName>;
				elementAttributePairGeospatialQueryLongitudeName(query: elementAttributePairGeospatialQuery): Sequence<xs.QName>;
				elementAttributePairGeospatialQueryOptions(query: elementAttributePairGeospatialQuery): Sequence<string>;
				elementAttributePairGeospatialQueryWeight(query: elementAttributePairGeospatialQuery): number;
				elementAttributePairGeospatialValueMatch(elementNames: xs.QName[], latitudeNames: xs.QName[], longitudeNames: xs.QName[], pattern: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementAttributePairGeospatialValues(elementNames: xs.QName[], latitudeNames: xs.QName[], longitudeNames: xs.QName[], start?: point, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence<point>;
				elementAttributeRangeQuery(elementNames: xs.QName[], attributeNames: xs.QName[], operator: QueryOperator, value: SingleOrMultiple<QueryValue>, options?: string[], weight?: number): elementAttributeRangeQuery;
				elementAttributeRangeQueryAttributeName(query: elementAttributeRangeQuery): Sequence<xs.QName>;
				elementAttributeRangeQueryElementName(query: elementAttributeRangeQuery): Sequence<xs.QName>;
				elementAttributeRangeQueryOperator(query: elementAttributeRangeQuery): QueryOperator;
				elementAttributeRangeQueryOptions(query: elementAttributeRangeQuery): Sequence<string>;
				elementAttributeRangeQueryValue(query: elementAttributeRangeQuery): Sequence<QueryValue>;
				elementAttributeRangeQueryWeight(query: elementAttributeRangeQuery): number;
				elementAttributeReferenc(element: xs.QName, attribute: xs.QName, options?: string[]): reference;
				elementAttributeValueCoOccurrences(el1Name: xs.QName, attr1Name: xs.QName, el2Name: xs.QName, attr2Name: xs.QName, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementAttributeValueGeospatialCoOccurrences(elementName: xs.QName, attributeName: xs.QName, geoElementName: xs.QName, coordChildName1?: xs.QName, coordChildName2?: xs.QName, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementAttributeValueMatch(elementNames: xs.QName[], attributeNames: xs.QName[], pattern: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementAttributeValueQuery(elementNames: xs.QName[], attributeNames: xs.QName[], text: SingleOrMultiple<string>, options?: string[], weight?: number): elementAttributeValueQuery;
				elementAttributeValueQueryAttributeName(query: elementAttributeValueQuery): Sequence<xs.QName>;
				elementAttributeValueQueryElementName(query: elementAttributeValueQuery): Sequence<xs.QName>;
				elementAttributeValueQueryOptions(query: elementAttributeValueQuery): Sequence<string>;
				elementAttributeValueQueryText(query: elementAttributeValueQuery): Sequence<string>;
				elementAttributeValueQueryWeight(query: elementAttributeValueQuery): number;
				elementAttributeValueRanges(elementNames: xs.QName[], attributeNames: xs.QName[], bounds?: (string | number | boolean | null | unknown[] | object)[], options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementAttributeValues(elementNames: xs.QName[], attributeNames: xs.QName[], start?: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementAttributeWordMatch(elementNames: xs.QName[], attributeNames: xs.QName[], pattern: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementAttributeWordQuery(elementNames: xs.QName[], attributeNames: xs.QName[], text: SingleOrMultiple<string>, options?: string[], weight?: number): elementAttributeWordQuery;
				elementAttributeWordQueryAttributeName(query: elementAttributeWordQuery): Sequence<xs.QName>;
				elementAttributeWordQueryElementName(query: elementAttributeWordQuery): Sequence<xs.QName>;
				elementAttributeWordQueryOptions(query: elementAttributeWordQuery): Sequence<string>;
				elementAttributeWordQueryText(query: elementAttributeWordQuery): Sequence<string>;
				elementAttributeWordQueryWeight(query: elementAttributeWordQuery): number;
				elementAttributeWords(elementNames: xs.QName[], attributeNames: xs.QName[], start: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementChildGeospatialBoxes(parentElementNames: xs.QName[], childElementNames: xs.QName[], latitudeBounds?: number[], longitudeBounds?: number[], options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementChildGeospatialQuery(parentElementNames: xs.QName[], childElementNames: xs.QName[], regions: region[], options?: string[], weight?: number): elementChildGeospatialQuery;
				elementChildGeospatialQueryChildName(query: elementChildGeospatialQuery): Sequence<xs.QName>;
				elementChildGeospatialQueryElementName(query: elementChildGeospatialQuery): Sequence<xs.QName>;
				elementChildGeospatialQueryOptions(query: elementChildGeospatialQuery): Sequence<string>;
				elementChildGeospatialQueryRegion(query: elementChildGeospatialQuery): Sequence<region>;
				elementChildGeospatialQueryWeight(query: elementChildGeospatialQuery): number;
				elementChildGeospatialValueMatch(elementNames: xs.QName[], childNames: xs.QName[], pattern: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementChildGeospatialValues(elementNames: xs.QName[], childNames: xs.QName[], start?: point, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementGeospatialBoxes(elementNames: xs.QName[], latitudeBounds?: number[], longitudeBounds?: number[], options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementGeospatialQuery(elementNames: xs.QName[], regions: region[], options?: string[], weight?: number): elementGeospatialQuery;
				elementGeospatialQueryElementName(query: elementGeospatialQuery): Sequence<xs.QName>;
				elementGeospatialQueryOptions(query: elementGeospatialQuery): Sequence<string>;
				elementGeospatialQueryRegion(query: elementGeospatialQuery): Sequence<region>;
				elementGeospatialQueryWeight(query: elementGeospatialQuery): number;
				elementGeospatialValueMatch(elementNames: xs.QName[], pattern: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementGeospatialValues(elementNames: xs.QName[], start?: point, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementPairGeospatialBoxes(parentElementNames: xs.QName[], latitudeNames: xs.QName[], longitudeNames: xs.QName[], latitudeBounds?: number[], longitudeBounds?: number[], options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementPairGeospatialQuery(parentElementNames: xs.QName[], latitudeNames: xs.QName[], longitudeNames: xs.QName[], regions: region[], options?: string[], weight?: number): elementPairGeospatialQuery;
				elementPairGeospatialQueryElementName(query: elementPairGeospatialQuery): Sequence<xs.QName>;
				elementPairGeospatialQueryLatitudeName(query: elementPairGeospatialQuery): Sequence<xs.QName>;
				elementPairGeospatialQueryLongitudeName(query: elementPairGeospatialQuery): Sequence<xs.QName>;
				elementPairGeospatialQueryOptions(query: elementPairGeospatialQuery): Sequence<string>;
				elementPairGeospatialQueryRegion(query: elementPairGeospatialQuery): Sequence<region>;
				elementPairGeospatialQueryWeight(query: elementPairGeospatialQuery): number;
				elementPairGeospatialValueMatch(elementNames: xs.QName[], latitudeNames: xs.QName[], longitudeNames: xs.QName[], childNames: xs.QName[], pattern: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementPairGeospatialValues(elementNames: xs.QName[], latitudeNames: xs.QName[], longitudeNames: xs.QName[], childNames: xs.QName[], start?: point, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementQuery(elementNames: xs.QName | xs.QName[], query: query): elementQuery;
				elementQueryElementName(query: elementQuery): Sequence<xs.QName>;
				elementQueryQuery(query: elementQuery): query;
				elementRangeQuery(elementNames: xs.QName | xs.QName[], operator: QueryOperator, value: SingleOrMultiple<QueryValue>, options?: string[], weight?: number): elementRangeQuery;
				elementRangeQueryElementName(query: elementRangeQuery): Sequence<xs.QName>;
				elementRangeQueryOperator(query: elementRangeQuery): QueryOperator;
				elementRangeQueryOptions(query: elementRangeQuery): Sequence<string>;
				elementRangeQueryValue(query: elementRangeQuery): Sequence<QueryValue>;
				elementRangeQueryWeight(query: elementRangeQuery): number;
				elementReference(element: xs.QName, options?: string[]): reference;
				elementValueCoOccurrences(element1Name: xs.QName, element2Name: xs.QName, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementValueGeospatialCoOccurrences(element1Name: xs.QName, geoElementName: xs.QName, coordChildName1?: xs.QName, coordChildName2?: xs.QName, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementValueMatch(elementNames: xs.QName[], pattern: xs.anyAtomicType, options?: string, query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementValueQuery(elementNames: xs.QName[], text?: string[], options?: string[], weight?: number): elementValueQuery;
				elementValueQueryElementName(query: elementValueQuery): Sequence<xs.QName>;
				elementValueQueryOptions(query: elementValueQuery): Sequence<string>;
				elementValueQueryText(query: elementValueQuery): Sequence<string>;
				elementValueQueryWeight(query: elementValueQuery): number;
				elementValueRanges(elementNames: xs.QName | xs.QName[], bounds?: QueryValue[], options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementValues(elementNames: xs.QName | xs.QName[], start?: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementWalk(node: Node, elements: xs.QName | xs.QName[], callback: ((builder: NodeBuilder, node: Node) => string), builder: NodeBuilder): null;
				elementWordMatch(elementNames: xs.QName[], pattern: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				elementWordQuery(elementNames: xs.QName | xs.QName[], text: string[], options?: string[], weight?: number): elementWordQuery;
				elementWordQueryElementName(query: elementWordQuery): Sequence<xs.QName>;
				elementWordQueryOptions(query: elementWordQuery): Sequence<string>;
				elementWordQueryText(query: elementWordQuery): Sequence<string>;
				elementWordQueryWeight(query: elementWordQuery): number;
				elementWords(elementNames: xs.QName[], start?: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				entity(id: string, normalizedText: string, text: string, type: string): entity;
				entityDictionary(entities: entity[], options?: string[]): entityDictionary;
				entityDictionaryGet(uri: string): entityDictionary;
				entityDictionaryParse(contents: string[], options?: string[]): entityDictionary;
				entityHighlight(node: Node, callback: ((builder: NodeBuilder, entityType: unknown, text: string, normText: string, entityId: unknown, node: Node, start: unknown) => unknown), builder: NodeBuilder, dict?: entityDictionary): null;
				entityWalk(node: Node, callback: ((text: string, node: Node, entityType: unknown, entityId: unknown, normText: string, start: unknown) => unknown), dict?: entityDictionary): null;
				estimate(query: query, options?: string[], qualityWeight?: number, forestIds?: ID[], maximum?: number): number;
				exists(query: query, options?: string[], qualityWeight?: number, forestIds?: ID[]): boolean;
				falseQuery(): falseQuery;
				fieldRangeQuery<T = unknown>(fieldName: SingleOrMultiple<string>, operator: QueryOperator, value: SingleOrMultiple<T>, options?: string[], weight?: number): fieldRangeQuery<T>;
				fieldRangeQueryFieldName(query: fieldRangeQuery): Sequence<string>;
				fieldRangeQueryOperator(query: fieldRangeQuery): string;
				fieldRangeQueryOptions(query: fieldRangeQuery): Sequence<string>;
				fieldRangeQueryValue<T = unknown>(query: fieldRangeQuery<T>): Sequence<T>;
				fieldRangeQueryWeight(query: fieldRangeQuery): number;
				fieldReference(field: string, options?: string[]): reference;
				fieldValueCoOccurrences(field1Name: string, field2Name: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				fieldValueMatch(fieldNames: SingleOrMultiple<string>, pattern: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				fieldValueQuery(fieldNames: SingleOrMultiple<string>, text: SingleOrMultiple<QueryValue>, options?: string[], weight?: number): fieldValueQuery;
				fieldValueQueryFieldName(query: fieldValueQuery): Sequence<string>;
				fieldValueQueryOptions(query: fieldValueQuery): Sequence<string>;
				fieldValueQueryText(query: fieldValueQuery): Sequence<QueryValue>;
				fieldValueQueryWeight(query: fieldValueQuery): number;
				fieldValueRanges(fieldNames: SingleOrMultiple<string>, bounds?: QueryValue[], options?: string, query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				fieldValues(fieldNames: SingleOrMultiple<string>, start?: xs.anyAtomicType, options?: string, query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				fieldWordMatch(fieldNames: SingleOrMultiple<string>, pattern: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				fieldWordQuery(fieldNames: SingleOrMultiple<string>, text: string[], options?: string, weight?: number): fieldWordQuery;
				fieldWordQueryFieldName(query: fieldWordQuery): Sequence<string>;
				fieldWordQueryOptions(query: fieldWordQuery): Sequence<string>;
				fieldWordQueryText(query: fieldWordQuery): Sequence<string>;
				fieldWordQueryWeight(query: fieldWordQuery): number;
				fieldWords(fieldNames: SingleOrMultiple<string>, start?: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				fitness(node?: Node): number;
				fitnessOrder(options?: string[]): order;
				frequency(value: unknown): number;
				geospatialAttributePairReference(element: xs.QName, latitude: xs.QName, longitude: xs.QName, options?: string[]): reference;
				geospatialBoxes(geoIndexes: reference[], latitudeBounds?: number[], longitudeBounds?: number, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence<box>;
				geospatialCoOccurences(geoElementName1: xs.QName, geoElementName2: xs.QName, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				geospatialCoOccurences(geoElementName1: xs.QName, child1Name: xs.QName, geoElementName2: xs.QName, child2Name: xs.QName, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				geospatialCoOccurences(geoElementName1: xs.QName, child1Name1: xs.QName, child1Name2: xs.QName, geoElementName2: xs.QName, child2Name1: xs.QName, child2Name2: xs.QName, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				geospatialElementChildReference(element: xs.QName, child: xs.QName, options?: string[]): reference;
				geospatialElementPairReference(element: xs.QName, latitude: xs.QName, longitude: xs.QName, options?: string[]): reference;
				geospatialElementReference(element: xs.QName, options?: string[]): reference;
				geospatialJsonPropertyChildReference(property: xs.QName, child: xs.QName, options?: string[]): reference;
				geospatialJsonPropertyPairReference(property: xs.QName, latitude: xs.QName, longitude: xs.QName, options?: string[]): reference;
				geospatialJsonPropertyReference(property: xs.QName, options?: string[]): reference;
				geospatialPathReference(pathExpression: string, options?: string[], namespaces?: object): reference;
				geospatialRegionPathReference(pathExpression: string, options?: string[], namespaces?: object, geohashPrecision?: number, units?: string, invalidValues?: string): reference;
				geospatialRegionQuery(geospatialRegionReference: SingleOrMultiple<reference>, operation?: string, regions?: region | region[], options?: string[], weight?: number): geospatialRegionQuery;
				geospatialRegionQueryOperation(query: geospatialRegionQuery): string;
				geospatialRegionQueryOptions(query: geospatialRegionQuery): Sequence<string>;
				geospatialRegionQueryReference(query: geospatialRegionQuery): Sequence<reference>;
				geospatialRegionQueryRegion(query: geospatialRegionQuery): Sequence<region>;
				geospatialRegionQueryWeight(query: geospatialRegionQuery): number;
				highlight(node: Node, query: query, callback: ((builder: NodeBuilder, text: string, node: Node, queries: query[], start: number) => string), builder: NodeBuilder): null;
				indexOrder(index: reference, options?: string[]): order;
				jsonPropertyChildGeospatialQuery(parentPropertyNames: SingleOrMultiple<string>, childPropertyNames: SingleOrMultiple<string>, regions: region[], options?: string[], weight?: number): jsonPropertyChildGeospatialQuery;
				jsonPropertyChildGeospatialQueryChildName(query: jsonPropertyChildGeospatialQuery): Sequence<string>;
				jsonPropertyChildGeospatialQueryOptions(query: jsonPropertyChildGeospatialQuery): Sequence<string>;
				jsonPropertyChildGeospatialQueryPropertyName(query: jsonPropertyChildGeospatialQuery): Sequence<string>;
				jsonPropertyChildGeospatialQueryRegion(query: jsonPropertyChildGeospatialQuery): Sequence<region>;
				jsonPropertyChildGeospatialQueryWeight(query: jsonPropertyChildGeospatialQuery): number;
				jsonPropertyGeospatialQuery(propertyNames: SingleOrMultiple<string>, regions: region[], options?: string[], weight?: number): jsonPropertyGeospatialQuery;
				jsonPropertyGeospatialQueryOptions(query: jsonPropertyGeospatialQuery): Sequence<string>;
				jsonPropertyGeospatialQueryPropertyName(query: jsonPropertyGeospatialQuery): Sequence<string>;
				jsonPropertyGeospatialQueryRegion(query: jsonPropertyGeospatialQuery): Sequence<region>;
				jsonPropertyGeospatialQueryWeight(query: jsonPropertyGeospatialQuery): number;
				jsonPropertyPairGeospatialQuery(propertyNames: SingleOrMultiple<string>, latitudePropertyNames: SingleOrMultiple<string>, longitudePropertyNames: SingleOrMultiple<string>, regions: region[], options?: string[], weight?: number): jsonPropertyPairGeospatialQuery;
				jsonPropertyPairGeospatialQueryLatitudeName(query: jsonPropertyPairGeospatialQuery): Sequence<string>;
				jsonPropertyPairGeospatialQueryLongitudeName(query: jsonPropertyPairGeospatialQuery): Sequence<string>;
				jsonPropertyPairGeospatialQueryOptions(query: jsonPropertyPairGeospatialQuery): Sequence<string>;
				jsonPropertyPairGeospatialQueryPropertyName(query: jsonPropertyPairGeospatialQuery): Sequence<string>;
				jsonPropertyPairGeospatialQueryRegion(query: jsonPropertyPairGeospatialQuery): Sequence<region>;
				jsonPropertyPairGeospatialQueryWeight(query: jsonPropertyPairGeospatialQuery): number;
				jsonPropertyRangeQuery<T = unknown>(propertyNames: SingleOrMultiple<string>, operator: QueryOperator, value: SingleOrMultiple<T>, options?: string[], weight?: number): jsonPropertyRangeQuery<T>;
				jsonPropertyRangeQueryOperator(query: jsonPropertyRangeQuery): string;
				jsonPropertyRangeQueryOptions(query: jsonPropertyRangeQuery): Sequence<string>;
				jsonPropertyRangeQueryPropertyName(query: jsonPropertyRangeQuery): Sequence<string>;
				jsonPropertyRangeQueryRegion(query: jsonPropertyRangeQuery): Sequence<region>;
				jsonPropertyRangeQueryWeight(query: jsonPropertyRangeQuery): number;
				jsonPropertyReference(property: string, options?: string[]): reference;
				jsonPropertyScopeQuery(propertyNames: SingleOrMultiple<string>, query: query): jsonPropertyScopeQuery<query>;
				jsonPropertyScopeQuery(propertyNames: SingleOrMultiple<string>, query: string): jsonPropertyScopeQuery<string>;
				jsonPropertyScopeQueryPropertyName(query: jsonPropertyScopeQuery): Sequence<string>;
				jsonPropertyScopeQueryQuery<T = unknown>(query: jsonPropertyScopeQuery<T>): T;
				jsonPropertyValueQuery(propertyNames: SingleOrMultiple<string>, value: SingleOrMultiple<QueryValue>, options?: string[], weight?: number): jsonPropertyValueQuery;
				jsonPropertyValueQueryOptions(query: jsonPropertyValueQuery): Sequence<string>;
				jsonPropertyValueQueryPropertyName(query: jsonPropertyValueQuery): Sequence<string>;
				jsonPropertyValueQueryText(query: jsonPropertyValueQuery): Sequence<string>;
				jsonPropertyValueQueryValue(query: jsonPropertyValueQuery): Sequence<QueryValue>;
				jsonPropertyValueQueryWeight(query: jsonPropertyValueQuery): number;
				jsonPropertyWordMatch(propertyNames: SingleOrMultiple<string>, pattern: string, options?: string, query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				jsonPropertyWordQuery(propertyNames: SingleOrMultiple<string>, text: string, options?: string[], weight?: number): jsonPropertyWordQuery;
				jsonPropertyWordQueryOptions(query: jsonPropertyWordQuery): Sequence<string>;
				jsonPropertyWordQueryPropertyName(query: jsonPropertyWordQuery): Sequence<string>;
				jsonPropertyWordQueryText(query: jsonPropertyWordQuery): Sequence<string>;
				jsonPropertyWordQueryWeight(query: jsonPropertyWordQuery): number;
				jsonPropertyWords(propertyNames: SingleOrMultiple<string>, start?: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				linearModel(values: [reference, reference], options?: string[], query?: query, forestIds?: ID[]): math.linearModel;
				linestring(vertices: point[]): linestring;
				linestringVertices(linestring: linestring): Sequence<point>;
				locksFragmentQuery<T extends query>(query: T): locksFragmentQuery<T>;
				locksFragmentQueryQuery<T extends query>(query: locksFragmentQuery<T>): T;
				lsqtQuery(temporalCollection: string, timestamp?: xs.dateTime, options?: string[], weight?: number): lsqtQuery;
				lsqtQueryOptions(query: lsqtQuery): Sequence<string>;
				lsqtQueryTemporalCollection(query: lsqtQuery): string;
				lsqtQueryTimestamp(query: lsqtQuery): xs.dateTime;
				lsqtQueryWeight(query: lsqtQuery): number;
				matchRegions(rangeIndices: reference[], operation: string, regions: region[], options?: string[], query?: query, forestIds?: ID[]): Sequence<region>;
				max(rangeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): xs.anyAtomicType;
				median(numbers: number[]): number;
				min(rangeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): xs.anyAtomicType;
				nearQuery(queries: query[], distance?: number, options?: string, distanceWeight?: number): nearQuery;
				nearQueryDistance(query: nearQuery): number;
				nearQueryOptions(query: nearQuery): Sequence<string>;
				nearQueryQueries(query: nearQuery): Sequence<query>;
				nearQueryWeight(query: nearQuery): number;
				notInQuery<P extends query, N extends query>(positiveQuery: P, negativeQuery: N): notInQuery<P, N>;
				notInQueryNegativeQuery<P extends query, N extends query>(query: notInQuery<P, N>): N;
				notInQueryPositiveQuery<P extends query, N extends query>(query: notInQuery<P, N>): P;
				notQuery(query: query): notQuery;
				notQueryQuery(query: notQuery): query;
				notQueryWeight(query: notQuery): number;
				orQuery(queries: query[], options?: string[]): orQuery;
				orQueryOptions(query: orQuery): Sequence<string>;
				orQueryQueries(query: orQuery): Sequence<query>;
				parse(query: string, bindings?: object): query;
				partOfSpeech(token: token): string;
				pathGeospacialQuery(pathExpression: SingleOrMultiple<string>, regions: region[], options?: string, weight?: number): pathGeospacialQuery;
				pathGeospacialQueryOptions(query: pathGeospacialQuery): Sequence<string>;
				pathGeospacialQueryPathExpression(query: pathGeospacialQuery): Sequence<string>;
				pathGeospacialQueryRegion(query: pathGeospacialQuery): Sequence<region>;
				pathGeospacialQueryWeight(query: pathGeospacialQuery): number
				pathRangeQuery<T = unknown>(pathExpression: SingleOrMultiple<string>, operator: QueryOperator, value: SingleOrMultiple<T>, options?: string, weight?: number): pathRangeQuery<T>;
				pathRangeQueryOperator(query: pathRangeQuery): Sequence<QueryOperator>;
				pathRangeQueryOptions(query: pathRangeQuery): Sequence<string>;
				pathRangeQueryPathName(query: pathRangeQuery): Sequence<string>;
				pathRangeQueryValue<T = unknown>(query: pathRangeQuery<T>): Sequence<T>;
				pathRangeQueryWeight(query: pathRangeQuery): number;
				pathReference(pathExpression: string, options?: string[], namespaces?: object): reference;
				percentage(n: number[], p: number[]): Sequence<number>;
				percentRank(v: QueryValue[], value: xs.anyAtomicType, options?: string[]): number;
				period(start: xs.dateTime, end: xs.dateTime): period;
				periodCompare(period1: period, operator: QueryOperator, period2: period): boolean;
				periodCompareQuery(axis1: string, operator: QueryOperator, axis2: string, options?: string[]): periodCompareQuery;
				periodCompareQueryAxis1(query: periodCompareQuery): string;
				periodCompareQueryAxis2(query: periodCompareQuery): string;
				periodCompareQueryOperator(query: periodCompareQuery): string;
				periodCompareQueryOptions(query: periodCompareQuery): Sequence<string>;
				periodRangeQuery(axis: string, operator: QueryOperator, period?: SingleOrMultiple<period>, options?: string[]): periodRangeQuery;
				periodRangeQueryAxis(query: periodRangeQuery): string;
				periodRangeQueryOperator(query: periodRangeQuery): string;
				periodRangeQueryOptions(query: periodRangeQuery): Sequence<string>;
				periodRangeQueryPeriod(query: periodRangeQuery): Sequence<period>;
				plan(query: query, options?: string[], qualityWeight?: number, forestIds?: ID[], maximum?: number): object[];
				point(latitude: number, longitude: number): point;
				pointLatitude(point: point): number;
				pointLongitude(point: point): number;
				polygon(vertices: point[]): polygon;
				polygonVertices(polygon: polygon): Sequence<point>;
				propertiesFragmentQuery<T extends query>(query: T): propertiesFragmentQuery<T>;
				propertiesFragmentQueryQuery<T extends query>(query: propertiesFragmentQuery<T>): T;
				quality(node?: Node): number;
				qualityOrder(options?: string[]): order;
				query(query: Node): query;
				rangeQuery(indices: SingleOrMultiple<reference>, operator: QueryOperator, value: SingleOrMultiple<QueryValue>, options?: string[], weight?: number): rangeQuery;
				rangeQueryIndex(query: rangeQuery): Sequence<reference>;
				rangeQueryOperator(query: rangeQuery): QueryOperator;
				rangeQueryOptions(query: rangeQuery): Sequence<string>;
				rangeQueryValue(query: rangeQuery): Sequence<QueryValue>;
				rangeQueryWeight(query: rangeQuery): number;
				rank(values: QueryValue[], value: xs.anyAtomicType, options?: string[]): number;
				referenceCollation(index: reference): string;
				referenceCoordinateSystem(index: reference): string;
				referenceNamespaces(index: reference): Record<string, string>;
				referenceNullable(reference: reference): boolean;
				referenceParse(node: Node): reference;
				referenceScalarType(index: reference): string;
				register(query: query): ID;
				registeredQuery(ids: ID[], options?: string[], weight?: number): registeredQuery;
				registeredQueryIds(query: registeredQuery): Sequence<ID>;
				registeredQueryOptions(query: registeredQuery): Sequence<string>;
				registeredQueryWeight(query: registeredQuery): number;
				relevanceInfo(node?: Node, outputKind?: string): relevanceInfo | relevanceInfoElement;
				remainder(node?: Node): number;
				reverseQuery(nodes: Node[], weight?: number): reverseQuery;
				reverseQueryNodes(query: reverseQuery): Sequence<Node>;
				reverseQueryWeight(query: reverseQuery): number;
				score(node?: Node): number;
				scoreOrder(options?: string[]): order;
				search(query: query, options?: string[], qualityWeight?: number, forestIds?: ID[]): Sequence<Document>;
				similarQuery(nodes: Node[], weight?: number, options?: Node): similarQuery;
				similarQueryNodes(query: similarQuery): Sequence<Node>;
				similarQueryWeight(query: similarQuery): number;
				stddev(rangeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): number;
				stddevP(rangeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): number;
				stem(text: string, language?: string, partOfSpeech?: string): Sequence<string>;
				sumAggregate(rangeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): xs.anyAtomicType;
				thresholds(computedLabels: unknown[], knownLabels: unknown[], recallWeight?: number): object[];
				tokenize(text: string, language?: string, field?: string): Sequence<string>;
				train(nodes: Node[], labels: unknown[], options?: object): object;
				tripleRangeQuery(subject: SingleOrMultiple<QueryValue>, predicate: SingleOrMultiple<QueryValue>, object: SingleOrMultiple<QueryValue>, operator?: (QueryOperator | 'sameTerm')[], options?: string[], weight?: number): tripleRangeQuery;
				tripleRangeQueryObject(query: tripleRangeQuery): Sequence<QueryValue>;
				tripleRangeQueryOperator(query: tripleRangeQuery): Sequence<QueryOperator | 'sameTerm'>;
				tripleRangeQueryOptions(query: tripleRangeQuery): Sequence<string>;
				tripleRangeQueryPredicate(query: tripleRangeQuery): Sequence<QueryValue>;
				tripleRangeQuerySubject(query: tripleRangeQuery): Sequence<QueryValue>;
				tripleRangeQueryWeight(query: tripleRangeQuery): number;
				triples(subject?: SingleOrMultiple<QueryValue>, predicate?: SingleOrMultiple<QueryValue>, object?: SingleOrMultiple<QueryValue>, operator?: (QueryOperator | 'sameTerm')[], options?: string[], query?: query, forestIds?: ID[]): Sequence;
				tripleValueStatistics(values: SingleOrMultiple<QueryValue>, forestIds?: ID[]): Sequence;
				trueQuery(): trueQuery;
				unordered(): order;
				uriMatch(pattern: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence<string>;
				uriReference(): reference;
				uris(start?: string, options?: string[] | null, query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence<string>;
				validDocumentPatchPath(str: string, namespaces?: object): boolean;
				validExtractPath(path: string, namespaces?: object): boolean;
				validIndexPath(path: string, ignoreNS?: boolean): boolean;
				validOpticPath(path: string, namespaces?: object): boolean;
				validTdeContext(path: string, namespaces?: object): boolean;
				valueCoOccurrences(rangeIndex1: reference, rangeIndex2: reference, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				valueMatch(rangeIndices: reference | reference[], pattern: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				valueRanges(rangeIndices: reference | reference[], bounds: SingleOrMultiple<QueryValue>, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				values(rangeIndices: SingleOrMultiple<reference>, start?: xs.anyAtomicType, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				valueTuples(rangeIndices: reference[], options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				variance(randeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): number;
				varianceP(randeIndex: reference, options?: string[], query?: query, forestIds?: ID[]): number;
				walk(node: Node, query: query, callback: ((text: string, node: Node, queries: query[], start: number) => string)): null;
				wordMatch(pattern: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
				wordQuery(text: string[], options?: string[], weight?: number): wordQuery;
				wordQueryOptions(query: wordQuery): Sequence<string>;
				wordQueryText(query: wordQuery): Sequence<string>;
				wordQueryWeight(query: wordQuery): number;
				words(start?: string, options?: string[], query?: query, qualityWeight?: number, forestIds?: ID[]): Sequence;
			}
		}
	}
}

