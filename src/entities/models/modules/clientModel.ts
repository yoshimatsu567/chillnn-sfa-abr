import { PHASE_STATUS } from '../..';
import { generateUUID } from '../../../util/modules/IDGenerator';
import { ClientMast } from '../../type';
import { EventModel } from './eventModel';
import { PhaseModel } from './phaseModel';
import { BaseModel } from './_baseModel';

export class ClientModel extends BaseModel<ClientMast> {
    static getBlanc(): ClientMast {
        return {
            clientID: generateUUID(),
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
    set chargeUserID(input: string) {
        if (input) {
            this.mast.chargeUserID = input;
        } else {
            this.mast.chargeUserID = null;
        }
    }
    get prefecture() {
        return this.mast.prefecture || '';
    }
    set prefecture(input: string) {
        if (input) {
            this.mast.prefecture = input;
        } else {
            this.mast.prefecture = null;
        }
    }
    get homePagePotential() {
        return this.mast.homePagePotential || '';
    }
    set homePagePotential(input: string) {
        if (input) {
            this.mast.homePagePotential = input;
        } else {
            this.mast.homePagePotential = null;
        }
    }
    get clientEmail() {
        return this.mast.clientEmail;
    }
    set clientEmail(input: string) {
        this.mast.clientEmail = input;
    }
    get clientPhoneNumber() {
        return this.mast.clientPhoneNumber || '';
    }
    set clientPhoneNumber(input: string) {
        if (input) {
            this.mast.clientPhoneNumber = input;
        } else {
            this.mast.clientPhoneNumber = null;
        }
    }
    get phaseNumberStatus() {
        return this.mast.phaseNumberStatus || 0;
    }
    set phaseNumberStatus(input: number) {
        if (input) {
            this.mast.phaseNumberStatus = input;
        } else {
            this.mast.phaseNumberStatus = null;
        }
    }
    get phaseDetailStatus() {
        return this.mast.phaseDetailStatus || '';
    }
    set phaseDetailStatus(input: string) {
        if (input) {
            this.mast.phaseDetailStatus = input;
        } else {
            this.mast.phaseDetailStatus = null;
        }
    }
    get appointmentStatus() {
        return this.mast.appointmentStatus || '';
    }
    set appointmentStatus(input: string) {
        if (input) {
            this.mast.appointmentStatus = input;
        } else {
            this.mast.appointmentStatus = null;
        }
    }
    get pastStatus() {
        return this.mast.pastStatus || '';
    }
    set pastStatus(input: string) {
        if (input) {
            this.mast.pastStatus = input;
        } else {
            this.mast.pastStatus = null;
        }
    }
    get newStatus() {
        return this.mast.newStatus || '';
    }
    set newStatus(input: string) {
        if (input) {
            this.mast.newStatus = input;
        } else {
            this.mast.newStatus = null;
        }
    }
    get companyName() {
        return this.mast.companyName || '';
    }
    set companyName(input: string) {
        this.mast.companyName = input;
    }
    get accommodationName() {
        return this.mast.accommodationName;
    }
    set accommodationName(input: string) {
        this.mast.accommodationName = input;
    }
    get expectedSalesAmount() {
        return this.mast.expectedSalesAmount || '';
    }
    set expectedSalesAmount(input: string) {
        if (input) {
            this.mast.expectedSalesAmount = input;
        } else {
            this.mast.expectedSalesAmount = null;
        }
    }
    get clientUserName() {
        return this.mast.clientUserName || '';
    }
    set clientUserName(input: string) {
        if (input) {
            this.mast.clientUserName = input;
        } else {
            this.mast.clientUserName = null;
        }
    }
    get requiredTime() {
        return this.mast.requiredTime || '';
    }
    set requiredTime(input: string) {
        if (input) {
            this.mast.requiredTime = input;
        } else {
            this.mast.requiredTime = null;
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
            } else {
                this.mast.updatedAt = now;
                await this.repositoryContainer.clientMastRepository.updateClient(this.mast);
            }
            this.isNew = false;
        }
    }

    createNewEvent(): EventModel {
        return this.modelFactory.EventModel(EventModel.getEventBlanc(), {
            isNew: true,
        });
    }

    async createNewPhaseData() {
        return this.modelFactory.PhaseModel(PhaseModel.getPhaseDataBlanc(this.clientID), { isNew: true });
    }

    async createNewPhaseTitle() {
        return this.modelFactory.PhaseModel(PhaseModel.getPhaseTitleBlanc(), { isNew: true });
    }
}
