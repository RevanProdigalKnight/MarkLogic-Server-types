/// <reference no-default-lib="true" />

/// <reference path="./xs.d.ts" />

declare module 'console' {
	global {
		namespace MarkLogic.console {
			interface ConsoleDirOptions {
				/** How many times to recurse while formatting the object. Default: 2 */
				readonly depth?: number;
				/** Unused, but documented. Type unknown, likely boolean. */
				readonly colors?: unknown;
			}

			interface Console {
				/**
				 * If assertion is true, does nothing. Otherwise, logs the given message to the App Server
				 * log file (<install_dir>/Logs/<port>_ErrorLog.txt).
				 *
				 * @param  {boolean}              assertion The assertion
				 * @param  {xs.anyAtomicType}     message
				 *                                The message. Placeholders (below) are replaced with converted values from the
				 *                                corresponding argument.
				 *
				 *                                %s - String
				 *                                %d - Number (int/float irrespective)
				 *                                %j - JSON stringified, with circular references becoming "[Circular]"
				 *                                %  - A percent sign literal (does not consume an argument)
				 * @param  {...xs.anyAtomicType}  values    The values to interpolate into the message
				 *
				 * @return {null}
				 */
				assert(assertion: boolean, message?: xs.anyAtomicType, ...values: xs.anyAtomicType[]): null;
				/**
				 * Logs a debug-level message to the App Server log file (<install_dir>/Logs/<port>_ErrorLog.txt).
				 *
				 * @param  {xs.anyAtomicType}     message
				 *                                The message. Placeholders (below) are replaced with converted values from the
				 *                                corresponding argument.
				 *
				 *                                %s - String
				 *                                %d - Number (int/float irrespective)
				 *                                %j - JSON stringified, with circular references becoming "[Circular]"
				 *                                %  - A percent sign literal (does not consume an argument)
				 * @param  {...xs.anyAtomicType}  values    The values to interpolate into the message
				 *
				 * @return {null}
				 */
				debug(message?: xs.anyAtomicType, ...values: xs.anyAtomicType[]): null;
				/**
				 * Converts an object to a string and prints to the App Server log file (<install_dir>/Logs/<port>_ErrorLog.txt).
				 *
				 * @param  {xs.anyAtomicType}     obj      The object to be stringified and printed to the log
				 * @param  {...xs.anyAtomicType}  options  Options for stringifying the object
				 *
				 * @return {null}
				 */
				dir(obj: xs.anyAtomicType, options?: ConsoleDirOptions): null;
				/**
				 * Logs an error-level message to the App Server log file (<install_dir>/Logs/<port>_ErrorLog.txt).
				 *
				 * @param  {xs.anyAtomicType}     message
				 *                                The message. Placeholders (below) are replaced with converted values from the
				 *                                corresponding argument.
				 *
				 *                                %s - String
				 *                                %d - Number (int/float irrespective)
				 *                                %j - JSON stringified, with circular references becoming "[Circular]"
				 *                                %  - A percent sign literal (does not consume an argument)
				 * @param  {...xs.anyAtomicType}  values    The values to interpolate into the message
				 *
				 * @return {null}
				 */
				error(message?: xs.anyAtomicType, ...values: xs.anyAtomicType[]): null;
				/**
				 * Logs an info-level message to the App Server log file (<install_dir>/Logs/<port>_ErrorLog.txt).
				 *
				 * @param  {xs.anyAtomicType}     message
				 *                                The message. Placeholders (below) are replaced with converted values from the
				 *                                corresponding argument.
				 *
				 *                                %s - String
				 *                                %d - Number (int/float irrespective)
				 *                                %j - JSON stringified, with circular references becoming "[Circular]"
				 *                                %  - A percent sign literal (does not consume an argument)
				 * @param  {...xs.anyAtomicType}  values    The values to interpolate into the message
				 *
				 * @return {null}
				 */
				log(message?: xs.anyAtomicType, ...values: xs.anyAtomicType[]): null;
				/**
				 * Logs a message and JavaScript stacktrace to the App Server log file (<install_dir>/Logs/<port>_ErrorLog.txt).
				 *
				 * @param  {xs.anyAtomicType}     message
				 *                                The message. Placeholders (below) are replaced with converted values from the
				 *                                corresponding argument.
				 *
				 *                                %s - String
				 *                                %d - Number (int/float irrespective)
				 *                                %j - JSON stringified, with circular references becoming "[Circular]"
				 *                                %  - A percent sign literal (does not consume an argument)
				 * @param  {...xs.anyAtomicType}  values    The values to interpolate into the message
				 *
				 * @return {null}
				 */
				trace(message: xs.anyAtomicType, ...values: xs.anyAtomicType[]): null;
				/**
				 * Logs a warning-level message to the App Server log file (<install_dir>/Logs/<port>_ErrorLog.txt).
				 *
				 * @param  {xs.anyAtomicType}     message
				 *                                The message. Placeholders (below) are replaced with converted values from the
				 *                                corresponding argument.
				 *
				 *                                %s - String
				 *                                %d - Number (int/float irrespective)
				 *                                %j - JSON stringified, with circular references becoming "[Circular]"
				 *                                %  - A percent sign literal (does not consume an argument)
				 * @param  {...xs.anyAtomicType}  values    The values to interpolate into the message
				 *
				 * @return {null}
				 */
				warn(message?: xs.anyAtomicType, ...values: xs.anyAtomicType[]): null;
			}
		}
	}
}

declare const console: MarkLogic.console.Console;
