/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as PolytomicApi from "../../../../../api";
import * as core from "../../../../../core";
export declare const V2CreateSyncRequest: core.serialization.Schema<serializers.V2CreateSyncRequest.Raw, PolytomicApi.V2CreateSyncRequest>;
export declare namespace V2CreateSyncRequest {
    interface Raw {
        active?: boolean | null;
        fields?: serializers.V2SyncField.Raw[] | null;
        filter_logic?: string | null;
        filters?: serializers.V2Filter.Raw[] | null;
        identity?: serializers.V2Identity.Raw | null;
        mode: serializers.V2CreateSyncRequestMode.Raw;
        name: string;
        organization_id?: string | null;
        override_fields?: serializers.V2SyncField.Raw[] | null;
        overrides?: serializers.V2Override.Raw[] | null;
        policies?: string[] | null;
        schedule: serializers.V2Schedule.Raw;
        sync_all_records?: boolean | null;
        target: serializers.V2Target.Raw;
    }
}