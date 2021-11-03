"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseModel = void 0;
const __1 = require("../../..");
const _baseModel_1 = require("./_baseModel");
class PhaseModel extends _baseModel_1.BaseModel {
    static getPhaseBlanc(clientID, editedUserID) {
        return {
            phaseID: __1.generateUUID(),
            clientID,
            editedUserID,
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
    set editedUserID(input) {
        this.mast.editedUserID = input;
    }
    get phaseDetail() {
        return this.mast.phaseDetail;
    }
    set phaseDetail(input) {
        this.mast.phaseDetail = input;
    }
    get phaseStatus() {
        return this.mast.phaseStatus || '';
    }
    set phaseStatus(input) {
        if (input) {
            this.mast.phaseStatus = input;
        }
        else {
            this.mast.phaseStatus = null;
        }
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
