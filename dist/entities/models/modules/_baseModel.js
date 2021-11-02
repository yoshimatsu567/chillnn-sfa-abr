"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
class BaseModel {
    mast;
    repositoryContainer;
    modelFactory;
    option;
    static baseModelOption() {
        return {
            isNew: false,
            currentUserID: '',
        };
    }
    constructor(mast, repositoryContainer, //
    modelFactory, option) {
        this.mast = mast;
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
        this.option = option;
    }
    get isNew() {
        return this.option.isNew;
    }
    set isNew(input) {
        this.option.isNew = input;
    }
    get currentUserID() {
        return this.option.currentUserID;
    }
    set currentUserID(input) {
        this.option.currentUserID = input;
    }
}
exports.BaseModel = BaseModel;
