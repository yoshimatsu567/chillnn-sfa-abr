import { ClientMast, compareNumDesc, compareStrAsc, FetchClientsByPhaseInput, Scalars } from '../..';
import { ClientModel } from '../../entities/models/modules/clientModel';
import { IClientMastRepository } from '../../entities/repositories/modules/clientMastRepository';

type UserCache = {
        [clientID: string]:
                | {
                          [clientID: string]: ClientMast;
                  }
                | undefined;
};

type ClientCache = {
        [clientID: string]: ClientMast | 'blanc' | undefined;
};

export class ClientMastRepositoryCacheAdaptor implements IClientMastRepository {
        private userCache: UserCache = {};
        private clientCache: ClientCache = {};
        private clientEachCache: ClientCache = {};
        private clientAllCache: ClientCache | null = null;
        constructor(private repository: IClientMastRepository) {}

        async addClient(input: ClientMast): Promise<ClientMast> {
                const res = await this.repository.addClient(input);
                this.updateCacheEach(res.clientID, res);
                this.targetClientID = res.clientID;
                return res;
        }

        async updateClient(input: ClientMast): Promise<ClientMast> {
                const res = await this.repository.updateClient(input);
                this.updateCacheEach(res.clientID, res);
                this.targetClientID = res.clientID;
                return res;
        }

        async deleteClient(clientID: string): Promise<ClientMast | null> {
                const res = await this.repository.deleteClient(clientID);
                if (res) {
                        res.deletedAt = new Date().getTime();
                        this.addCacheEach(clientID, res);
                        return res;
                } else {
                        return null;
                }
        }

        async fetchClientByClientID(clientID: string): Promise<ClientMast | null> {
                const cache = this.fetchCacheClientMast(clientID);
                if (cache && cache === 'blanc') {
                        return null;
                } else if (cache) {
                        return cache;
                }
                const res = await this.repository.fetchClientByClientID(clientID);
                this.updateCacheEach(clientID, res);
                return res;
        }

        async fetchClientsByChargeUserID(userID: string): Promise<ClientMast[]> {
                const cache = this.fetchCacheClientAll();
                if (cache) return cache;
                const res = await this.repository.fetchClientsByChargeUserID(userID);
                this.addCacheBulk(userID, res);
                return res.sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
        }

        async fetchAllClient(): Promise<ClientMast[]> {
                const cache = this.fetchCacheClientAll();
                if (cache) return cache;
                const res = await this.repository.fetchAllClient();
                this.updateCacheBulk(res);
                return res;
        }

        async fetchClientsByPhaseDetailStatus(phaseDetailStatus: string): Promise<ClientMast[] | null> {
                const cache = this.fetchClientsByPhaseDetailStatus(phaseDetailStatus);
                if (cache) return cache;
                const res = await this.repository.fetchClientsByPhaseDetailStatus(phaseDetailStatus);
                // this.addCacheClientsByPhaseContentBulk(phaseDetail, res);
                if (res) {
                        res.sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
                        return res.sort((a, b) => compareStrAsc(a.phaseDetailStatus!, b.phaseDetailStatus!));
                } else {
                        return null;
                }
        }

        // ===============================================================
        //
        // private
        //
        // ===============================================================
        private targetClientID: string | null = null;
        private addCacheEach(clientID: Scalars['ID'], client: ClientMast | null) {
                this.clientCache[clientID] = client || 'blanc';
                if (!client) return;
                if (client.chargeUserID) {
                        const userCache = this.userCache[client.chargeUserID];
                        if (userCache) {
                                userCache[clientID] = client;
                        }
                }
        }
        private addCacheBulk(userID: Scalars['ID'], clients: ClientMast[]) {
                this.userCache[userID] = {};
                for (const client of clients) {
                        this.addCacheEach(client.clientID, client);
                }
        }

        private addCacheClientsByPhaseContentBulk(phaseContent: FetchClientsByPhaseInput, clients: ClientMast[]) {
                // this.clientsCacheByPhase[phaseContent] = clients;
                // for (const client of clients) {
                //     this.addCacheEach(client.clientID, client);
                // }
        }

        private updateCacheEach(clientID: string, client: ClientMast | null) {
                this.clientEachCache[clientID] = client || 'blanc';
                if (this.clientAllCache && client) {
                        this.clientAllCache[clientID] = client;
                }
        }
        private updateCacheBulk(clients: ClientMast[]) {
                this.clientAllCache = {};
                for (const client of clients) {
                        this.updateCacheEach(client.clientID, client);
                }
        }
        private fetchCacheClientMast(clientID: Scalars['ID']) {
                return this.clientEachCache[clientID];
        }
        private fetchCacheClientAll() {
                if (!this.clientAllCache) return null;
                return Object.keys(this.clientAllCache)
                        .map((key) => {
                                return this.clientAllCache![key]! as ClientMast;
                        })
                        .sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
        }
}
