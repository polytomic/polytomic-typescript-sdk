/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2ModelFieldResponse: core.serialization.ObjectSchema<serializers.V2ModelFieldResponse.Raw, PolytomicApi.V2ModelFieldResponse>;
export declare namespace V2ModelFieldResponse {
    interface Raw {
        data?: serializers.V2ModelField.Raw[] | null;
    }
}