/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2StartSyncResponseSchema: core.serialization.ObjectSchema<serializers.V2StartSyncResponseSchema.Raw, PolytomicApi.V2StartSyncResponseSchema>;
export declare namespace V2StartSyncResponseSchema {
    interface Raw {
        created_at?: string | null;
        id?: string | null;
        status?: string | null;
    }
}