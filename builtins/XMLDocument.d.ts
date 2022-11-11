/// <reference path="./Document.d.ts" />
/// <reference path="./Element.d.ts" />
/// <reference path="./NodeList.d.ts" />
/// <reference path="./XMLNode.d.ts" />

declare namespace MarkLogic {
	interface XMLDocument extends Document, XMLNode {
		readonly documentURI: string;

		getElementById(id: string): Element;
		getElementsByTagName(name: string): NodeList;
		getElementsByTagNameNS(uri: string, localName: string): NodeList;
	}
}

declare const XMLDocument: {
	new (): MarkLogic.XMLDocument;
	prototype: MarkLogic.XMLDocument;
};
