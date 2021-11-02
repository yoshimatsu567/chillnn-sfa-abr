import { ClientMast } from '../..';
import { IClientMastRepository } from '../../entities/repositories/modules/clientMastRepository';
export declare class ClientMastRepositoryCacheAdaptor implements IClientMastRepository {
    private repository;
    private userCache;
    private clientCache;
    private clientEachCache;
    private clientAllCache;
    constructor(repository: IClientMastRepository);
    addClient(input: ClientMast): Promise<ClientMast>;
    updateClient(input: ClientMast): Promise<ClientMast>;
    fetchClientByClientID(clientID: string): Promise<ClientMast | null>;
    fetchClientsByChargeUserID(userID: string): Promise<ClientMast[]>;
    fetchAllClient(): Promise<ClientMast[]>;
    private targetClientID;
    private addCacheEach;
    private addCacheBulk;
    private updateCacheEach;
    private updateCacheBulk;
    private fetchCacheClientMast;
    private fetchCacheClientAll;
}
