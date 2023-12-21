/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "./environments";
import * as core from "./core";
import { BulkSync } from "./api/resources/bulkSync/client/Client";
import { Connections } from "./api/resources/connections/client/Client";
import { Schemas } from "./api/resources/schemas/client/Client";
import { Events } from "./api/resources/events/client/Client";
import { Identity } from "./api/resources/identity/client/Client";
import { Models } from "./api/resources/models/client/Client";
import { Organization } from "./api/resources/organization/client/Client";
import { Users } from "./api/resources/users/client/Client";
import { Permissions } from "./api/resources/permissions/client/Client";
import { ModelSync } from "./api/resources/modelSync/client/Client";
import { Webhooks } from "./api/resources/webhooks/client/Client";
export declare namespace PolytomicApiClient {
    interface Options {
        environment?: core.Supplier<environments.PolytomicApiEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class PolytomicApiClient {
    protected readonly _options: PolytomicApiClient.Options;
    constructor(_options: PolytomicApiClient.Options);
    protected _bulkSync: BulkSync | undefined;
    get bulkSync(): BulkSync;
    protected _connections: Connections | undefined;
    get connections(): Connections;
    protected _schemas: Schemas | undefined;
    get schemas(): Schemas;
    protected _events: Events | undefined;
    get events(): Events;
    protected _identity: Identity | undefined;
    get identity(): Identity;
    protected _models: Models | undefined;
    get models(): Models;
    protected _organization: Organization | undefined;
    get organization(): Organization;
    protected _users: Users | undefined;
    get users(): Users;
    protected _permissions: Permissions | undefined;
    get permissions(): Permissions;
    protected _modelSync: ModelSync | undefined;
    get modelSync(): ModelSync;
    protected _webhooks: Webhooks | undefined;
    get webhooks(): Webhooks;
}