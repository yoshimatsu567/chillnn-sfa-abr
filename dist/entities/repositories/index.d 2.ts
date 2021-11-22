import { IClientMastRepository } from './modules/clientMastRepository';
import { IEventMastRepository } from './modules/eventMastRepository';
import { IPhaseMastRepository } from './modules/phaseMastRepository';
import { IUserMastRepository } from './modules/userMastRepository';
export * from './modules/userMastRepository';
export declare class RepositoryContainer {
    userMastRepository: IUserMastRepository;
    clientMastRepository: IClientMastRepository;
    eventMastRepository: IEventMastRepository;
    phaseMastRepository: IPhaseMastRepository;
    constructor(userMastRepository: IUserMastRepository, clientMastRepository: IClientMastRepository, eventMastRepository: IEventMastRepository, phaseMastRepository: IPhaseMastRepository);
}
