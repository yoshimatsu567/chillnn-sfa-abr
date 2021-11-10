"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUseCase = void 0;
const eventModel_1 = require("../../entities/models/modules/eventModel");
const Comparator_1 = require("../../util/modules/Comparator");
// 必要なのか検討段階
class EventUseCase {
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
    }
    async fetchAllEvent() {
        const events = this.repositoryContainer.eventMastRepository.fetchAllEvent();
        return (await events).map((event) => this.modelFactory.EventModel(event, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
    }
    createNewEvent() {
        return this.modelFactory.EventModel(eventModel_1.EventModel.getEventBlanc(), { isNew: true });
    }
}
exports.EventUseCase = EventUseCase;
