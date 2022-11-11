declare namespace MarkLogic {
	interface DeclareUpdate {
		(): void;
	}

	interface RequireResolve {
		(id: string, options?: { paths?: string[] | undefined }): string;
		paths(request: string): string[] | null
	}

	interface Require {
		(id: string): Record<string, unknown>;
		resolve: RequireResolve;
		cache: Record<string, Module | undefined>;
		main: Module | undefined;
	}

	interface Module {
		isPreloading: boolean;
		exports: Record<string, unknown> | { new (): Record<string, unknown> };
		require: Require;
		id: string;
		filename: string;
		loaded: boolean;
		children: Module[];
		path: string;
		paths: string[];
	}

	// deno-lint-ignore no-empty-interface
	interface binary {}
}

declare let module: MarkLogic.Module;
declare let exports: typeof module['exports'];
declare const require: MarkLogic.Require;
declare const declareUpdate: MarkLogic.DeclareUpdate;
