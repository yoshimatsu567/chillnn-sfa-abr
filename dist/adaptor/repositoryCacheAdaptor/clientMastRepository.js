"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMastRepositoryCacheAdaptor = void 0;
const __1 = require("../..");
class ClientMastRepositoryCacheAdaptor {
    constructor(repository) {
        this.repository = repository;
        this.userCache = {};
        this.clientCache = {};
        this.clientEachCache = {};
        this.clientAllCache = null;
        // ===============================================================
        //
        // private
        //
        // ===============================================================
        this.targetClientID = null;
    }
    async addClient(input) {
        const res = await this.repository.addClient(input);
        this.updateCacheEach(res.clientID, res);
        this.targetClientID = res.clientID;
        return res;
    }
    async updateClient(input) {
        const res = await this.repository.updateClient(input);
        this.updateCacheEach(res.clientID, res);
        this.targetClientID = res.clientID;
        return res;
    }
    async fetchClientByClientID(clientID) {
        const cache = this.fetchCacheClientMast(clientID);
        if (cache && cache === 'blanc') {
            return null;
        }
        else if (cache) {
            return cache;
        }
        const res = await this.repository.fetchClientByClientID(clientID);
        this.updateCacheEach(clientID, res);
        return res;
    }
    async fetchClientsByChargeUserID(userID) {
        const cache = this.fetchCacheClientAll();
        if (cache)
            return cache;
        const res = await this.repository.fetchClientsByChargeUserID(userID);
        this.addCacheBulk(userID, res);
        return res.sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
    async fetchAllClient() {
        const cache = this.fetchCacheClientAll();
        if (cache)
            return cache;
        const res = await this.repository.fetchAllClient();
        this.updateCacheBulk(res);
        return res;
    }
    addCacheEach(clientID, client) {
        this.clientCache[clientID] = client || 'blanc';
        if (!client)
            return;
        if (client.chargeUserID) {
            const userCache = this.userCache[client.chargeUserID];
            if (userCache) {
                userCache[clientID] = client;
            }
        }
    }
    addCacheBulk(userID, clients) {
        this.userCache[userID] = {};
        for (const client of clients) {
            this.addCacheEach(client.clientID, client);
        }
    }
    updateCacheEach(clientID, client) {
        this.clientEachCache[clientID] = client || 'blanc';
        if (this.clientAllCache && client) {
            this.clientAllCache[clientID] = client;
        }
    }
    updateCacheBulk(clients) {
        this.clientAllCache = {};
        for (const client of clients) {
            this.updateCacheEach(client.clientID, client);
        }
    }
    fetchCacheClientMast(clientID) {
        return this.clientEachCache[clientID];
    }
    fetchCacheClientAll() {
        if (!this.clientAllCache)
            return null;
        return Object.keys(this.clientAllCache)
            .map((key) => {
            return this.clientAllCache[key];
        })
            .sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
}
exports.ClientMastRepositoryCacheAdaptor = ClientMastRepositoryCacheAdaptor;
