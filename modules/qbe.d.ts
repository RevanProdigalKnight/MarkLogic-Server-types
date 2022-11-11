/// <reference path="../builtins/Element.d.ts" />

/// <reference path="./cts.d.ts" />

declare module 'qbe' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/appservices/search/qbe'): qbe.QBE;
				(module: '/MarkLogic/appservices/search/qbe.xqy'): qbe.QBE;
			}

			namespace qbe {
				interface QBE {
					byExample(example: unknown): cts.query;
					validate(example: unknown): Element;
				}
			}
		}
	}
}
