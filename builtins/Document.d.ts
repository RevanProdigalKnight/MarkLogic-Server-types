/// <reference path="./Node.d.ts" />

declare namespace MarkLogic {
	interface Document<T = unknown> extends Node {
		readonly documentFormat: 'JSON' | 'XML' | 'TEXT' | 'BINARY';
		readonly root: T;
	}
}
