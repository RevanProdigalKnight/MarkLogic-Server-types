/// <reference path="./Node.d.ts" />

declare namespace MarkLogic {
	interface NodeBuilder {
		addAttribute(name: string, text: string, namespace?: string): this;
		addBinary(hex: string): this;
		addDocument(cb: ((builder: NodeBuilder) => void)): this;
		addDocument(content: string, uri?: string): this;
		addElement(name: string, content?: ((builder: NodeBuilder) => void)): this;
		addElement(name: string, content?: string, namespace?: string): this;
		addNode(node: unknown): this;
		addNull(): this;
		addNumber(n: number): this;
		addProcessingInstruction(target: string, text: string): this;
		addText(text: string): this;
		endDocument(): this;
		endElement(): this;
		startDocument(): this;
		startElement(): this;
		toNode(): Node;
	}

	interface NodeBuilderConstructor {
		new (): NodeBuilder;
		prototype: NodeBuilder;
	}
}

declare const NodeBuilder: MarkLogic.NodeBuilderConstructor;
