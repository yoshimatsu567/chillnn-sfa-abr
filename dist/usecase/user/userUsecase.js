"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUsecase = void 0;
const entities_1 = require("../../entities");
const ChillnnSFAError_1 = require("../../util/modules/ChillnnSFAError");
const Comparator_1 = require("../../util/modules/Comparator");
class UserUsecase {
    repositoryContainer;
    modelFactory;
    myUserModel = null;
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
    }
    async fetchMyUserModel() {
        if (this.myUserModel) {
            return this.myUserModel;
        }
        const me = await this.repositoryContainer.userMastRepository.fetchMyUserMast();
        if (!me) {
            // 存在しない場合
            throw new ChillnnSFAError_1.ChillnnSFAError(entities_1.ErrorCode.chillnnSFAError_404_resourceNotFound);
        }
        this.myUserModel = this.modelFactory.UserModel(me, { isNew: false, currentUserID: me.userID });
        return this.myUserModel;
    }
    async fetchUserModelByUserID(userID) {
        const me = await this.fetchMyUserModel();
        const user = await this.repositoryContainer.userMastRepository.fetchUserMastByUserID(userID);
        if (!user) {
            throw new ChillnnSFAError_1.ChillnnSFAError(entities_1.ErrorCode.chillnnSFAError_404_resourceNotFound);
        }
        return this.modelFactory.UserModel(user, { isNew: false, currentUserID: me.userID });
    }
    async fetchAllUser() {
        const me = await this.fetchMyUserModel();
        const users = await this.repositoryContainer.userMastRepository.fetchAllUser();
        return users.map((user) => this.modelFactory.UserModel(user, { isNew: false, currentUserID: me.userID })).sort((a, b) => (0, Comparator_1.compareNumDesc)(a.createdAt, b.createdAt));
    }
}
exports.UserUsecase = UserUsecase;
