/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2ModelListResponseEnvelope: core.serialization.ObjectSchema<serializers.V2ModelListResponseEnvelope.Raw, PolytomicApi.V2ModelListResponseEnvelope>;
export declare namespace V2ModelListResponseEnvelope {
    interface Raw {
        data?: serializers.V2ModelResponse.Raw[] | null;
    }
}