"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
const IDGenerator_1 = require("../../../util/modules/IDGenerator");
const eventModel_1 = require("./eventModel");
const phaseModel_1 = require("./phaseModel");
const _baseModel_1 = require("./_baseModel");
class ClientModel extends _baseModel_1.BaseModel {
    static getBlanc() {
        return {
            clientID: IDGenerator_1.generateUUID(),
            accommodationName: '',
            clientEmail: '',
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        };
    }
    // ============================================
    // getters
    // ============================================
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
    get chargeUserID() {
        return this.mast.chargeUserID || '';
    }
    set chargeUserID(input) {
        if (input) {
            this.mast.chargeUserID = input;
        }
        else {
            this.mast.chargeUserID = null;
        }
    }
    get prefecture() {
        return this.mast.prefecture || '';
    }
    set prefecture(input) {
        if (input) {
            this.mast.prefecture = input;
        }
        else {
            this.mast.prefecture = null;
        }
    }
    get homePagePotential() {
        return this.mast.homePagePotential || '';
    }
    set homePagePotential(input) {
        if (input) {
            this.mast.homePagePotential = input;
        }
        else {
            this.mast.homePagePotential = null;
        }
    }
    get clientEmail() {
        return this.mast.clientEmail;
    }
    set clientEmail(input) {
        this.mast.clientEmail = input;
    }
    get clientPhoneNumber() {
        return this.mast.clientPhoneNumber || '';
    }
    set clientPhoneNumber(input) {
        if (input) {
            this.mast.clientPhoneNumber = input;
        }
        else {
            this.mast.clientPhoneNumber = null;
        }
    }
    get phaseNumberStatus() {
        return this.mast.phaseNumberStatus || 0;
    }
    set phaseNumberStatus(input) {
        if (input) {
            this.mast.phaseNumberStatus = input;
        }
        else {
            this.mast.phaseNumberStatus = null;
        }
    }
    get phaseDetailStatus() {
        return this.mast.phaseDetailStatus || '';
    }
    set phaseDetailStatus(input) {
        if (input) {
            this.mast.phaseDetailStatus = input;
        }
        else {
            this.mast.phaseDetailStatus = null;
        }
    }
    get appointmentStatus() {
        return this.mast.appointmentStatus || '';
    }
    set appointmentStatus(input) {
        if (input) {
            this.mast.appointmentStatus = input;
        }
        else {
            this.mast.appointmentStatus = null;
        }
    }
    get pastStatus() {
        return this.mast.pastStatus || '';
    }
    set pastStatus(input) {
        if (input) {
            this.mast.pastStatus = input;
        }
        else {
            this.mast.pastStatus = null;
        }
    }
    get newStatus() {
        return this.mast.newStatus || '';
    }
    set newStatus(input) {
        if (input) {
            this.mast.newStatus = input;
        }
        else {
            this.mast.newStatus = null;
        }
    }
    get companyName() {
        return this.mast.companyName || '';
    }
    set companyName(input) {
        this.mast.companyName = input;
    }
    get accommodationName() {
        return this.mast.accommodationName;
    }
    set accommodationName(input) {
        this.mast.accommodationName = input;
    }
    get expectedSalesAmount() {
        return this.mast.expectedSalesAmount || '';
    }
    set expectedSalesAmount(input) {
        if (input) {
            this.mast.expectedSalesAmount = input;
        }
        else {
            this.mast.expectedSalesAmount = null;
        }
    }
    get clientUserName() {
        return this.mast.clientUserName || '';
    }
    set clientUserName(input) {
        if (input) {
            this.mast.clientUserName = input;
        }
        else {
            this.mast.clientUserName = null;
        }
    }
    get requiredTime() {
        return this.mast.requiredTime || '';
    }
    set requiredTime(input) {
        if (input) {
            this.mast.requiredTime = input;
        }
        else {
            this.mast.requiredTime = null;
        }
    }
    get deletedAt() {
        return this.mast.deletedAt || 0;
    }
    set deletedAt(input) {
        if (input) {
            this.mast.deletedAt = input;
        }
        else {
            this.mast.deletedAt = 0;
        }
    }
    // ============================================
    // validation
    // ============================================
    get isRegisterable() {
        return true;
    }
    async register() {
        if (this.isRegisterable) {
            const now = new Date().getTime();
            if (this.isNew) {
                this.mast.createdAt = now;
                this.mast.updatedAt = now;
                await this.repositoryContainer.clientMastRepository.addClient(this.mast);
            }
            else {
                this.mast.updatedAt = now;
                await this.repositoryContainer.clientMastRepository.updateClient(this.mast);
            }
            this.isNew = false;
        }
    }
    createNewEvent() {
        return this.modelFactory.EventModel(eventModel_1.EventModel.getEventBlanc(), {
            isNew: true,
        });
    }
    async createNewPhaseData() {
        return this.modelFactory.PhaseModel(phaseModel_1.PhaseModel.getPhaseDataBlanc(this.clientID), { isNew: true });
    }
    async createNewPhaseTitle() {
        return this.modelFactory.PhaseModel(phaseModel_1.PhaseModel.getPhaseTitleBlanc(), { isNew: true });
    }
}
exports.ClientModel = ClientModel;
