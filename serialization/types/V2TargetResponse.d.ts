/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2TargetResponse: core.serialization.ObjectSchema<serializers.V2TargetResponse.Raw, PolytomicApi.V2TargetResponse>;
export declare namespace V2TargetResponse {
    interface Raw {
        fields?: serializers.V2TargetField.Raw[] | null;
        id?: string | null;
        modes?: serializers.V2Mode.Raw[] | null;
        name?: string | null;
        properties?: serializers.SyncDestinationProperties.Raw | null;
        refreshed_at?: string | null;
    }
}