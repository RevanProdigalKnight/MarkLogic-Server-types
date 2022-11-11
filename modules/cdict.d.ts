// deno-lint-ignore-file no-empty-interface
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

declare module 'cdict' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/custom-dictionary.xqy'): cdict.CustomDictionary;
			}

			namespace cdict {
				interface dictionary extends Element {}

				interface CustomDictionary {
					/**
					 * Delete a custom dictionary
					 *
					 * @param  {string}    lang          The ISO language code of the dictionary to be deleted
					 * @param  {boolean?}  tokenization
					 * 	                   Whether to delete the tokenization dictionary or the stemming dictionary for the
					 * 	                   specified language. true = tokenization, false = stemming. Default: false
					 * 	                   This parameter is ignored for lanuages that use a single dictionary for both stemming
					 * 	                   and tokenization, such as Japanese and Chinese
					 *
					 * @return {null}
					 */
					dictionaryDelete(lang: string, tokenization?: boolean): null;
					/**
					 * Retrieve the custom dictionary for a language
					 *
					 * @param  {string}    lang          The ISO language code of the dictionary to be deleted
					 * @param  {boolean?}  tokenization
					 * 	                   Whether to delete the tokenization dictionary or the stemming dictionary for the
					 * 	                   specified language. true = tokenization, false = stemming. Default: false
					 * 	                   This parameter is ignored for lanuages that use a single dictionary for both stemming
					 * 	                   and tokenization, such as Japanese and Chinese
					 *
					 * @return {dictionary}
					 */
					dictionaryRead(lang: string, tokenization?: boolean): dictionary;
					/**
					 * Insert or update a custom dictionary for a language
					 *
					 * @param  {string}      lang          The ISO language code of the dictionary to be deleted
					 * @param  {dictionary}  dict          A custom dictionary
					 * @param  {boolean?}    tokenization
					 * 	                     Whether to delete the tokenization dictionary or the stemming dictionary for the
					 * 	                     specified language. true = tokenization, false = stemming. Default: false
					 * 	                     This parameter is ignored for lanuages that use a single dictionary for both stemming
					 * 	                     and tokenization, such as Japanese and Chinese
					 *
					 * @return {null}
					 */
					dictionaryWrite(lang: string, dict: dictionary, tokenization?: boolean): null;
					/**
					 * Return the ISO language codes for all licensed languages
					 *
					 * @return {Sequence<string>}
					 */
					getLanguages(): Sequence<string>;
				}
			}
		}
	}
}
