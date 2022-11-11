// deno-lint-ignore-file no-empty-interface ban-types
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./xs.d.ts" />

declare module 'fn' {
	global {
		const fn: MarkLogic.fn.Fn;

		namespace MarkLogic.s {
			interface results extends Element {}
		}

		namespace MarkLogic.fn {
			interface Fn {
				abs(n: number): number;
				adjustDateTimeToTimezone(date: xs.dateTime, timezone?: xs.dayTimeDuration): xs.dateTime;
				adjustDateToTimezone(date: xs.date, timezone?: xs.dayTimeDuration): xs.date;
				adjustTimeToTimezone(time: xs.time, timezone?: xs.dayTimeDuration): xs.time;
				analyzeString(input: string, regex: string, flags?: string): s.results;
				avg(values: Sequence | unknown[]): xs.anyAtomicType;
				baseUri(node?: Node): string;
				boolean(values: Sequence | unknown[], collation?: string): boolean;
				ceiling(n: number): number;
				codepointEqual(value1: string, value2: string): boolean;
				codepointsToString(codepoints: number[]): string;
				collection(uri?: string | string[]): Sequence;
				compare(value1: string, value2: string, collation?: string): number;
				concat(value: xs.anyAtomicType, ...values: xs.anyAtomicType[]): string;
				contains(value1: string, value2: string, collation?: string): boolean;
				count(sequence: Sequence, maximum?: number): number;
				currentDate(): xs.date;
				currentDateTime(): xs.dateTime;
				currentTime(): xs.time;
				data(sequence: Sequence): Sequence;
				dateTime(date: xs.date, time: xs.time): xs.dateTime;
				dayFromDate(date: xs.date): number;
				dayFromDateTime(date: xs.dateTime): number;
				daysFromDuration(duration: xs.duration): number;
				deepEqual(value1: Sequence, value2: Sequence, collation?: string): boolean;
				defaultCollation(): string;
				distinctValues(values: Sequence, collation?: string): Sequence;
				doc<T = unknown>(uris: string | string[] | Sequence<string>): Sequence<T>;
				docAvailable(uri: string): boolean;
				document<T = unknown>(uris: string | string[] | Sequence<string>, baseNode?: Node): Sequence<T>;
				documentUri(node: Node): string;
				empty(sequence: Sequence): boolean;
				encodeForUri(uriPart: string): string;
				endsWith(value1: Sequence, value2: Sequence, collation?: string): boolean;
				error(error?: xs.QName, description?: string, data?: Sequence): null;
				escapeHtmlUri(uriPart: string): string;
				exactlyOne<T = unknown>(sequence: T): T;
				exists(sequence: unknown): boolean;
				false(): false;
				floor(n: number): number;
				formatDate(date: xs.date, picture: string, language?: string, calendar?: string, country?: string): string;
				formatDateTime(dateTime: xs.dateTime, picture: string, language?: string, calendar?: string, country?: string): string;
				formatNumber(value: number, picture: string, decimalFormatName?: string): string;
				formatTime(time: xs.time, picture: string, language?: string, calendar?: string, country?: string): string;
				functionAvailable(functionName: string, arity?: number): boolean;
				generateId(node?: Node): string;
				head<T = unknown>(sequence: Sequence<T>): T;
				hoursFromDateTime(dateTime: xs.dateTime): number;
				hoursFromDuration(duration: xs.duration): number;
				hoursFromTime(time: xs.time): number;
				id(ids: string[], node?: Node): Sequence<Node>;
				idref(ids: string[], node?: Node): Sequence<Node>;
				implicitTimezone(): xs.dayTimeDuration;
				indexOf(seqParam: (string | number | boolean | null | unknown[] | object)[], searchParam: xs.anyAtomicType, collationLiteral?: string): Sequence<number>;
				inScopePrefixes(element: Node): Sequence<string>;
				insertBefore(target: Sequence, position: number, inserts: Sequence): Sequence;
				iriToUri(iri: string): string;
				lang(testLang: string, node?: Node): boolean;
				localName(node?: Node): string;
				localNameFromQName(qname: xs.QName): xs.NCName;
				lowerCase(str: string): string;
				matches(str: string, pattern: string, flags?: string): boolean;
				max(values: Sequence | unknown[], collation?: string): xs.anyAtomicType;
				min(values: Sequence | unknown[], collation?: string): xs.anyAtomicType;
				minutesFromDateTime(dateTime: xs.dateTime): number;
				minutesFromDuration(duration: xs.duration): number;
				minutesFromTime(time: xs.time): number;
				monthFromDate(date: xs.date): number;
				monthFromDateTime(dateTime: xs.dateTime): number;
				monthFromDuration(duration: xs.duration): number;
				name(node?: Node): string;
				namespaceUri(node?: Node): string;
				namespaceUriForPrefix(prefix: string, element: Node): string;
				namespaceUriForQName(qname: xs.QName): string;
				nilled(node: Node): boolean;
				nodeName(node: Node): xs.QName;
				normalizeSpace(str: string): string;
				normalizeUnicode(str: string, normalizationForm?: string): string;
				not(sequence: Sequence): boolean;
				number(n?: xs.anyAtomicType): number;
				oneOrMore(sequence: unknown): Sequence;
				prefixFromQName(qname: xs.QName): xs.NCName;
				QName(uri: string, qname: string): xs.QName;
				remove<T = unknown>(target: Sequence<T>, position: number): Sequence<T>;
				replace(input: string, pattern: string, replacement: string, flags?: string): string;
				resolveQName(qname: string, element: Node): xs.QName;
				resolveUri(relative: string, base?: string): string;
				reverse<T = unknown>(sequence: Sequence<T>): Sequence<T>;
				root(node?: Node): Node;
				round(n: number): number;
				roundHalfToEven(n: number, precision?: number): number;
				secondsFromDateTime(dateTime: xs.dateTime): number;
				secondsFromDuration(duration: xs.duration): number;
				secondsFromTime(time: xs.time): number;
				startsWith(value1: Sequence, value2: Sequence, collation?: string): boolean;
				staticBaseUri(): string;
				string(value?: unknown): string;
				stringJoin(strings: string[], concatenationString: string): string;
				stringLength(str?: string): number;
				stringToCodepoints(str: string): Sequence<number>;
				subsequence<T = unknown>(sequence: Sequence<T>, startingLocation: number, length?: number): Sequence<T>;
				substring(str: string, startingLocation: number, length?: number): string;
				substringAfter(str: string, after: string, collation?: string): string;
				substringBefore(str: string, before: string, collation?: string): string;
				sum(values: Sequence | unknown[], zero?: xs.anyAtomicType): xs.anyAtomicType;
				tail<T = unknown>(sequence: Sequence<T>): Sequence<T>;
				timezoneFromDate(date: xs.date): xs.dayTimeDuration;
				timezoneFromDateTime(date: xs.dateTime): xs.dayTimeDuration;
				timezoneFromTime(date: xs.time): xs.dayTimeDuration;
				tokenize(str: string, pattern: string, flags?: string): Sequence<string>;
				trace(value: Sequence, label: string): Sequence;
				translate(src: string, mapString: string, transString: string): string;
				true(): true;
				typeAvailable(typeName: string): boolean;
				unordered<T = unknown>(sequence: Sequence<T>): Sequence<T>;
				unparsedText(href: string, encoding?: string): string;
				unparsedTextAvailable(href: string, encoding?: string): boolean;
				upperCase(str: string): string;
				yearFromDate(date: xs.date): number;
				yearFromDateTime(dateTime: xs.dateTime): number;
				yearFromDuration(duration: xs.duration): number;
				zeroOrOne<T = unknown>(sequence: T): T;
			}
		}
	}
}
