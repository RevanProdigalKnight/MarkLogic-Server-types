// deno-lint-ignore-file no-empty-interface
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

declare module 'clang' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/custom-language.xqy'): clang.CustomLanguage;
			}

			namespace clang {
				interface lexer extends Element {}
				interface plugin extends Element {}
				interface stemmer extends Element {}
				interface userLanguage extends Element {}
				interface userLanguages extends Element {}

				interface CustomLanguage {
					/**
					 * Returns usr languages configuration with any existing configuration item for a given languge removed
					 *
					 * @param  {userLanguages}  config  A custom language configuration specification
					 * @param  {string}         lang    An ISO language code, such as "en"
					 *
					 * @return {userLanguages}
					 */
					deleteUserLanguage(config: userLanguages, lang: string): userLanguages;
					/**
					 * Removes all custom language configuration from the cluster configuration files. Calling this function
					 * restarts MarkLogic Server.
					 *
					 * @return {null}
					 */
					languageConfigDelete(): null;
					/**
					 * Reads the custom language configuration specification from the cluster configuration files
					 *
					 * @return {userLanguages}
					 */
					languageConfigRead(): userLanguages;
					/**
					 * Saves a custom language configuration specification to the cluster configuration files. Calling this
					 * function restarts MarkLogic Server.
					 *
					 * @param  {userLanguages}  config  A custom language configuration specification
					 *
					 * @return {null}           { description_of_the_return_value }
					 */
					languageConfigWrite(config: userLanguages): null;
					/**
					 * Constructs a custom lexer configuration item, suitable for use with clang.userLanguagePlugin
					 *
					 * @param  {string}             variant
					 *                              The name of the lexer plugin, either the name of one of the built-in lexers,
					 *                              or the name of a user-defined lexer capability. The latter should be the name
					 *                              of a LexerUDF capability registered by your plugin when MarkLogic calls
					 *                              Registry::registerLexer
					 * @param  {string?}            normalization
					 *                              The normalization that should be used to present text runs to the plugin
					 *                              lexer. Default: "NFC"
					 * @param  {Sequence<string>?}  args
					 *                              A sequence of arguments that will be passed to the initialization of the
					 *                              plugin lexer as a sequence of strings
					 * @param  {string?}            library
					 *                              The name of the library containing variant. Use an empty string when
					 *                              configuring a built-in plugin. If omitted, the library from the enclosing
					 *                              plugin is used.
					 *
					 * @return {lexer}
					 */
					lexer(variant: string, normalization?: 'NFC' | 'NFD', args?: Sequence<string>, library?: string): lexer;
					/**
					 * Constructs a custom stemmer configuration item, suitable for use with clang.userLanguagePlugin
					 *
					 * @param  {string}             variant
					 *                              The name of the lexer plugin, either the name of one of the built-in lexers,
					 *                              or the name of a user-defined lexer capability. The latter should be the name
					 *                              of a StemmerUDF capability registered by your plugin when MarkLogic calls
					 *                              Registry::registerStemmer
					 * @param  {string?}            normalization
					 *                              The normalization that should be used to present text runs to the plugin
					 *                              lexer. Default: "NFC"
					 * @param  {Sequence<string>?}  args
					 *                              A sequence of arguments that will be passed to the initialization of the
					 *                              plugin lexer as a sequence of strings
					 * @param  {string?}            library
					 *                              The name of the library containing variant. Use an empty string when
					 *                              configuring a built-in plugin. If omitted, the library from the enclosing
					 *                              plugin is used.
					 *
					 * @return {stemmer}
					 */
					stemmer(variant: string, normalization?: 'NFC' | 'NFKD', args?: Sequence<string>, library?: string): stemmer;
					/**
					 * Add/replace a configuration item for a language in the given language configuration item, and return the
					 * new configuration
					 *
					 * @param  {userLanguages}  config    A custom language configuration specification
					 * @param  {userLanguage}   userLang
					 *                          The configuration definition for a language as constructed by clang.userLanguage
					 *
					 * @return {userLanguages}
					 */
					updateUserLanguage(config: userLanguages, userLang: userLanguage): userLanguages;
					/**
					 * Construct a user language configuration item suitable for use with clang.updateUserLanguage
					 *
					 * @param  {string}        lang
					 *                         The language this configuration applies to. An ISO language code, e.g.: "en"
					 * @param  {plugin}        plugin
					 *                         A language plugin configuration item constructed by clang.userLanguagePlugin
					 * @param  {string?}       tokenType
					 *                         The token type key for this language. This only applies for languages that do not
					 *                         already have advanced support. Languages with advanced support already have a
					 *                         distinct token type that cannot be overridden.
					 *
					 * @return {userLanguage}  The user language.
					 */
					userLanguage(lang: string, plugin: plugin, tokenType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'): userLanguage;
					/**
					 * Constructs a user language plugin configuration item suitable for use with clang.userLanguage
					 *
					 * @param  {string}    library
					 *                     The name of the library containing the lexer and stemmer plugins (if they do not
					 *                     explicitly specify a library). Use an empty string for built-in plugins, or a library
					 *                     reference of the form plugin_path/plugin_id for user-defined plugins. Any library
					 *                     specified within the lexer or stemmer parameters takes precedence over this value.
					 * @param  {lexer}     lexer     A lexer configuration item created using clang.lexer
					 * @param  {stemmer}   stemmer   A stemmer configuration item created using clang.stemmer
					 * @param  {boolean?}  delegate
					 *                     Whether the stemmer should delegate automatically to the base stemmer. Default: true
					 *
					 * @return {plugin}
					 */
					userLaguagePlugin(library: string, lexer: lexer, stemmer: stemmer, delegate?: boolean): plugin;
				}
			}
		}
	}
}
