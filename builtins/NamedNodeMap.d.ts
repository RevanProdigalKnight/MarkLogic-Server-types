/// <reference path="./XMLNode.d.ts" />

declare namespace MarkLogic {
	interface NamedNodeMap {
		getNamedItem(name: string): XMLNode;
		getNamedItemNS(uri: string, localName: string): XMLNode;
	}
}
