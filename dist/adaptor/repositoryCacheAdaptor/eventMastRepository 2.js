"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRepositoryCacheAdaptor = void 0;
const __1 = require("../..");
class EventRepositoryCacheAdaptor {
    constructor(repository) {
        this.repository = repository;
        this.clientCache = {};
        this.eventCache = {};
        this.eventAllCache = null;
        this.eventEachCache = {};
    }
    async addEvent(input) {
        const res = await this.repository.addEvent(input);
        this.addCacheEach(res.eventID, res);
        return res;
    }
    async updateEvent(input) {
        const res = await this.repository.updateEvent(input);
        this.addCacheEach(res.eventID, res);
        return res;
    }
    async deleteEvent(eventID) {
        const res = await this.repository.deleteEvent(eventID);
        res.deletedAt = new Date().getTime();
        this.addCacheEach(eventID, res);
        return res;
    }
    async fetchEventByEventID(eventID) {
        const cache = this.fetchEvent(eventID);
        if (cache && cache === 'blanc') {
            return null;
        }
        else if (cache) {
            return cache;
        }
        const res = await this.repository.fetchEventByEventID(eventID);
        this.addCacheEach(eventID, res);
        return res;
    }
    async fetchEventsByClientID(clientID) {
        const cache = this.fetchEventsByClient(clientID);
        if (cache)
            return cache;
        const res = await this.repository.fetchEventsByClientID(clientID);
        this.addCacheBulk(clientID, res);
        return res.sort((a, b) => __1.compareNumAsc(a.createdAt, b.createdAt));
    }
    async fetchEventsByEditedUserID(editedUserID) {
        const cache = this.fetchEventsByEditedUser(editedUserID);
        if (cache)
            return cache;
        const res = await this.repository.fetchEventsByEditedUserID(editedUserID);
        this.addCacheBulk(editedUserID, res);
        return res.sort((a, b) => __1.compareNumAsc(a.createdAt, b.createdAt));
    }
    async fetchAllEvent() {
        const cache = this.fetchCacheEventAll();
        if (cache)
            return cache;
        const res = await this.repository.fetchAllEvent();
        this.updateCacheBulk(res);
        return res;
    }
    // ===============================================================
    //
    // private
    //
    // ===============================================================
    addCacheEach(eventID, event) {
        this.eventCache[eventID] = event || 'blanc';
        if (!event)
            return;
        const clientCache = this.clientCache[event.clientID];
        if (clientCache) {
            clientCache[eventID] = event;
        }
    }
    addCacheBulk(clientID, events) {
        this.clientCache[clientID] = {};
        for (const event of events) {
            this.addCacheEach(event.clientID, event);
        }
    }
    updateCacheEach(eventID, event) {
        this.eventEachCache[eventID] = event || 'blanc';
        if (this.eventAllCache && event) {
            this.eventAllCache[eventID] = event;
        }
    }
    updateCacheBulk(events) {
        this.eventAllCache = {};
        for (const event of events) {
            this.updateCacheEach(event.eventID, event);
        }
    }
    fetchEvent(eventID) {
        return this.eventCache[eventID];
    }
    fetchEventsByClient(clientID) {
        const clientCache = this.clientCache[clientID];
        if (!clientCache)
            return null;
        return Object.keys(clientCache)
            .map((key) => {
            return clientCache[key];
        })
            .sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
    fetchEventsByEditedUser(editedUserID) {
        const clientCache = this.clientCache[editedUserID];
        if (!clientCache)
            return null;
        return Object.keys(clientCache)
            .map((key) => {
            return clientCache[key];
        })
            .sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
    fetchCacheEventAll() {
        if (!this.eventAllCache)
            return null;
        return Object.keys(this.eventAllCache)
            .map((key) => {
            return this.eventAllCache[key];
        })
            .sort((a, b) => __1.compareNumDesc(a.createdAt, b.createdAt));
    }
}
exports.EventRepositoryCacheAdaptor = EventRepositoryCacheAdaptor;
