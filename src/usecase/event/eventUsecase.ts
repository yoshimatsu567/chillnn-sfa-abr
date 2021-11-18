import { RepositoryContainer, ModelFactory } from '../../entities';
import { EventModel } from '../../entities/models/modules/eventModel';
import { EventMast } from '../../entities/type';
import { compareNumDesc } from '../../util/modules/Comparator';

export class EventUsecase {
        constructor(
                private repositoryContainer: RepositoryContainer, //
                private modelFactory: ModelFactory,
        ) {}

        async fetchAllEvent(): Promise<EventModel[]> {
                const events = this.repositoryContainer.eventMastRepository.fetchAllEvent();
                return (await events).map((event) => this.modelFactory.EventModel(event, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
        }

        async fetchEventByEventID(eventID: string): Promise<EventModel | null> {
                const event = await this.repositoryContainer.eventMastRepository.fetchEventByEventID(eventID);
                if (typeof event !== null && event) {
                        return this.modelFactory.EventModel(event, { isNew: false });
                } else {
                        return null;
                }
        }

        createNewEvent(): EventModel {
                return this.modelFactory.EventModel(EventModel.getEventBlanc(), { isNew: true });
        }

        async deleteEvent(eventID: string) {
                return await this.repositoryContainer.eventMastRepository.deleteEvent(eventID);
        }
}
