import { compareNumAsc, compareNumDesc, EventMast, Scalars } from '../..';
import { IEventMastRepository } from '../../entities/repositories/modules/eventMastRepository';

type ClientCache = {
        [clientID: string]:
                | {
                          [eventID: string]: EventMast;
                  }
                | undefined;
};

type EventCache = {
        [eventID: string]: EventMast | 'blanc' | undefined;
};

export class EventRepositoryCacheAdaptor implements IEventMastRepository {
        private clientCache: ClientCache = {};
        private eventCache: EventCache = {};
        private eventAllCache: EventCache | null = null;
        private eventEachCache: EventCache = {};

        constructor(private repository: IEventMastRepository) {}

        async addEvent(input: EventMast): Promise<EventMast> {
                const res = await this.repository.addEvent(input);
                this.addCacheEach(res.eventID, res);
                return res;
        }

        async updateEvent(input: EventMast): Promise<EventMast> {
                const res = await this.repository.updateEvent(input);
                this.addCacheEach(res.eventID, res);
                return res;
        }

        async deleteEvent(eventID: string): Promise<EventMast> {
                const res = await this.repository.deleteEvent(eventID);
                res.deletedAt = new Date().getTime();
                this.addCacheEach(eventID, res);
                return res;
        }

        async fetchEventByEventID(eventID: string): Promise<EventMast | null> {
                const cache = this.fetchEvent(eventID);
                if (cache && cache === 'blanc') {
                        return null;
                } else if (cache) {
                        return cache;
                }
                const res = await this.repository.fetchEventByEventID(eventID);
                this.addCacheEach(eventID, res);
                return res;
        }

        async fetchEventsByClientID(clientID: Scalars['ID']): Promise<EventMast[]> {
                const cache = this.fetchEventsByClient(clientID);
                if (cache) return cache;
                const res = await this.repository.fetchEventsByClientID(clientID);
                this.addCacheBulk(clientID, res);
                return res.sort((a, b) => compareNumAsc(a.createdAt, b.createdAt));
        }

        async fetchEventsByEditedUserID(editedUserID: Scalars['ID']): Promise<EventMast[]> {
                const cache = this.fetchEventsByEditedUser(editedUserID);
                if (cache) return cache;
                const res = await this.repository.fetchEventsByEditedUserID(editedUserID);
                this.addCacheBulk(editedUserID, res);
                return res.sort((a, b) => compareNumAsc(a.createdAt, b.createdAt));
        }

        async fetchAllEvent(): Promise<EventMast[]> {
                const cache = this.fetchCacheEventAll();
                if (cache) return cache;
                const res = await this.repository.fetchAllEvent();
                this.updateCacheBulk(res);
                return res;
        }

        // ===============================================================
        //
        // private
        //
        // ===============================================================
        private addCacheEach(eventID: Scalars['ID'], event: EventMast | null) {
                this.eventCache[eventID] = event || 'blanc';
                if (!event) return;
                const clientCache = this.clientCache[event.clientID!];
                if (clientCache) {
                        clientCache[eventID] = event;
                }
        }

        private addCacheBulk(clientID: Scalars['ID'], events: EventMast[]) {
                this.clientCache[clientID] = {};
                for (const event of events) {
                        this.addCacheEach(event.clientID!, event);
                }
        }

        private updateCacheEach(eventID: Scalars['ID'], event: EventMast | null) {
                this.eventEachCache[eventID] = event || 'blanc';
                if (this.eventAllCache && event) {
                        this.eventAllCache[eventID] = event;
                }
        }

        private updateCacheBulk(events: EventMast[]) {
                this.eventAllCache = {};
                for (const event of events) {
                        this.updateCacheEach(event.eventID, event);
                }
        }

        private fetchEvent(eventID: Scalars['ID']) {
                return this.eventCache[eventID];
        }

        private fetchEventsByClient(clientID: Scalars['ID']) {
                const clientCache = this.clientCache[clientID];
                if (!clientCache) return null;
                return Object.keys(clientCache)
                        .map((key) => {
                                return clientCache[key]!;
                        })
                        .sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
        }

        private fetchEventsByEditedUser(editedUserID: Scalars['ID']) {
                const clientCache = this.clientCache[editedUserID];
                if (!clientCache) return null;
                return Object.keys(clientCache)
                        .map((key) => {
                                return clientCache[key]!;
                        })
                        .sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
        }

        private fetchCacheEventAll() {
                if (!this.eventAllCache) return null;
                return Object.keys(this.eventAllCache)
                        .map((key) => {
                                return this.eventAllCache![key]! as EventMast;
                        })
                        .sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
        }
}
