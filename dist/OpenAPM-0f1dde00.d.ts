import prom, { CounterConfiguration, HistogramConfiguration } from 'prom-client';
import { Request, Response, NextFunction } from 'express';
import { Server } from 'http';
import EventEmitter from 'events';

interface LevitateConfig {
    host?: string;
    orgSlug: string;
    dataSourceName: string;
    refreshTokens: {
        write: string;
    };
}
interface DomainEventsBody {
    [key: string]: any;
    event_name: string;
    event_state: 'start' | 'stop';
    workspace?: string;
    namespace?: string;
    entity_type?: string;
    data_source_name: string;
}
declare class LevitateEvents extends EventEmitter {
    private eventsUrl;
    readonly levitateConfig?: LevitateConfig;
    constructor(options?: OpenAPMOptions);
    emit(event: 'application_started', ...args: (DomainEventsBody | any)[]): boolean;
    on(event: 'application_started', listener: (...args: (DomainEventsBody | any)[]) => void): this;
    once(event: 'application_started', listener: (...args: (DomainEventsBody | any)[]) => void): this;
    private initiateEventListeners;
    private generateAccessToken;
    private putDomainEvents;
}

type ExtractFromParams = {
    from: 'params';
    key: string;
    mask: string;
};
type DefaultLabels = 'environment' | 'program' | 'version' | 'host';
interface OpenAPMOptions {
    /**
     * Enable the OpenAPM
     */
    enabled?: boolean;
    /**
     * Enable the metrics server
     * @default true
     */
    enableMetricsServer?: boolean;
    /** Route where the metrics will be exposed
     * @default "/metrics"
     */
    path?: string;
    /** Port for the metrics server
     * @default 9097
     */
    metricsServerPort?: number;
    /** Application environment
     * @default 'production'
     */
    environment?: string;
    /** Any default labels you want to include */
    defaultLabels?: Record<string, string>;
    /** Accepts configuration for Prometheus Counter  */
    requestsCounterConfig?: Omit<CounterConfiguration<string>, 'labelNames'>;
    /** Accepts configuration for Prometheus Histogram */
    requestDurationHistogramConfig?: Omit<HistogramConfiguration<string>, 'labelNames'>;
    /** Additional Labels for the HTTP requests */
    additionalLabels?: Array<string>;
    /** Extract labels from URL params, subdomain, header */
    extractLabels?: Record<string, ExtractFromParams>;
    /**
     * @deprecated This option is deprecated and won't have any impact on masking the pathnames.
     * */
    customPathsToMask?: Array<RegExp>;
    /** Skip mentioned labels */
    excludeDefaultLabels?: Array<DefaultLabels>;
    /** Levitate Config */
    levitateConfig?: LevitateConfig;
}
type SupportedModules = 'express' | 'mysql' | 'nestjs' | 'nextjs';
declare class OpenAPM extends LevitateEvents {
    simpleCache: Record<string, any>;
    private path;
    private metricsServerPort;
    private enabled;
    private enableMetricsServer;
    readonly environment: string;
    readonly program: string;
    private defaultLabels?;
    readonly requestsCounterConfig: CounterConfiguration<string>;
    readonly requestDurationHistogramConfig: HistogramConfiguration<string>;
    readonly requestLabels: Array<string>;
    private requestsCounter?;
    private requestsDurationHistogram?;
    private extractLabels?;
    private customPathsToMask?;
    private excludeDefaultLabels?;
    metricsServer?: Server;
    constructor(options?: OpenAPMOptions);
    private setRequestCounterConfig;
    private setRequestDurationHistogramConfig;
    private getDefaultLabels;
    private initiatePromClient;
    shutdown: () => Promise<unknown>;
    private initiateMetricsRoute;
    private parseLabelsFromParams;
    /**
     * Middleware Function, which is essentially the response-time middleware with a callback that captures the
     * metrics
     */
    private _REDMiddleware;
    /**
     * Middleware Function, which is essentially the response-time middleware with a callback that captures the
     * metrics
     * @deprecated
     */
    REDMiddleware: (req: Request, res: Response, next: NextFunction) => void;
    getMetrics: () => Promise<string>;
    instrument(moduleName: SupportedModules): boolean;
}
declare function getMetricClient(): typeof prom;

export { DomainEventsBody as D, ExtractFromParams as E, LevitateConfig as L, OpenAPM as O, SupportedModules as S, OpenAPMOptions as a, LevitateEvents as b, DefaultLabels as c, getMetricClient as g };
