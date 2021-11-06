import { PhaseMast, Scalars } from '../..';
import { generateUUID } from '../../..';
import { BaseModel } from './_baseModel';

export class PhaseModel extends BaseModel<PhaseMast> {
    static getPhaseBlanc(clientID: Scalars['ID'], editedUserID: Scalars['ID']) {
        return {
            phaseID: generateUUID(),
            clientID,
            editedUserID,
            phaseNumber: 0,
            phaseDetail: '',
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
    get clientID() {
        return this.mast.clientID;
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
    get editedUserID() {
        return this.mast.editedUserID;
    }
    set editedUserID(input: string) {
        this.mast.editedUserID = input;
    }
    get phaseDetail() {
        return this.mast.phaseDetail;
    }
    set phaseDetail(input: string) {
        this.mast.phaseDetail = input;
    }
    get phaseStatus() {
        return this.mast.phaseStatus || '';
    }
    set phaseStatus(input: string) {
        if (input) {
            this.mast.phaseStatus = input;
        } else {
            this.mast.phaseStatus = null;
        }
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
