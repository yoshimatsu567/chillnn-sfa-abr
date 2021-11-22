"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUsecase = void 0;
const entities_1 = require("../../entities");
const ChillnnSFAError_1 = require("../../util/modules/ChillnnSFAError");
const Comparator_1 = require("../../util/modules/Comparator");
class UserUsecase {
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
        this.myUserModel = null;
    }
    async fetchMyUserModel() {
        if (this.myUserModel) {
            return this.myUserModel;
        }
        const me = await this.repositoryContainer.userMastRepository.fetchMyUserMast();
        if (!me) {
            throw new ChillnnSFAError_1.ChillnnSFAError(entities_1.ErrorCode.chillnnSFAError_404_resourceNotFound);
        }
        this.myUserModel = this.modelFactory.UserModel(me, { isNew: false });
        return this.myUserModel;
    }
    async fetchUserMastByUserID(userID) {
        const user = await this.repositoryContainer.userMastRepository.fetchUserMastByUserID(userID);
        if (!user) {
            throw new ChillnnSFAError_1.ChillnnSFAError(entities_1.ErrorCode.chillnnSFAError_404_resourceNotFound);
        }
        return this.modelFactory.UserModel(user, { isNew: false });
    }
    async deleteUser(userID) {
        return await this.repositoryContainer.userMastRepository.deleteUserMast(userID);
    }
    async fetchAllUser() {
        const users = await this.repositoryContainer.userMastRepository.fetchAllUser();
        return users.map((user) => this.modelFactory.UserModel(user, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
    }
}
exports.UserUsecase = UserUsecase;
