// deno-lint-ignore-file no-empty-interface
/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />

/// <reference path="./xs.d.ts" />

declare module 'cpf' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/cpf/cpf'): cpf.CPF;
				(module: '/MarkLogic/cpf/cpf.xqy'): cpf.CPF;
			}

			namespace p {
				interface transition extends Element {}
			}

			namespace cpf {
				type ProcessingStatus = 'created' | 'updated' | 'deleted' | 'active' | 'done';

				interface CPF {
					readonly documentUri: string;
					readonly exception: Node;
					readonly transition: p.transition;

					/**
					 * Verify that the current transition is the correct one for the document. If a document is touched from
					 * multiple threads certain race conditions may apply that will cause the lookup of the transition to end up
					 * out of sync with the transition action when it is actually executed. In this case the action should do
					 * nothing; not even call cpf:success or cpf:failure. Some other CPF thread has already done work on this
					 * document.
					 *
					 * @param  {string}   docid       The document URI
					 * @param  {Element}  transition  The pipeline transition being executed
					 *
					 * @return {boolean}
					 */
					checkTransition(docid: string, transition: p.transition | Element): boolean;
					/**
					 * Fetch a trace of the error that caused the document's processing to fail, if any
					 *
					 * @param  {string}  doc  The document URI
					 *
					 * @return {Node}
					 */
					documentGetError(doc: string): Node;
					/**
					 * Determine the date and time of the last update to the document's content, if any
					 *
					 * @param  {string}  doc  The document URI
					 *
					 * @return {xs.dateTime}
					 */
					documentGetLastUpdated(doc: string): xs.dateTime;
					/**
					 * Determine the document's current processing status, if any
					 *
					 * @param  {string}  doc  The document URI
					 *
					 * @return {string}
					 */
					documentGetProcessingStatus(doc: string): ProcessingStatus;
					/**
					 * Get the document's current state, if any
					 *
					 * @param  {string}  doc  The document URI
					 *
					 * @return {string}
					 */
					documentGetState(doc: string): string;
					/**
					 * Set the document's error trace to the given value
					 *
					 * @param  {string}  doc    The document URI
					 * @param  {Node}    error  The error causing processing failure, or empty to erase the existing trace
					 *
					 * @return {null}
					 */
					documentSetError(doc: string, error: Node): null;
					/**
					 * Set the date and time of the document's last update
					 *
					 * @param  {string}      doc          The document URI
					 * @param  {xsdateTime}  lastUpdated
					 *                       The date and time at which the document was last updated, typically
					 *                       fn:current-dateTime()
					 *
					 * @return {null}
					 */
					documentSetLastUpdated(doc: string, lastUpdated: xs.dateTime): null;
					/**
					 * Set the document's processing status to the given value
					 *
					 * @param  {string}  doc               The document URI
					 * @param  {string}  processingstatus  The new processing status
					 *
					 * @return {null}
					 */
					documentSetProcessingStatus(doc: string, processingstatus: ProcessingStatus): null;
					/**
					 * Set the document's state to the given state
					 *
					 * @param  {string}  doc    The document URI
					 * @param  {string}  state  The new state of the document
					 *
					 * @return {null}
					 */
					documentSetState(doc: string, state: string): null;
					/**
					 * Concludes the state action in failure, advancing the state as defined by the state transition. The state
					 * action must call this method to indicate failure, passing the external variables of cpf.documentUri,
					 * cpf.transition, and cpf.exception as parameters. If the document does not exist, do nothing.
					 *
					 * Side Effects:
					 *   - Advances the document state to the transition's on-failure state, if any
					 *   - Marks the document as processed in the current state
					 *
					 * @param  {string}   docid          The document URI
					 * @param  {Element}  transition     The pipeline transition being executed
					 * @param  {Node}     exception      The exception leading to processing failure, if any
					 * @param  {string}   overrideState  The next state of the document, overriding transition state
					 *
					 * @return {null}
					 */
					failure(docid: string, transition: p.transition | Element, exception: Node, overrideState: string): null;
					/**
					 * Concludes the state action successfully, advancing the state as defined by the state transition. The state
					 * action must call this method to indicate completion of successful processing, passing the external
					 * variables of cpf.documentUri and cpf.transition as parameters. If the document does not exist, do nothing.
					 *
					 * Side Effects:
					 *   - Advances the document state to the transition's on-success state, if any
					 *   - Marks the document as processed in the current state
					 *
					 * @param  {string}   docid          The document URI
					 * @param  {Element}  transition     The pipeline transition being executed
					 * @param  {string}   overrideState  The next state of the document, overriding transition state
					 *
					 * @return {null}
					 */
					success(docid: string, transition: p.transition | Element, overrideState: string): null;
				}
			}
		}
	}
}
