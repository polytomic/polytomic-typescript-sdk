/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as PolytomicApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const V2StartSyncRequest: core.serialization.Schema<serializers.V2StartSyncRequest.Raw, PolytomicApi.V2StartSyncRequest>;
export declare namespace V2StartSyncRequest {
    interface Raw {
        identities?: string[] | null;
    }
}