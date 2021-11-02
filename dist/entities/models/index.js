"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelFactory = void 0;
const clientModel_1 = require("./modules/clientModel");
const eventModel_1 = require("./modules/eventModel");
const phaseModel_1 = require("./modules/phaseModel");
const userModel_1 = require("./modules/userModel");
const _baseModel_1 = require("./modules/_baseModel");
class ModelFactory {
    repositoryContainer;
    constructor(repositoryContainer) {
        this.repositoryContainer = repositoryContainer;
    }
    UserModel(mast, option) {
        return new userModel_1.UserModel(mast, //
        this.repositoryContainer, this, option || _baseModel_1.BaseModel.baseModelOption());
    }
    ClientModel(mast, option) {
        return new clientModel_1.ClientModel(mast, //
        this.repositoryContainer, this, option || _baseModel_1.BaseModel.baseModelOption());
    }
    EventModel(mast, option) {
        return new eventModel_1.EventModel(mast, //
        this.repositoryContainer, this, option || _baseModel_1.BaseModel.baseModelOption());
    }
    PhaseModel(mast, option) {
        return new phaseModel_1.PhaseModel(mast, //
        this.repositoryContainer, this, option || _baseModel_1.BaseModel.baseModelOption());
    }
}
exports.ModelFactory = ModelFactory;
