import { RepositoryContainer, ModelFactory } from '../../entities';
import { EventModel } from '../../entities/models/modules/eventModel';
import { EventMast } from '../../entities/type';
import { compareNumDesc } from '../../util/modules/Comparator';

// 必要なのか検討段階
export class EventUsecase {
    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    async fetchAllEvent(): Promise<EventModel[]> {
        const events = this.repositoryContainer.eventMastRepository.fetchAllEvent();
        return (await events).map((event) => this.modelFactory.EventModel(event, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }

    createNewEvent(): EventModel {
        return this.modelFactory.EventModel(EventModel.getEventBlanc(), { isNew: true });
    }
}
