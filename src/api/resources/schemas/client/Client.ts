/**
 * This file was auto-generated from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Polytomic from "../../..";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Schemas {
    interface Options {
        environment?: core.Supplier<environments.PolytomicEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        polytomicVersion?: core.Supplier<"2022-12-12" | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Schemas {
    constructor(protected readonly _options: Schemas.Options = {}) {}

    /**
     * @throws {@link Polytomic.UnauthorizedError}
     *
     * @example
     *     await polytomic.schemas.getRecords("248df4b7-aa70-47b8-a036-33ac447e668d", "schema_id")
     */
    public async getRecords(
        connectionId: string,
        schemaId: string,
        requestOptions?: Schemas.RequestOptions
    ): Promise<Polytomic.V3SchemaRecordsResponseEnvelope> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.PolytomicEnvironment.Default,
                `api/connections/${connectionId}/${schemaId}/records`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Polytomic-Version":
                    (await core.Supplier.get(this._options.polytomicVersion)) != null
                        ? await core.Supplier.get(this._options.polytomicVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "polytomic",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Polytomic.V3SchemaRecordsResponseEnvelope;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Polytomic.UnauthorizedError(_response.error.body as Polytomic.RestErrResponse);
                default:
                    throw new errors.PolytomicError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PolytomicError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PolytomicTimeoutError();
            case "unknown":
                throw new errors.PolytomicError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
