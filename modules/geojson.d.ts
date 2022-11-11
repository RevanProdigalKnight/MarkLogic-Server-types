/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./cts.d.ts" />

declare module 'geojson' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/geospatial/geojson'): geojson.GeoJSON;
				(module: '/MarkLogic/geospatial/geojson.xqy'): geojson.GeoJSON;
			}

			namespace geojson {
				interface geoNode<Type = string> {
					readonly type: Type;

					readonly bbox?: cts.box;
					readonly geometry?: geoNode;
				}

				interface linestring extends geoNode<'LineString'> {
					readonly coordinates: cts.point[];
				}

				interface multiLinestring extends geoNode<'MultiLineString'> {
					readonly coordinates: cts.point[][];
				}

				interface multiPoint extends geoNode<'MultiPoint'> {
					readonly coordinates: cts.point[];
				}

				interface point extends geoNode<'Point'> {
					readonly coordinates: cts.point;
				}

				interface polygon extends geoNode<'Polygon'> {
					readonly coordinates: cts.point[][];
				}

				interface GeoJSON {
					box(box: { bbox: cts.box }): cts.box;
					circle(radius: number, center: point): cts.circle;
					complexPolygon(complexPolygon: polygon): cts.complexPolygon;
					geospatialQuery(regions: cts.region | cts.region[], options?: string[], weight?: number): cts.query;
					geospatialQueryFromNodes(regions: cts.region | cts.region[], options?: string[], weight?: number): cts.query;
					interiorPolygon(polygon: polygon): Sequence<cts.polygon>;
					linestring(linestring: linestring): cts.linestring;
					multiLinestring(linestring: multiLinestring): cts.linestring;
					multiPoint(point: multiPoint): cts.point;
					parseGeojson(geojson: geoNode[]): Sequence<cts.region>;
					point(point: point): cts.point;
					polygon(polygonOrPoints: polygon | point[]): cts.polygon;
					toGeojson(region: cts.region | cts.region[]): Sequence<geoNode>;
				}
			}
		}
	}
}
