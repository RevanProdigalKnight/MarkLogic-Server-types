// deno-lint-ignore-file no-empty-interface
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./cts.d.ts" />

declare module 'geokml' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/geospatial/kml'): geokml.GeoKML;
				(module: '/MarkLogic/geospatial/kml.xqy'): geokml.GeoKML;
			}

			namespace geokml {
				interface kmlElement extends Element {}

				interface GeoKML {
					box(box: Node): cts.box;
					circle(radius: number, center: Node): cts.circle;
					complexPolygon(complexPolygon: Node): cts.complexPolygon;
					geospatialQuery(regions: cts.region | cts.region[], options?: string[], weight?: number, namespace?: string): cts.query;
					geospatialQueryFromElements(regions: cts.region | cts.region[], options?: string[], weight?: number): cts.query;
					interiorPolygon(polygon: Node): Sequence<cts.polygon>;
					linestring(linestring: Node): cts.linestring;
					parseKml(kml: Node[]): Sequence<cts.region>;
					point(point: Node): cts.point;
					polygon(polygonOrPoints: Node | Node[]): cts.polygon;
					toKml(region: cts.region | cts.region[], amespace?: string): Sequence<kmlElement>;
				}
			}
		}
	}
}
