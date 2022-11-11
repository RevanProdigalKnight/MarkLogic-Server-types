/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

declare module 'rdt' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/redaction'): rdt.Redaction;
				(module: '/MarkLogic/redaction.xqy'): rdt.Redaction;
			}

			namespace rdt {
				interface Redaction {
					redact(doc: Node | Node[], ruleCollection: string | string[]): Sequence<Node>;
					ruleValidate(ruleCollection: string | string[]): Sequence<string>;
				}
			}
		}
	}
}
