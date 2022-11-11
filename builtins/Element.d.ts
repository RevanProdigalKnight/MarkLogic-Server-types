/// <reference path="./Attr.d.ts" />
/// <reference path="./TypeInfo.d.ts" />
/// <reference path="./XMLNode.d.ts" />

declare namespace MarkLogic {
	interface Element extends XMLNode {
		readonly schemaTypeInfo: TypeInfo;

		getAttribute(name: string): string;
		getAttributeNode(name: string): Attr;
		getAttributeNodeNS(uri: string, localname: string): Attr;
		getAttributeNS(uri: string, localname: string): string;
		getElementsByTagName(name: string): NodeList;
		getElementsByTagNameNS(uri: string, localname: string): NodeList;
		hasAttribute(name: string): boolean;
		hasAttributeNS(uri: string, localname: string): boolean;
	}
}
