/// <reference path="../globals.d.ts" />

/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./cts.d.ts" />

declare module 'geo' {
	global {
		const geo: MarkLogic.geo.GEO;

		namespace MarkLogic.geo {
			interface AffineTransformTranslation {
				readonly tx: number;
				readonly ty: number;
			}

			interface AffineTransformScaling {
				readonly sx: number;
				readonly sy: number;

				readonly psc?: cts.point;
			}

			interface AffineTransformRotation {
				readonly angle: number;

				readonly prot?: cts.point;
			}

			interface AffineTransformShearing {
				readonly shxy: number;
				readonly shyx: number;
			}

			interface AffineTransformReflectionObject {
				readonly start: cts.point;
				readonly end: cts.point;
			}

			interface AffineTransformReflectionLineR {
				readonly lineR: AffineTransformReflectionObject;
			}

			interface AffineTransformReflectionPref {
				readonly pref: AffineTransformReflectionObject;
			}

			type AffineTransformReflection = AffineTransformReflectionLineR & AffineTransformReflectionPref;

			interface AffineTransform {
				readonly translation?: AffineTransformTranslation;
				readonly scaling?: AffineTransformScaling;
				readonly rotation?: AffineTransformRotation;
				readonly shearing?: AffineTransformShearing;
				readonly reflection?: AffineTransformReflection;
			}

			type CoordinateSystemName = 'wgs84' | 'wgs84/double' | 'etrs89' | 'etrs89/double' | 'raw' | 'raw/double';
			type DistanceUnit = 'miles' | 'feet' | 'km' | 'meters';

			interface GEO {
				approxCenter(region: cts.region, options?: string[]): cts.point;
				arcIntersection(p1: cts.point, p2: cts.point, q1: cts.point, q2: cts.point, options?: string[]): cts.point;
				bearing(p1: cts.point, p2: cts.point, options?: string[]): number;
				boundingBoxes(region: cts.region, options?: string[]): Sequence<cts.box>;
				box(box: Node): cts.box;
				boxIntersects(box: cts.box, region: cts.region | cts.region[], options?: string[]): boolean;
				circle(radius: number, center: Node): cts.circle;
				circleIntersects(circle: cts.circle, region: cts.region | cts.region[], options?: string[]): boolean;
				circlePolygon(circle: cts.circle, arcTolerance: number, options?: string[]): cts.polygon;
				complexPolygon(complexPolygon: Node): cts.complexPolygon;
				complexPolygonContains(complexPolygon: cts.complexPolygon, region: cts.region | cts.region[], options?: string): boolean;
				complexPolygonIntersects(complexPolygon: cts.complexPolygon, region: cts.region | cts.region[], options?: string): boolean;
				coordinateSystemCanonical(name: CoordinateSystemName, precision?: 'float' | 'double'): string;
				countDistinctVertices(region: cts.region, options?: string[]): number;
				countVertices(region: cts.region): number;
				defaultCoordinateSystem(): CoordinateSystemName;
				destination(p: cts.point, bearing: number, distance: number, options?: string[]): cts.point;
				distance(p1: cts.point, p2: cts.point, options?: string[]): number;
				distanceConvert(distance: number, unit1: DistanceUnit, unit2: DistanceUnit): number;
				ellipsePolygon(center: cts.point, semiMajorAxis: number, semiMinorAxis: number, azimuth: number, arcTolerance: number, options?: string[]): cts.polygon;
				geohashDecode(hash: string): cts.box;
				geohashDecodePoint(hash: string): cts.point;
				geohashEncode(region: cts.region, geohashPrecision?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, options?: string): string;
				geohashNeighbors(hash: string): Record<string, string>;
				geohashPrecisionDimensions(precision: number): Sequence<number>;
				geohashSubhashes(hash: string, which: string): Sequence<string>;
				geospatialQuery(regions: cts.region | cts.region[], options?: string[], weight?: number): cts.query;
				geospatialQueryFromElements(regions: Node | Node[], options?: string[], weight?: number): cts.query;
				geospatialQueryFromNodes(regions: Node | Node[], options?: string[], weight?: number): cts.query;
				interiorPoint(region: cts.region, options?: string[]): cts.point;
				interiorPolygon(polygon: Node): Sequence<cts.polygon>;
				linestring(linestring: Node): cts.linestring;
				linestringConcat(linestrings: cts.linestring[]): cts.linestring;
				linestringReverse(linestrings: cts.linestring): cts.linestring;
				parse(data: Node[]): Sequence<cts.region>;
				parseWkb(data: binary): Sequence<cts.region>;
				parseWkt(data: string | string[]): Sequence<cts.region>;
				point(point: Node): cts.point;
				polygon(polygonOrPoints: Node | Node[]): cts.polygon;
				polygonContains(polygon: cts.polygon, region: cts.region | cts.region[], options?: string[]): boolean;
				polygonIntersects(polygon: cts.polygon, region: cts.region | cts.region[], options?: string[]): boolean;
				polygonToLinestring(polygon: cts.polygon | cts.complexPolygon): Sequence<cts.linestring>;
				regionAffineTransform(region: cts.region, transform: AffineTransform | AffineTransform[], options?: string[]): cts.region;
				regionApproximate(region: cts.region, threshold: number, options?: string[]): cts.region;
				regionClean(region: cts.region, options?: string[]): cts.region;
				regionContains(target: cts.region, region: cts.region | cts.region[], options?: string[]): boolean;
				regionDe9im(region1: cts.region, region2: cts.region, options?: string[]): string;
				regionIntersects(target: cts.region, region: cts.region | cts.region[], options?: string[]): boolean;
				regionRelate(region1: cts.region, operation: 'contains' | 'covered-by' | 'covers' | 'crosses' | 'disjoint' | 'equals' | 'intersects' | 'overlaps' | 'touches' | 'within', region2: cts.region, options?: string[]): boolean;
				removeDuplicateVertices<T extends cts.region>(region: T, options?: string[]): T;
				shortestDistance(p1: cts.point, region: cts.region | cts.region[], options?: string[]): number;
				toWkb(wkb: cts.region | cts.region[]): binary;
				toWkt(wkb: cts.region | cts.region[]): string;
				validateWkb(wkb: binary): boolean;
				validateWkt(wkt: string): boolean;
			}
		}
	}
}
