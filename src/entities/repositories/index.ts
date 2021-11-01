import { IClientMastRepository } from './modules/clientMastRepository';
import { IEventMastRepository } from './modules/eventMastRepository';
import { IPhaseMastRepository } from './modules/phaseMastRepository';
import { IUserMastRepository } from './modules/userMastRepository';

export * from './modules/userMastRepository';

export class RepositoryContainer {
    constructor(
        // entity
        public userMastRepository: IUserMastRepository,
        public clientMastRepository: IClientMastRepository,
        public eventMastRepository: IEventMastRepository,
        public phaseMastRepository: IPhaseMastRepository,
    ) {}
}
