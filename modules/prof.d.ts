// deno-lint-ignore-file ban-types
/// <reference path="../builtins/Sequence.d.ts" />

declare module 'prof' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/prof'): prof.Profile;
				(module: '/MarkLogic/prof.sjs'): prof.Profile;
			}

			namespace prof {
				interface Profile {
					eval(js: string, vars?: object, options?: object): Sequence;
				}
			}
		}
	}
}
