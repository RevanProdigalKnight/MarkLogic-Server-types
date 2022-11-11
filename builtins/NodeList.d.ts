/// <reference path="./XMLNode.d.ts" />

declare namespace MarkLogic {
	interface NodeList {
		readonly length: number;

		item(n: number): XMLNode;
	}
}
