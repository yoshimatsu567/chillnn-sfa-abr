import { PhaseMast, PHASE_STATUS, Scalars } from '../..';
import { generateUUID } from '../../..';
import { BaseModel } from './_baseModel';

export class PhaseModel extends BaseModel<PhaseMast> {
        static getPhaseTitleBlanc() {
                return {
                        phaseID: generateUUID(),
                        phaseNumber: 0,
                        phaseDetail: '',
                        phaseStatus: 'TITLE' as PHASE_STATUS,
                        createdAt: new Date().getTime(),
                        updatedAt: new Date().getTime(),
                };
        }

        static getPhaseDataBlanc(clientID: Scalars['ID']) {
                return {
                        phaseID: generateUUID(),
                        phaseNumber: 0,
                        phaseDetail: '',
                        clientID,
                        phaseDate: '',
                        phaseStatus: 'DATA' as PHASE_STATUS,
                        createdAt: new Date().getTime(),
                        updatedAt: new Date().getTime(),
                };
        }
        // ============================================
        // getters
        // ============================================
        get phaseID() {
                return this.mast.phaseID;
        }

        get createdAt() {
                return this.mast.createdAt;
        }
        get updatedAt() {
                return this.mast.updatedAt;
        }
        // ============================================
        // getter / setter
        // ============================================
        get clientID() {
                return this.mast.clientID || '';
        }
        set clientID(input: string) {
                if (input) {
                        this.mast.clientID = input;
                } else {
                        this.mast.clientID = null;
                }
        }
        get editedUserID() {
                return this.mast.editedUserID || '';
        }
        set editedUserID(input: string) {
                if (input) {
                        this.mast.editedUserID = input;
                } else {
                        this.mast.editedUserID = null;
                }
        }
        get phaseDetail() {
                return this.mast.phaseDetail;
        }
        set phaseDetail(input: string) {
                this.mast.phaseDetail = input;
        }
        get phaseStatus() {
                return this.mast.phaseStatus;
        }
        set phaseStatus(input: PHASE_STATUS) {
                this.mast.phaseStatus = input;
        }
        get phaseTerm() {
                return this.mast.phaseTerm || '';
        }
        set phaseTerm(input: string) {
                if (input) {
                        this.mast.phaseTerm = input;
                } else {
                        this.mast.phaseTerm = null;
                }
        }
        get phaseDate() {
                return this.mast.phaseDate || '';
        }
        set phaseDate(input: string) {
                if (input) {
                        this.mast.phaseDate = input;
                } else {
                        this.mast.phaseDate = null;
                }
        }
        get phaseNumber() {
                return this.mast.phaseNumber || 0;
        }
        set phaseNumber(input: number) {
                if (input) {
                        this.mast.phaseNumber = input;
                } else {
                        this.mast.phaseNumber = 0;
                }
        }
        get deletedAt() {
                return this.mast.deletedAt || 0;
        }

        set deletedAt(input: number) {
                if (input) {
                        this.mast.deletedAt = input;
                } else {
                        this.mast.deletedAt = 0;
                }
        }

        async register(): Promise<void> {
                const now = new Date().getTime();
                if (this.isNew) {
                        this.mast.createdAt = now;
                        this.mast.updatedAt = now;
                        this.mast = await this.repositoryContainer.phaseMastRepository.addPhase(this.mast);
                } else {
                        this.mast.updatedAt = now;
                        await this.repositoryContainer.phaseMastRepository.updatePhase(this.mast);
                }
                this.isNew = false;
        }
}
