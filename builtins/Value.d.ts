// deno-lint-ignore-file
declare namespace MarkLogic {
	interface Value {
		toObject(): object;
		toString(): string;
		valueOf(): object;
	}
}
