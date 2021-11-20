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
    async deletePhase(phaseID) {
        const res = await this.repository.deletePhase(phaseID);
        res.deletedAt = new Date().getTime();
        this.addCacheEach(phaseID, res);
        return res;
    }
    async fetchPhaseByPhaseID(phaseID) {
        const cache = this.fetchPhase(phaseID);
        if (cache && cache === 'blanc') {
            return null;
        }
        else if (cache) {
            return cache;
        }
        const res = await this.repository.fetchPhaseByPhaseID(phaseID);
        this.addCacheEach(phaseID, res);
        return res;
    }
    async fetchPhaseDataByClientID(clientID) {
        const cache = this.fetchPhasesByClient(clientID);
        if (cache)
            return cache;
        const res = await this.repository.fetchPhaseDataByClientID(clientID);
        this.addCacheBulk(clientID, res);
        if (res) {
            return res.sort((a, b) => __1.compareNumAsc(a.phaseNumber, b.phaseNumber));
        }
        else {
            return res;
        }
    }
    async fetchPhaseDataByClientIDAndPhaseDetail(clientID, phaseStatus) {
        const cache = this.fetchPhaseDataByClientIDAndPhaseDetail(clientID, phaseStatus);
        if (cache)
            return cache;
        const res = await this.repository.fetchPhaseDataByClientIDAndPhaseDetail(clientID, phaseStatus);
        return res;
    }
    async fetchPhaseDataByEditedUserID(editedUserID) {
        const cache = this.fetchPhaseDataByEditedUserID(editedUserID);
        if (cache)
            return cache;
        const res = await this.repository.fetchPhaseDataByEditedUserID(editedUserID);
        this.addCacheBulk(editedUserID, res);
        return res.sort((a, b) => __1.compareNumAsc(a.phaseNumber, b.phaseNumber));
    }
    async fetchAllPhase() {
        const cache = this.fetchCachePhaseAll();
        if (cache)
            return cache;
        const res = await this.repository.fetchAllPhase();
        this.updateAllPhaseCacheBulk(res);
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
    // private fetchPhaseUserMast(clientID: Scalars['ID'], phaseStatus: Scalars['String']) {
    //         return this.phaseCache[(clientID, phaseStatus)];
    // }
    updateCacheEach(phaseID, phase) {
        this.phaseEachCache[phaseID] = phase || 'blanc';
        if (this.phaseAllCache && phase) {
            this.phaseAllCache[phaseID] = phase;
        }
    }
    fetchPhase(phaseID) {
        return this.phaseCache[phaseID];
    }
    updateAllPhaseCacheBulk(phases) {
        this.phaseAllCache = {};
        for (const phase of phases) {
            this.updateCacheEach(phase.phaseID, phase);
        }
    }
    updateAllPhaseTitleCacheBulk(phases) {
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
            .sort((a, b) => __1.compareNumDesc(a.phaseNumber, b.phaseNumber));
    }
    fetchPhasesByEditedUser(editedUserID) {
        const clientCache = this.clientCache[editedUserID];
        if (!clientCache)
            return null;
        return Object.keys(clientCache)
            .map((key) => {
            return clientCache[key];
        })
            .sort((a, b) => __1.compareNumDesc(a.phaseNumber, b.phaseNumber));
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
