// deno-lint-ignore-file no-empty-interface
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./cts.d.ts" />

declare module 'georss' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/geospatial/georss'): georss.GeoRSS;
				(module: '/MarkLogic/geospatial/georss.xqy'): georss.GeoRSS;
			}

			namespace georss {
				interface georssElement extends Element {}
				interface line extends georssElement {}
				interface point extends georssElement {}

				interface GeoRSS {
					circle(radius: number, center: point): cts.circle;
					complexPolygon(complexPolygon: Node): cts.complexPolygon;
					geospatialQuery(regions: cts.region | cts.region[], options?: string[], weight?: number): cts.query;
					linestring(linestring: line): cts.linestring;
					parseGeorss(georss: Node[]): Sequence<cts.region>;
					point(point: Node): cts.point;
					polygon(polygonOrPoints: Node | Node[]): cts.polygon;
					toGeorss(region: cts.region | cts.region[], amespace?: string): Sequence<georssElement>;
				}
			}
		}
	}
}
