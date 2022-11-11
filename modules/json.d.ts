// deno-lint-ignore-file no-empty-interface ban-types
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./xs.d.ts" />

declare module 'json' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/json/json'): json.JSON;
				(module: '/MarkLogic/json/json.xqy'): json.JSON;
			}

			namespace json {
				interface Strategy {}

				interface FullStrategy extends Strategy {
					'json-attributes': string;
					'json-children': string;
					whitespace: string;
				}

				interface CustomStrategy extends FullStrategy {
					'array-element-names': (xs.QName | string)[];
					'ignore-element-names': (xs.QName | string)[];
					'ignore-attribute-names': (xs.QName | string)[];
					'text-value': string;
					'attribute-names': string[];
					'camel-case': boolean;
					'element-namespace': string;
					'element-namespace-prefix': string;
					'attribute-namespace': string;
					'attribute-namespace-prefix': string;
					'attribute-prefix': string;
					'full-element-names': (xs.QName | string)[];
				}

				interface JSON {
					checkConfig(config: object): Sequence;
					config(strategy: 'basic'): Strategy;
					config(strategy: 'full'): FullStrategy;
					config(strategy: 'custom'): CustomStrategy;
					transformFromJson(json: unknown, config?: Strategy): Sequence<Element>;
					transformToJson(node: Node, config?: Strategy): Node;
					transformToJsonObject(node: Node, config?: Strategy): object;
					transformToJsonXml(node: Node, config?: Strategy): Element;
				}
			}
		}
	}
}
