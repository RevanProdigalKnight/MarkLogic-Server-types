/// <reference path="../builtins/Node.d.ts" />

/// <reference path="./cts.d.ts" />
/// <reference path="./xs.d.ts" />

declare module 'entity' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/entity'): entity.Entity;
			}

			namespace entity {
				interface Entity {
					/**
					 * Put n entity dictionary into the database in the appropriate format
					 *
					 * @param  {string}                uri         The uri of the dictionary
					 * @param  {cts.entityDictionary}  dictionary  The entity dictionary to insert
					 *
					 * @return {null}
					 */
					dictionaryInsert(uri: string, dictionary: cts.entityDictionary): null;
					/**
					 * Load an entity dictionary  from the filesystem into the database in the appropriate format
					 *
					 * @param  {string}     path     The path to a text file containing the dictionary entries
					 * @param  {string}     uri      The URI of the dictionary to be created
					 * @param  {string[]?}  options
					 *         Options with which you can control the behavior of the entity dictionary. It is strongly
					 *         recommended to use the defaults.
					 *
					 * @return {null}
					 */
					dictionaryLoad(path: string, uri: string, options?: string[]): null;
					/**
					 * Returns the entity-enriched XML for the given XML node using the provided dictionary. If a text node that
					 * is being enriched has a parent element with a schema definition that does not allow element children, then
					 * that text node is not enriched. Entity markup is not added within other entities.
					 *
					 * @param  {Node}                       node          The XML node to be enriched
					 * @param  {cts.entityDictionary[]?}    dictionaries
					 *         The entity dictionaries to use to identify entities. If you do not specify any dictionaries,
					 *         built-in entity dictionaries are applied (there are currently no built-in dictionaries). If you
					 *         specify multiple dictionaries, they are applied sequentially, in the order given.
					 * @param  {['full']?}                  options
					 *         A list of options that control processing. If omitted, the default is to emit minimal entities with
					 *         just the entity type and matching text.
					 * @param  {Record<string, xs.QName>?}  map
					 *         A mapping from entity type to the QName of the element used to create the entity. If no mapping is
					 *         provided, the default mapping is used. Entities whose types are not matched in the map will not be
					 *         emitted.
					 *
					 * @return {Node}
					 */
					enrich(node: Node, dictionaries?: cts.entityDictionary[], options?: ['full'], map?: Record<string, xs.QName>): Node;
					/**
					 * Extract entities from a document using the provided entity dictionary. The matching entities are returned.
					 *
					 * @param  {Node}                       node          The XML node to be enriched
					 * @param  {cts.entityDictionary[]?}    dictionaries
					 *         The entity dictionaries to use to identify entities. If you do not specify any dictionaries,
					 *         built-in entity dictionaries are applied (there are currently no built-in dictionaries). If you
					 *         specify multiple dictionaries, they are applied sequentially, in the order given.
					 * @param  {['full']?}                  options
					 *         A list of options that control processing. If omitted, the default is to emit minimal entities with
					 *         just the entity type and matching text.
					 * @param  {Record<string, xs.QName>?}  map
					 *         A mapping from entity type to the QName of the element used to create the entity. If no mapping is
					 *         provided, the default mapping is used. Entities whose types are not matched in the map will not be
					 *         emitted.
					 *
					 * @return {Node}
					 */
					extract(node: Node, dictionaries?: cts.entityDictionary[], options?: ['full'], map?: Record<string, xs.QName>): Node;
					/**
					 * Construct an entity dictionary from a SKOS ontology loaded into the database as triples.
					 *
					 * @param  {string}     graph    The URI of the graph containing the triples of the ontology.
					 * @param  {string?}    lang
					 *         If labels occur in more than one language, use the ones in this language. Default: "en"
					 * @param  {string[]?}  options
					 *         Options with which you can control the behavior of the entity dictionary. It is strongly
					 *         recommended to use the defaults.
					 */
					skosDictionary(graph: string, lang?: string, options?: string[]): cts.entityDictionary;
				}
			}
		}
	}
}
