/// <reference path="./NamedNodeMap.d.ts" />
/// <reference path="./Node.d.ts" />
/// <reference path="./NodeList.d.ts" />
/// <reference path="./Sequence.d.ts" />
/// <reference path="./XMLDocument.d.ts" />

declare namespace MarkLogic {
	interface XMLNode extends Node {
		readonly attributes: NamedNodeMap;
		readonly childNodes: NodeList;
		readonly firstChild: XMLNode;
		readonly hasAttributes: boolean;
		readonly lastChild: XMLNode;
		readonly localName: string;
		readonly namespaceURI: string;
		readonly nextSibling: XMLNode;
		readonly nodeName: string;
		readonly nodeValue: string;
		readonly ownerDocument: XMLDocument;
		readonly parentNode: XMLNode;
		readonly prefix: string;
		readonly previousSibling: XMLNode;
		readonly textContent: string;

		hasChildNodes(): boolean;
		isEqualNode(node: Node): boolean;
		isSameNode(node: Node): boolean;
	}
}

declare const XMLNode: {
	new (): MarkLogic.XMLNode;
	prototype: MarkLogic.XMLNode;
};
