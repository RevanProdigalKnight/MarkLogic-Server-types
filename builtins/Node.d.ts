// deno-lint-ignore-file ban-types
/// <reference path="./Sequence.d.ts" />
/// <reference path="./Value.d.ts" />

declare namespace MarkLogic {
	const enum NodeType {
		ELEMENT_NODE = 1,
		ATTRIBUTE_NODE,
		TEXT_NODE,
		CDATA_SECTION_NODE,
		ENTITY_REFERENCE_NODE,
		ENTITY_NODE,
		PROCESSING_INSTRUCTION_NODE,
		COMMENT_NODE,
		DOCUMENT_NODE,
		DOCUMENT_TYPE_NODE,
		DOCUMENT_FRAGMENT_NODE,
		NOTATION_NODE,
		BINARY_NODE,
		NULL_NODE,
		BOOLEAN_NODE,
		NUMBER_NODE,
		ARRAY_NODE,
		OBJECT_NODE,
	}

	interface Node extends Value {
		readonly baseURI: string;
		readonly nodeKind: string;
		readonly nodeType: NodeType;

		xpath(path: string, bindings?: object): Sequence;
	}

	interface ArrayNode extends Node {
		/**
		 * The length of the array contained in this Node
		 *
		 * @type {number}
		 */
		readonly length: number;
	}

	type BinaryNode = Node;
	type BooleanNode = Node;
	type NullNode = Node;
	type NumberNode = Node;
	type ObjectNode = Node;
}

declare const Node: {
	new (): MarkLogic.Node;
	prototype: MarkLogic.Node;
};

declare const ArrayNode: {
	new (): MarkLogic.ArrayNode;
	prototype: MarkLogic.ArrayNode;
};

declare const BinaryNode: {
	new (): MarkLogic.BinaryNode;
	prototype: MarkLogic.BinaryNode;
};

declare const BooleanNode: {
	new (): MarkLogic.BooleanNode;
	prototype: MarkLogic.BooleanNode;
};

declare const NullNode: {
	new (): MarkLogic.NullNode;
	prototype: MarkLogic.NullNode;
};

declare const NumberNode: {
	new (): MarkLogic.NumberNode;
	prototype: MarkLogic.NumberNode;
};

declare const ObjectNode: {
	new (): MarkLogic.ObjectNode;
	prototype: MarkLogic.ObjectNode;
};
