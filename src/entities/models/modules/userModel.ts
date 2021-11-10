import { Scalars } from '../..';
import { UserMast } from '../../type';
import { PhaseModel } from './phaseModel';
import { BaseModel } from './_baseModel';

export class UserModel extends BaseModel<UserMast> {
    // ============================================
    // getters
    // ============================================
    get userID() {
        return this.mast.userID;
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
    get name() {
        return this.mast.name;
    }
    set name(input: string) {
        this.mast.name = input;
    }
    get email() {
        return this.mast.email;
    }
    set email(input: string) {
        this.mast.email = input;
    }
    get phoneNumber() {
        return this.mast.phoneNumber || '';
    }
    set phoneNumber(input: string) {
        this.mast.phoneNumber = input;
    }
    get jobTitleName() {
        return this.mast.jobTitleName || '';
    }
    set jobTitleName(input: string) {
        this.mast.jobTitleName = input;
    }
    get userStatus() {
        return this.mast.userStatus || '';
    }
    set userStatus(input: string) {
        this.mast.userStatus = input;
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
                await this.repositoryContainer.userMastRepository.addUserMast(this.mast);
            } else {
                this.mast.updatedAt = now;
                await this.repositoryContainer.userMastRepository.updateUserMast(this.mast);
            }
            this.isNew = false;
        }
    }
}
