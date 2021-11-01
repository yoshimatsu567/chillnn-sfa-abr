import { PhaseMast } from '..';
import { RepositoryContainer } from '../repositories';
import { ClientMast, EventMast, UserMast } from '../type';
import { ClientModel } from './modules/clientModel';
import { EventModel } from './modules/eventModel';
import { PhaseModel } from './modules/phaseModel';
import { UserModel } from './modules/userModel';
import { BaseModel, ModelOption } from './modules/_baseModel';

export class ModelFactory {
    constructor(private repositoryContainer: RepositoryContainer) {}

    public UserModel(mast: UserMast, option: ModelOption) {
        return new UserModel(
            mast, //
            this.repositoryContainer,
            this,
            option || BaseModel.baseModelOption(),
        );
    }

    public ClientModel(mast: ClientMast, option: ModelOption) {
        return new ClientModel(
            mast, //
            this.repositoryContainer,
            this,
            option || BaseModel.baseModelOption(),
        );
    }

    public EventModel(mast: EventMast, option: ModelOption) {
        return new EventModel(
            mast, //
            this.repositoryContainer,
            this,
            option || BaseModel.baseModelOption(),
        );
    }

    public PhaseModel(mast: PhaseMast, option: ModelOption) {
        return new PhaseModel(
            mast, //
            this.repositoryContainer,
            this,
            option || BaseModel.baseModelOption(),
        );
    }
}
