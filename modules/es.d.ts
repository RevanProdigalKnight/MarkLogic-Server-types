// deno-lint-ignore-file ban-types
/// <reference path="../builtins/Node.d.ts" />

/// <reference path="./cts.d.ts" />
/// <reference path="./xs.d.ts" />

declare module 'es' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/entity-services'): es.EntityServices;
			}

			namespace es {
				interface EntityServices {
					modelValidate(modelDescriptor: Node): object;
				}
			}
		}
	}
}
