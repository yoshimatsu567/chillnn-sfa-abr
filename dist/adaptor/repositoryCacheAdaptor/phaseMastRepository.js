"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseRepositoryCacheAdaptor = void 0;
const __1 = require("../..");
class PhaseRepositoryCacheAdaptor {
    constructor(repository) {
        this.repository = repository;
        this.clientCache = {};
        this.phaseCache = {};
        this.phaseAllCache = null;
        this.phaseEachCache = {};
    }
    async addPhase(input) {
        const res = await this.repository.addPhase(input);
        this.addCacheEach(res.phaseID, res);
        return res;
    }
    async updatePhase(input) {
        const res = await this.repository.updatePhase(input);
        this.addCacheEach(res.phaseID, res);
        return res;
    }
    async fetchPhasesByClientID(clientID) {
        const cache = this.fetchPhasesByClient(clientID);
        if (cache)
            return cache;
        const res = await this.repository.fetchPhasesByClientID(clientID);
        this.addCacheBulk(clientID, res);
        return res.sort((a, b) => __1.compareNumAsc(a.createdAt, b.createdAt));
    }
    async fetchPhasesByEditedUserID(editedUserID) {
        const cache = this.fetchPhasesByEditedUser(editedUserID);
        if (cache)
            return cache;
        const res = await this.repository.fetchPhasesByEditedUserID(editedUserID);
        this.addCacheBulk(editedUserID, res);
        return res.sort((a, b) => __1.compareNumAsc(a.createdAt, b.createdAt));
    }
    async fetchAllPhase() {
        const cache = this.fetchCachePhaseAll();
        if (cache)
            return cache;
        const res = await this.repository.fetchAllPhase();
        this.updateCacheBulk(res);
        return res;
    }
    // ===============================================================
    //
    // private
    //
    // ===============================================================
    addCacheEach(phaseID, phase) {
        this.phaseCache[phaseID] = phase || 'blanc';
        if (!phase)
            return;
        const clientCache = this.clientCache[phase.clientID];
        if (clientCache) {
            clientCache[phaseID] = phase;
        }
    }
    addCacheBulk(clientID, phases) {
        this.clientCache[clientID] = {};
        for (const phase of phases) {
            this.addCacheEach(phase.clientID, phase);
        }
    }
    updateCacheEach(phaseID, phase) {
        this.phaseEachCache[phaseID] = phase || 'blanc';
        if (this.phaseAllCache && phase) {
            this.phaseAllCache[phaseID] = phase;
        }
    }
    updateCacheBulk(phases) {
        this.phaseAllCache = {};
        for (const phase of phases) {
            this.updateCacheEach(phase.phaseID, phase);
        }
    }
    fetchPhasesByClient(clientID) {
        const clientCache = this.clientCache[clientID];
        if (!clientCache)
            return null;
        return Object.keys(clientCache)
            .map((key) => {
            return clientCache[key];
        })
            .sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
    fetchPhasesByEditedUser(editedUserID) {
        const clientCache = this.clientCache[editedUserID];
        if (!clientCache)
            return null;
        return Object.keys(clientCache)
            .map((key) => {
            return clientCache[key];
        })
            .sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
    fetchCachePhaseAll() {
        if (!this.phaseAllCache)
            return null;
        return Object.keys(this.phaseAllCache)
            .map((key) => {
            return this.phaseAllCache[key];
        })
            .sort((a, b) => __1.compareNumAsc(a.phaseNumber, b.phaseNumber));
    }
}
exports.PhaseRepositoryCacheAdaptor = PhaseRepositoryCacheAdaptor;
