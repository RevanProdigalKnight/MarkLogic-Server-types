// deno-lint-ignore-file ban-types
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="../globals.d.ts" />

declare module 'cma' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/cma'): cma.CMA;
				(module: '/MarkLogic/cma.sjs'): cma.CMA;
			}

			namespace cma {
				interface applyConfigOptions {
					/** The configuration profile name to be run */
					readonly name?: string;
					/** The configuration format. Overridden by providing format to cma.applyConfig call. */
					readonly format?: 'xml' | 'json';
					/** The resource type the configuration applies to */
					readonly resourceType?: 'forest' | 'database' | 'server' | 'group' | 'user' | 'role';
					/** The list of specific resource identifiers to apply the configuration to */
					readonly resourceId?: string[];
					/** The regular expression to select specific resources by their names, e.g.: "ha-*" */
					readonly resourceName?: string;
				}

				interface generateConfigOptions {
					/** Configuration profile name */
					readonly name?: string;
					/** Configuration description */
					readonly desc?: string;
					/** Embed replacement tokens (e.g.: %%sometoken%%) in the configuration. Defaults: false if XML/JSON, true if ZIP */
					readonly embedTokens?: boolean;
					/** Include resource properties in the configuration. Default: true */
					readonly includeProperties?: boolean;
					/** Response format. Overriden by providing format to cma.generateConfig call. */
					readonly format?: 'xml' | 'json' | 'zip';
					/** The scenario to generate configuration from. Overridden by providing scenario to cma.generateConfig call. */
					readonly scenario?: 'ha-local';
					/** The type of installer script to include in a ZIP config output */
					readonly installer?: 'ml-gradle';
					/** The resource type for selecting/filtering resources by type */
					readonly resourceType?: 'forest' | 'database' | 'server' | 'group' | 'user' | 'role';
					/** A list of specific resource identifiers to select */
					readonly resourceId?: string[];
					/** A regular expression to select specific resources by name, e.g.: "ha-*" */
					readonly resourceName?: string;
				}

				interface CMA {
					/**
					 * Apply a named configuration, overriding parameters and setting options
					 *
					 * @param  {config | Node[]}      config         A zip file or xml/json configuration to be applied
					 * @param  {applyConfigOptions?}  configOptions  Configuration options for application
					 * @param  {object?}              params
					 *                                Scenario-specific values for parameters to override default values when the
					 *                                configuration is applied.
					 * @param  {string?}              format         The response format. Default: json
					 *
					 * @return {Sequence | Node}
					 */
					applyConfig(config: (binary | Node)[], configOptions?: applyConfigOptions, params?: object, format?: 'xml' | 'json'): Sequence | Node;
					/**
					 * Retrieve an individual resource, set of resources, or full cluster configuration; generate a configuration from scenarios
					 *
					 * @param  {config | Node[]}         config
					 *                                   A zip file or xml/json configuration which filters resource
					 *                                   configurations returned
					 * @param  {generateConfigOptions?}  configOptions  Configuration options for configuration generation
					 * @param  {object?}                 defaultParams
					 *                                   Scenario-specific values for parameters to override default values when
					 *                                   the configuration is applied.
					 * @param  {string?}                 format         The response format. Default: json
					 * @param  {string?}                 scenario       The scenario to generate the configuration from
					 *
					 * @return {Node}
					 */
					generateConfig(config?: (binary | Node)[], configOptions?: generateConfigOptions, defaultParams?: object, format?: null, scenario?: 'ha-local'): Node;
					/**
					 * Retrieve an individual resource, set of resources, or full cluster configuration; generate a configuration from scenarios
					 *
					 * @param  {config | Node[]}         config
					 *                                   A zip file or xml/json configuration which filters resource
					 *                                   configurations returned
					 * @param  {generateConfigOptions?}  configOptions  Configuration options for configuration generation
					 * @param  {object?}                 defaultParams
					 *                                   Scenario-specific values for parameters to override default values when
					 *                                   the configuration is applied.
					 * @param  {'zip'}                   format         The response format. Default: json
					 * @param  {string?}                 scenario       The scenario to generate the configuration from
					 *
					 * @return {binary}
					 */
					generateConfig(config?: (binary | Node)[], configOptions?: generateConfigOptions, defaultParams?: object, format?: 'zip', scenario?: 'ha-local'): binary;
					/**
					 * Retrieve an individual resource, set of resources, or full cluster configuration; generate a configuration from scenarios
					 *
					 * @param  {config | Node[]}         config
					 *                                   A zip file or xml/json configuration which filters resource
					 *                                   configurations returned
					 * @param  {generateConfigOptions?}  configOptions  Configuration options for configuration generation
					 * @param  {object?}                 defaultParams
					 *                                   Scenario-specific values for parameters to override default values when
					 *                                   the configuration is applied.
					 * @param  {'xml' | 'json'}          format         The response format. Default: json
					 * @param  {string?}                 scenario       The scenario to generate the configuration from
					 *
					 * @return {binary}
					 */
					generateConfig(config?: (binary | Node)[], configOptions?: generateConfigOptions, defaultParams?: object, format?: 'xml' | 'json', scenario?: 'ha-local'): Node;
				}
			}
		}
	}
}
