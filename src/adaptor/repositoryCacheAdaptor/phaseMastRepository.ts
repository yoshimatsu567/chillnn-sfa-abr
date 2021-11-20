import { compareNumAsc, compareNumDesc, PhaseMast, Scalars } from '../..';
import { IPhaseMastRepository } from '../../entities/repositories/modules/phaseMastRepository';

type ClientCache = {
        [clientID: string]:
                | {
                          [phaseID: string]: PhaseMast;
                  }
                | undefined;
};

type phaseCache = {
        [phaseID: string]: PhaseMast | 'blanc' | undefined;
};

export class PhaseRepositoryCacheAdaptor implements IPhaseMastRepository {
        private clientCache: ClientCache = {};
        private phaseCache: phaseCache = {};
        private phaseAllCache: phaseCache | null = null;
        private phaseEachCache: phaseCache = {};

        constructor(private repository: IPhaseMastRepository) {}

        async addPhase(input: PhaseMast): Promise<PhaseMast> {
                const res = await this.repository.addPhase(input);
                this.addCacheEach(res.phaseID, res);
                return res;
        }

        async updatePhase(input: PhaseMast): Promise<PhaseMast> {
                const res = await this.repository.updatePhase(input);
                this.addCacheEach(res.phaseID, res);
                return res;
        }

        async deletePhase(phaseID: string): Promise<PhaseMast> {
                const res = await this.repository.deletePhase(phaseID);
                res.deletedAt = new Date().getTime();
                this.addCacheEach(phaseID, res);
                return res;
        }

        async fetchPhaseByPhaseID(phaseID: string): Promise<PhaseMast | null> {
                const cache = this.fetchPhase(phaseID);
                if (cache && cache === 'blanc') {
                        return null;
                } else if (cache) {
                        return cache;
                }
                const res = await this.repository.fetchPhaseByPhaseID(phaseID);
                this.addCacheEach(phaseID, res);
                return res;
        }

        async fetchPhaseDataByClientID(clientID: Scalars['ID']): Promise<PhaseMast[]> {
                const cache = this.fetchPhasesByClient(clientID);
                if (cache) return cache;
                const res = await this.repository.fetchPhaseDataByClientID(clientID);
                this.addCacheBulk(clientID, res);
                if (res) {
                        return res.sort((a, b) => compareNumAsc(a.phaseNumber, b.phaseNumber));
                } else {
                        return res;
                }
        }

        async fetchPhaseDataByClientIDAndPhaseDetail(clientID: Scalars['ID'], phaseStatus: Scalars['String']): Promise<PhaseMast | null> {
                const cache = this.fetchPhaseDataByClientIDAndPhaseDetail(clientID, phaseStatus);
                if (cache) return cache;
                const res = await this.repository.fetchPhaseDataByClientIDAndPhaseDetail(clientID, phaseStatus);
                return res;
        }

        async fetchPhaseDataByEditedUserID(editedUserID: Scalars['ID']): Promise<PhaseMast[]> {
                const cache = this.fetchPhaseDataByEditedUserID(editedUserID);
                if (cache) return cache;
                const res = await this.repository.fetchPhaseDataByEditedUserID(editedUserID);
                this.addCacheBulk(editedUserID, res);
                return res.sort((a, b) => compareNumAsc(a.phaseNumber, b.phaseNumber));
        }

        async fetchAllPhase(): Promise<PhaseMast[]> {
                const cache = this.fetchCachePhaseAll();
                if (cache) return cache;
                const res = await this.repository.fetchAllPhase();
                this.updateAllPhaseCacheBulk(res);
                return res;
        }

        // ===============================================================
        //
        // private
        //
        // ===============================================================
        private addCacheEach(phaseID: Scalars['ID'], phase: PhaseMast | null) {
                this.phaseCache[phaseID] = phase || 'blanc';
                if (!phase) return;
                const clientCache = this.clientCache[phase.clientID!];
                if (clientCache) {
                        clientCache[phaseID] = phase;
                }
        }

        private addCacheBulk(clientID: Scalars['ID'], phases: PhaseMast[]) {
                this.clientCache[clientID] = {};
                for (const phase of phases) {
                        this.addCacheEach(phase.clientID!, phase);
                }
        }

        // private fetchPhaseUserMast(clientID: Scalars['ID'], phaseStatus: Scalars['String']) {
        //         return this.phaseCache[(clientID, phaseStatus)];
        // }

        private updateCacheEach(phaseID: Scalars['ID'], phase: PhaseMast | null) {
                this.phaseEachCache[phaseID] = phase || 'blanc';
                if (this.phaseAllCache && phase) {
                        this.phaseAllCache[phaseID] = phase;
                }
        }

        private fetchPhase(phaseID: Scalars['ID']) {
                return this.phaseCache[phaseID];
        }

        private updateAllPhaseCacheBulk(phases: PhaseMast[]) {
                this.phaseAllCache = {};
                for (const phase of phases) {
                        this.updateCacheEach(phase.phaseID, phase);
                }
        }

        private updateAllPhaseTitleCacheBulk(phases: PhaseMast[]) {
                this.phaseAllCache = {};
                for (const phase of phases) {
                        this.updateCacheEach(phase.phaseID, phase);
                }
        }

        private fetchPhasesByClient(clientID: Scalars['ID']) {
                const clientCache = this.clientCache[clientID];
                if (!clientCache) return null;
                return Object.keys(clientCache)
                        .map((key) => {
                                return clientCache[key]!;
                        })
                        .sort((a, b) => compareNumDesc(a.phaseNumber, b.phaseNumber));
        }

        private fetchPhasesByEditedUser(editedUserID: Scalars['ID']) {
                const clientCache = this.clientCache[editedUserID];
                if (!clientCache) return null;
                return Object.keys(clientCache)
                        .map((key) => {
                                return clientCache[key]!;
                        })
                        .sort((a, b) => compareNumDesc(a.phaseNumber, b.phaseNumber));
        }

        private fetchCachePhaseAll() {
                if (!this.phaseAllCache) return null;
                return Object.keys(this.phaseAllCache)
                        .map((key) => {
                                return this.phaseAllCache![key]! as PhaseMast;
                        })
                        .sort((a, b) => compareNumAsc(a.phaseNumber, b.phaseNumber));
        }
}
