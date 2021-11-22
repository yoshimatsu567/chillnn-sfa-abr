"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
const __1 = require("../../..");
const _baseModel_1 = require("./_baseModel");
class EventModel extends _baseModel_1.BaseModel {
    static getEventBlanc() {
        return {
            eventID: __1.generateUUID(),
            clientID: '',
            eventNumberStatus: 0,
            eventDetail: '',
            eventStatus: 'CONTACT',
            eventCountNumber: 0,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        };
    }
    // ============================================
    // getters
    // ============================================
    get eventID() {
        return this.mast.eventID;
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
    get clientID() {
        return this.mast.clientID;
    }
    set clientID(input) {
        this.mast.clientID = input;
    }
    get eventDetail() {
        return this.mast.eventDetail;
    }
    set eventDetail(input) {
        this.mast.eventDetail = input;
    }
    get eventStatus() {
        return this.mast.eventStatus;
    }
    set eventStatus(input) {
        this.mast.eventStatus = input;
    }
    get eventNumberStatus() {
        return this.mast.eventNumberStatus;
    }
    set eventNumberStatus(input) {
        this.mast.eventNumberStatus = input;
    }
    get eventCountNumber() {
        return this.mast.eventCountNumber;
    }
    set eventCountNumber(input) {
        this.mast.eventCountNumber = input;
    }
    get eventMemo() {
        return this.mast.eventMemo || '';
    }
    set eventMemo(input) {
        if (input) {
            this.mast.eventMemo = input;
        }
        else {
            this.mast.eventMemo = null;
        }
    }
    get eventTerm() {
        return this.mast.eventTerm || '';
    }
    set eventTerm(input) {
        if (input) {
            this.mast.eventTerm = input;
        }
        else {
            this.mast.eventTerm = null;
        }
    }
    get eventDate() {
        return this.mast.eventDate || '';
    }
    set eventDate(input) {
        if (input) {
            this.mast.eventDate = input;
        }
        else {
            this.mast.eventDate = null;
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
    get isRegisterable() {
        return this.isNew;
    }
    async register() {
        const now = new Date().getTime();
        if (this.isRegisterable) {
            if (this.isNew) {
                this.mast.createdAt = now;
                this.mast.updatedAt = now;
                await this.repositoryContainer.eventMastRepository.addEvent(this.mast);
            }
            else {
                this.mast.updatedAt = now;
                await this.repositoryContainer.eventMastRepository.updateEvent(this.mast);
            }
        }
    }
    async fetchAllEvent() {
        const res = await this.repositoryContainer.eventMastRepository.fetchAllEvent();
        return res.map((item) => this.modelFactory.EventModel(item, { isNew: false }));
    }
}
exports.EventModel = EventModel;
