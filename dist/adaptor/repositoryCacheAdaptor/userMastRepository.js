"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMastRepositoryCacheAdaptor = void 0;
const __1 = require("../..");
const entities_1 = require("../../entities");
class UserMastRepositoryCacheAdaptor {
    // private phaseNumberCache: PhaseNumberCache = {};
    // private phaseDetailCache: PhaseDetailCache = {};
    constructor(repository) {
        this.repository = repository;
        this.userCache = {};
        this.userEachCache = {};
        this.userAllCache = null;
        this.phaseCache = {};
        // ===============================================================
        //
        // private
        //
        // ===============================================================
        this.myUserID = null;
    }
    async addUserMast(input) {
        const res = await this.repository.addUserMast(input);
        this.updateCacheEach(res.userID, res);
        this.myUserID = res.userID;
        return res;
    }
    async updateUserMast(input) {
        const res = await this.repository.updateUserMast(input);
        this.updateCacheEach(res.userID, res);
        this.myUserID = res.userID;
        return res;
    }
    async fetchMyUserMast() {
        if (this.myUserID)
            return this.fetchCacheUserMast(this.myUserID);
        const res = await this.repository.fetchMyUserMast();
        if (!res) {
            throw new __1.ChillnnSFAError(entities_1.ErrorCode.chillnnSFAError_401_notSignIn);
        }
        else {
            this.myUserID = res.userID;
            this.updateCacheEach(res.userID, res);
        }
        return res;
    }
    async fetchUserMastByUserID(userID) {
        const cache = this.fetchCacheUserMast(userID);
        if (cache && cache === 'blanc') {
            return null;
        }
        else if (cache) {
            return cache;
        }
        const res = await this.repository.fetchUserMastByUserID(userID);
        this.updateCacheEach(userID, res);
        return res;
    }
    async fetchAllUser() {
        const cache = this.fetchCacheUserAll();
        if (cache)
            return cache;
        const res = await this.repository.fetchAllUser();
        this.updateCacheBulk(res);
        return res;
    }
    async fetchUsersMastByPhaseNumber(phaseNumber) {
        const cache = this.fetchUsersMastByPhaseNumber(phaseNumber);
        if (cache)
            return cache;
        const res = await this.repository.fetchUsersMastByPhaseNumber(phaseNumber);
        this.addCachePhaseBulk(phaseNumber, res);
        return res.sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
    async fetchUsersMastByPhaseDetail(phaseDetail) {
        const cache = this.fetchUsersMastByPhaseDetail(phaseDetail);
        if (cache)
            return cache;
        const res = await this.repository.fetchUsersMastByPhaseDetail(phaseDetail);
        this.addCachePhaseBulk(phaseDetail, res);
        return res.sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
    addCacheEach(phaseData, user) {
        this.userCache[phaseData] = user || 'blanc';
        if (!user)
            return;
        if (user.userID) {
            const phaseCache = this.phaseCache[user.userID];
            if (phaseCache) {
                phaseCache[phaseData] = user;
            }
        }
    }
    addCachePhaseBulk(phaseProps, users) {
        this.phaseCache[phaseProps] = {};
        for (const user of users) {
            this.addCacheEach(user.userID, user);
        }
    }
    updateCacheEach(userID, user) {
        this.userEachCache[userID] = user || 'blanc';
        if (this.userAllCache && user) {
            this.userAllCache[userID] = user;
        }
    }
    updateCacheBulk(users) {
        this.userAllCache = {};
        for (const user of users) {
            this.updateCacheEach(user.userID, user);
        }
    }
    fetchCacheUserMast(userID) {
        return this.userEachCache[userID];
    }
    fetchCacheUserAll() {
        if (!this.userAllCache)
            return null;
        return Object.keys(this.userAllCache)
            .map((key) => {
            return this.userAllCache[key];
        })
            .sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
}
exports.UserMastRepositoryCacheAdaptor = UserMastRepositoryCacheAdaptor;
