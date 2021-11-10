"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseModel = void 0;
const __1 = require("../../..");
const _baseModel_1 = require("./_baseModel");
class PhaseModel extends _baseModel_1.BaseModel {
    static getPhaseTitleBlanc(phaseStatus) {
        return {
            phaseID: __1.generateUUID(),
            phaseNumber: 0,
            phaseDetail: '',
            phaseStatus,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        };
    }
    static getPhaseDataBlanc(clientID, phaseStatus) {
        return {
            phaseID: __1.generateUUID(),
            phaseNumber: 0,
            phaseDetail: '',
            clientID,
            phaseStatus,
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
    set clientID(input) {
        if (input) {
            this.mast.clientID = input;
        }
        else {
            this.mast.clientID = null;
        }
    }
    get editedUserID() {
        return this.mast.editedUserID || '';
    }
    set editedUserID(input) {
        if (input) {
            this.mast.editedUserID = input;
        }
        else {
            this.mast.editedUserID = null;
        }
    }
    get phaseDetail() {
        return this.mast.phaseDetail;
    }
    set phaseDetail(input) {
        this.mast.phaseDetail = input;
    }
    get phaseStatus() {
        return this.mast.phaseStatus;
    }
    set phaseStatus(input) {
        this.mast.phaseStatus = input;
    }
    get phaseTerm() {
        return this.mast.phaseTerm || '';
    }
    set phaseTerm(input) {
        if (input) {
            this.mast.phaseTerm = input;
        }
        else {
            this.mast.phaseTerm = null;
        }
    }
    get phaseDate() {
        return this.mast.phaseDate || '';
    }
    set phaseDate(input) {
        if (input) {
            this.mast.phaseDate = input;
        }
        else {
            this.mast.phaseDate = null;
        }
    }
    get phaseNumber() {
        return this.mast.phaseNumber || 0;
    }
    set phaseNumber(input) {
        if (input) {
            this.mast.phaseNumber = input;
        }
        else {
            this.mast.phaseNumber = 0;
        }
    }
    async register() {
        const now = new Date().getTime();
        if (this.isNew) {
            this.mast.createdAt = now;
            this.mast.updatedAt = now;
            this.mast = await this.repositoryContainer.phaseMastRepository.addPhase(this.mast);
        }
        else {
            this.mast.updatedAt = now;
            await this.repositoryContainer.phaseMastRepository.updatePhase(this.mast);
        }
        this.isNew = false;
    }
}
exports.PhaseModel = PhaseModel;
