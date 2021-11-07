import { RepositoryContainer, ModelFactory } from '../../entities';
import { EventModel } from '../../entities/models/modules/eventModel';
import { EventMast } from '../../entities/type';
export declare class EventUseCase {
    private repositoryContainer;
    private modelFactory;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchAllEvent(): Promise<EventMast[]>;
    createNewEvent(): EventModel;
}
