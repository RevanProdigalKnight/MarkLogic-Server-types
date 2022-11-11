/// <reference path="./op.d.ts" />

declare module 'ordt' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/optic/optic-redaction'): ordt.OpticRedaction;
				(module: '/MarkLogic/optic/optic-redaction.sjs'): ordt.OpticRedaction;
			}

			namespace ordt {
				type MaskOptionsCharacter = 'any' | 'mixedCase' | 'mixedCaseNumeric' | 'lowerCase' | 'lowerCaseNumeric' | 'upperCase' | 'upperCaseNumeric' | 'numeric';

				interface MaskDeterministicOptions {
					readonly character?: MaskOptionsCharacter;
					readonly hash?: 'sha256' | 'sha512';
					readonly maxLength?: number;
					readonly salt?: string;
				}

				interface MaskRandomOptions {
					readonly character?: MaskOptionsCharacter;
					readonly length?: number;
				}

				interface RedactDateTimeParsedOptions {
					readonly level: 'parsed';
					readonly format: string;
				}

				interface RedactDateTimeRandomOptions {
					readonly level: 'random';
					readonly format?: string;
					readonly picture?: string;
					readonly range?: string;
				}

				type RedactDateTimeOptions = RedactDateTimeParsedOptions & RedactDateTimeRandomOptions;

				interface RedactEmailOptions {
					readonly level?: 'full' | 'domain';
				}

				interface RedactIpv4Options {
					readonly character: string;
				}

				interface RedactNumberOptions {
					readonly min?: number | string;
					readonly max?: number | string;
					readonly type?: 'integer' | 'decimal' | 'double';
					readonly format?: string;
				}

				interface RedactRegexOptions {
					readonly pattern: string;
					readonly replacement: string;
				}

				interface RedactUsPhoneOptions {
					readonly level?: 'full' | 'partial' | 'full-random';
					readonly character?: string;
				}

				interface RedactUsSsnOptions {
					readonly level?: 'full' | 'partial' | 'full-random';
					readonly character?: string;
				}

				type RedactionFunction<T> = (column: op.columnIdentifier | string, options: T) => op.columnBinding;

				interface OpticRedaction {
					readonly maskDeterministic: RedactionFunction<MaskDeterministicOptions>;
					readonly maskRandom: RedactionFunction<MaskRandomOptions>;
					readonly redactDateTime: RedactionFunction<RedactDateTimeOptions>;
					readonly redactEmail: RedactionFunction<RedactEmailOptions>;
					readonly redactIpv4: RedactionFunction<RedactIpv4Options>;
					readonly redactNumber: RedactionFunction<RedactNumberOptions>;
					readonly redactRegex: RedactionFunction<RedactRegexOptions>;
					readonly redactUsPhone: RedactionFunction<RedactUsPhoneOptions>;
					readonly redactUsSsn: RedactionFunction<RedactUsSsnOptions>;
				}
			}
		}
	}
}
