/// <reference path="../builtins/ModifyPlan.d.ts" />

declare module 'opdsl' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/optic/optic-dsl-js'): opdsl.OpDSL;
				(module: '/MarkLogic/optic/optic-dsl-js.mjs'): opdsl.OpDSL;
			}

			namespace opdsl {
				interface OpDSL {
					import(source: string): ModifyPlan;
				}
			}
		}
	}
}
