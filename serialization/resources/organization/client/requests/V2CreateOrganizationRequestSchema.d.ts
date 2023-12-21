/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as PolytomicApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const V2CreateOrganizationRequestSchema: core.serialization.Schema<serializers.V2CreateOrganizationRequestSchema.Raw, PolytomicApi.V2CreateOrganizationRequestSchema>;
export declare namespace V2CreateOrganizationRequestSchema {
    interface Raw {
        name: string;
        sso_domain?: string | null;
        sso_org_id?: string | null;
    }
}