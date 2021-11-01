import { EventMast, Scalars } from '../..';
import { generateUUID } from '../../..';
import { BaseModel } from './_baseModel';

export class EventModel extends BaseModel<EventMast> {
    static getEventBlanc(clientID: Scalars['ID'], editedUserID: Scalars['ID']) {
        return {
            eventID: generateUUID(),
            clientID,
            editedUserID,
            eventDetail: '',
            eventStatus: '',
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
        return this.mast.editedUserID;
    }
    set editedUserID(input: string) {
        this.mast.editedUserID = input;
    }
    get eventDetail() {
        return this.mast.eventDetail;
    }
    set eventDetail(input: string) {
        this.mast.eventDetail = input;
    }
    get eventStatus() {
        return this.mast.eventStatus || '';
    }
    set phaseStatus(input: string) {
        this.mast.eventStatus = input;
    }
    get eventMemo() {
        return this.mast.eventMemo || '';
    }
    set eventMemo(input: string) {
        if (input) {
            this.mast.eventMemo = input;
        } else {
            this.mast.eventMemo = null;
        }
    }
    get eventTerm() {
        return this.mast.eventTerm || '';
    }
    set eventTerm(input: string) {
        if (input) {
            this.mast.eventTerm = input;
        } else {
            this.mast.eventTerm = null;
        }
    }
    get eventDate() {
        return this.mast.eventDate || '';
    }
    set eventDate(input: string) {
        if (input) {
            this.mast.eventDate = input;
        } else {
            this.mast.eventDate = null;
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
            } else {
                this.mast.updatedAt = now;
                await this.repositoryContainer.eventMastRepository.updateEvent(this.mast);
            }
        }
    }
    async fetchAllEvent(): Promise<EventModel[]> {
        const res = await this.repositoryContainer.eventMastRepository.fetchAllEvent();
        return res.map((item) => this.modelFactory.EventModel(item, { isNew: false, currentUserID: this.currentUserID }));
    }
}
