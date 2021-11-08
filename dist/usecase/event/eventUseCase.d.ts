import { RepositoryContainer, ModelFactory } from '../../entities';
import { EventModel } from '../../entities/models/modules/eventModel';
export declare class EventUseCase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllEvent(): Promise<EventModel[]>;
    createNewEvent(): EventModel;
}
