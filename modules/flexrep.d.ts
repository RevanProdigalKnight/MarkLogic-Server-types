// deno-lint-ignore-file no-empty-interface
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./xs.d.ts" />

declare module 'flexrep' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/flexrep'): flexrep.FlexRep;
				(module: '/MarkLogic/flexrep.xqy'): flexrep.FlexRep;
			}

			namespace extusr {
				interface externalUser extends Element {}
			}

			namespace flexrep {
				type ID = number | string;

				interface configuration extends Element {}
				interface deleteElement extends Element {}
				interface documentStatus extends Element {}
				interface domainStatus extends Element {}
				interface filterModule extends Element {}
				interface filterOptions extends Element {}
				interface httpOptions extends Element {}
				interface inboundFilter extends Element {}
				interface pull extends Element {}
				interface results extends Element {}
				interface target extends Element {}
				interface targetStatus extends Element {}
				interface update extends Element {}

				interface FlexRep {
					apply(update: update, content: Node): null;
					binaryChunkUris(timestapm: xs.dateTime): Sequence<string>;
					configurationCreate(domainId: ID, alertingUri?: string): configuration;
					configurationDelete(domainId: ID): null;
					configurationDomainIds(): Sequence<ID>;
					configurationGet(domainId: ID, assert?: boolean): configuration;
					configurationGetAlertingUri(configuration: configuration): string;
					configurationGetDomainName(configuration: configuration): string;
					configurationGetId(configuration: configuration): ID;
					configurationInsert(configuration: configuration): null;
					configurationSetAlertingUri(configuration: configuration, uri: string): null;
					configurationTarget(configuration: configuration, targetId: ID, assert?: boolean): target;
					configurationTargetDocumentsPerBatch(configuration: configuration, targetId: ID): number;
					configurationTargetGetEnabled(configuration: configuration, targetId: ID): boolean;
					configurationTargetGetFilterModule(configuration: configuration, targetId: ID): filterModule;
					configurationTargetGetFilterOptions(configuration: configuration, targetId: ID): filterOptions;
					configurationTargetGetHttpOptions(configuration: configuration, targetId: ID): httpOptions;
					configurationTargetGetId(configuration: configuration, targetName: string): ID;
					configurationTargetGetImmediatePush(configuration: configuration, targetId: ID): boolean;
					configurationTargetGetName(configuration: configuration, targetId: ID): string;
					configurationTargetGetReplaceCpf(configuration: configuration, targetId: ID): boolean;
					configurationTargetGetRetrySecondsMax(configuration: configuration, targetId: ID): number;
					configurationTargetGetRetrySecondsMin(configuration: configuration, targetId: ID): number;
					configurationTargetGetUrls(configuration: configuration, targetId: ID): Sequence<string>;
					configurationTargetGetUserId(configuration: configuration, targetId: ID): ID;
					configurationTargets(configuration: configuration): Sequence;
					configurationTargetSetDocumentsPerBatch(configuration: configuration, targetId: ID, val: number): configuration;
					configurationTargetSetEnabled(configuration: configuration, targetId: ID, val: boolean): configuration;
					configurationTargetSetFilterModule(configuration: configuration, targetId: ID, uri: string): configuration;
					configurationTargetSetFilterOptions(configuration: configuration, targetId: ID, options: filterOptions): configuration;
					configurationTargetSetHttpOptions(configuration: configuration, targetId: ID, options: httpOptions): configuration;
					configurationTargetSetImmediatePush(configuration: configuration, targetId: ID, immediatePush: boolean): configuration;
					configurationTargetSetName(configuration: configuration, targetId: ID, name: string): configuration;
					configurationTargetSetReplicateCpf(configuration: configuration, targetId: ID, val: boolean): configuration;
					configurationTargetSetRetrySecondsMax(configuration: configuration, targetId: ID, val: number): configuration;
					configurationTargetSetRetrySecondsMin(configuration: configuration, targetId: ID, val: number): configuration;
					configurationTargetSetUrls(configuration: configuration, targetId: ID, urls: string[]): configuration;
					configurationTargetSetUserId(configuration: configuration, targetId: ID, userId: ID): configuration;
					configureDatabase(config: configuration, dbid: ID): configuration;
					createAppserver(cfg: configuration, group: ID, name: string, port: number | string, db: ID): configuration;
					databaseNeedsConfiguration(config: configuration, dbid: ID): boolean;
					delete(del: deleteElement): null;
					documentReset(uri: string, domainId: ID, targetIds?: ID[]): null;
					documentStatus(domainId: ID, uri: string): documentStatus;
					domainAlertingUri(domainId: ID): string;
					domainStatus(domainId: ID, withTargets?: boolean, terse?: boolean): domainStatus;
					domainTargetReset(domainId: ID, targetIds: ID[], errorsOnly?: boolean): null;
					domainTargetStatuses(): Sequence;
					doPull(pull: pull): Sequence<Element>;
					getDomainName(domainId: ID): string;
					getTargetName(domainId: ID, targetId: ID): string;
					inboundFilterCreate(filterModule: string, filterOptions: filterOptions): inboundFilter;
					inboundFilterDelete(): null;
					inboundFilterGet(): inboundFilter;
					inboundFilterInsert(filter: inboundFilter): null;
					process(domainId: ID, size?: number, targets?: ID[], forestIds?: ID[], uris?: string[]): results;
					pullCreate(name: string, domainId: ID, targetId: ID[], urls: string[], httpOptions: httpOptions): pull;
					pullDelete(domainId: ID, targetId?: ID): null;
					pullGet(domainId: ID, assert?: boolean): Sequence;
					pullGetAll(): Sequence;
					pullGetById(pullId: ID, assert?: boolean): pull;
					pullGetDomainId(pull: pull): ID;
					pullGetEnabled(pull: pull): boolean;
					pullGetHttpOptions(pull: pull): httpOptions;
					pullGetId(pull: pull): ID;
					pullGetName(pull: pull): string;
					pullGetTargetId(pull: pull): ID;
					pullGetUrls(pull: pull): Sequence<string>;
					pullInsert(pull: pull): null;
					pullSetDomainId(pull: pull, domainId: ID): pull;
					pullSetEnabled(pull: pull, flag: boolean): pull;
					pullSetHttpOptions(pull: pull, httpOptions: httpOptions): pull;
					pullSetName(pull: pull, name: string): pull;
					pullSetTargetId(pull: pull, targetId: ID): pull;
					pullSetUrls(pull: pull, urls: string[]): pull;
					pushLocalForest(domainId: ID, forestId: ID, maxSpawn: number | string): null;
					pushLocalForests(): null;
					pushLocalForestTarget(domainId: ID, targetId: ID, forestId: ID, maxSpawn: number | string): null;
					remoteTargetStatus(pull: pull): targetStatus;
					targetCreate(cfg: configuration, name: string, urls: string[], retrySecondsMin: number, retrySecondsMax: number, documentsPerBatch: number, enabled: boolean, httpOptions: httpOptions, replicateCpf: boolean, filterModule: string, filterOptions: filterOptions, userId?: ID, immediatePush?: boolean): configuration;
					targetDelete(cfg: configuration, targetId: ID): configuration;
					targetErrorDocuments(domainId: ID, targetIds: ID[]): Sequence;
					targetStatus(domainId: ID, targetIds: ID[]): Sequence;
					upgradeAppServer(cfg: configuration, ids: ID[]): configuration;
				}
			}
		}
	}
}
