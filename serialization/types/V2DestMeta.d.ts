/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V2DestMeta: core.serialization.ObjectSchema<serializers.V2DestMeta.Raw, PolytomicApi.V2DestMeta>;
export declare namespace V2DestMeta {
    interface Raw {
        default?: string | null;
        items?: string[] | null;
        required?: boolean | null;
    }
}