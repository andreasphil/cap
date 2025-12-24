/**
 * @param {string} message
 * @returns {Promise<void>}
 */
export function alert(message: string): Promise<void>;
/**
 * @param {string} message
 * @returns {Promise<boolean>}
 */
export function confirm(message: string): Promise<boolean>;
/**
 * @param {string} message
 * @returns {Promise<string | null>}
 */
export function prompt(message: string): Promise<string | null>;
