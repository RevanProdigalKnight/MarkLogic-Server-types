/// <reference path="./XMLNode.d.ts" />

declare namespace MarkLogic {
	interface CharacterData extends XMLNode {
		readonly data: string;
		readonly isElementContentWhitespace: string;
		readonly length: number;
		readonly wholeText: string;

		substring(offset: number, count: number): string;
	}
}
