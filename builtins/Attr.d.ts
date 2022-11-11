/// <reference path="./Element.d.ts" />
/// <reference path="./XMLNode.d.ts" />

declare namespace MarkLogic {
	interface Attr extends XMLNode {
		readonly isId: boolean;
		readonly isSpecified: boolean;
		readonly ownerElement: Element;
	}
}
