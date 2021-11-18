"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventUsecase = void 0;
const eventModel_1 = require("../../entities/models/modules/eventModel");
const Comparator_1 = require("../../util/modules/Comparator");
class EventUsecase {
    constructor(repositoryContainer, //
    modelFactory) {
        this.repositoryContainer = repositoryContainer;
        this.modelFactory = modelFactory;
    }
    async fetchAllEvent() {
        const events = this.repositoryContainer.eventMastRepository.fetchAllEvent();
        return (await events).map((event) => this.modelFactory.EventModel(event, { isNew: false })).sort((a, b) => Comparator_1.compareNumDesc(a.createdAt, b.createdAt));
    }
    async fetchEventByEventID(eventID) {
        const event = await this.repositoryContainer.eventMastRepository.fetchEventByEventID(eventID);
        if (typeof event !== null && event) {
            return this.modelFactory.EventModel(event, { isNew: false });
        }
        else {
            return null;
        }
    }
    createNewEvent() {
        return this.modelFactory.EventModel(eventModel_1.EventModel.getEventBlanc(), { isNew: true });
    }
    async deleteEvent(eventID) {
        return await this.repositoryContainer.eventMastRepository.deleteEvent(eventID);
    }
}
exports.EventUsecase = EventUsecase;
