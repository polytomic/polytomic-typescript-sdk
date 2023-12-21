/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as PolytomicApi from "../../api";
import * as core from "../../core";
export declare const V3BulkSyncSchemaExecution: core.serialization.ObjectSchema<serializers.V3BulkSyncSchemaExecution.Raw, PolytomicApi.V3BulkSyncSchemaExecution>;
export declare namespace V3BulkSyncSchemaExecution {
    interface Raw {
        completed_at?: string | null;
        error_count?: number | null;
        record_count?: number | null;
        schema?: string | null;
        started_at?: string | null;
        status?: string | null;
        status_message?: string | null;
    }
}