/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as PolytomicApi from "..";
export interface V2SyncField {
    new?: boolean;
    overrideValue?: string;
    source: PolytomicApi.V2Source;
    syncMode?: string;
    target: string;
}