import { PhaseMast } from '..';
import { RepositoryContainer } from '../repositories';
import { ClientMast, EventMast, UserMast } from '../type';
import { ClientModel } from './modules/clientModel';
import { EventModel } from './modules/eventModel';
import { PhaseModel } from './modules/phaseModel';
import { UserModel } from './modules/userModel';
import { ModelOption } from './modules/_baseModel';
export declare class ModelFactory {
    private repositoryContainer;
    constructor(repositoryContainer: RepositoryContainer);
    UserModel(mast: UserMast, option: ModelOption): UserModel;
    ClientModel(mast: ClientMast, option: ModelOption): ClientModel;
    EventModel(mast: EventMast, option: ModelOption): EventModel;
    PhaseModel(mast: PhaseMast, option: ModelOption): PhaseModel;
}
