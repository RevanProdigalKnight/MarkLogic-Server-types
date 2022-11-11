/// <reference path="./Value.d.ts" />

declare namespace MarkLogic {
	const enum TypeInfoFlag {
		all = 0,
		restriction = 1,
		extension = 2,
		union = 4,
		list = 8,
	}

	interface TypeInfo extends Value {
		readonly typeName: string;
		readonly typeNamespace: string;

		isDerivedFrom(uri: string, localname: string, flag: number): boolean;
	}
}
