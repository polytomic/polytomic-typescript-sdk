/**
 * This file was auto-generated from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface V2UpdateConnectionRequestSchema {
    configuration?: Record<string, unknown>;
    name: string;
    organization_id?: string;
    policies?: string[];
    reconnect?: boolean;
    type?: string;
    /** Validate connection configuration. */
    validate?: boolean;
}
