"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const _baseModel_1 = require("./_baseModel");
class UserModel extends _baseModel_1.BaseModel {
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
    set name(input) {
        this.mast.name = input;
    }
    get email() {
        return this.mast.email;
    }
    set email(input) {
        this.mast.email = input;
    }
    get phoneNumber() {
        return this.mast.phoneNumber || '';
    }
    set phoneNumber(input) {
        this.mast.phoneNumber = input;
    }
    get jobTitleName() {
        return this.mast.jobTitleName || '';
    }
    set jobTitleName(input) {
        this.mast.jobTitleName = input;
    }
    get userStatus() {
        return this.mast.userStatus || '';
    }
    set userStatus(input) {
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
            }
            else {
                this.mast.updatedAt = now;
                await this.repositoryContainer.userMastRepository.updateUserMast(this.mast);
            }
            this.isNew = false;
        }
    }
}
exports.UserModel = UserModel;
