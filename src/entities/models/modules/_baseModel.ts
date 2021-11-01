import { ModelFactory } from '..';
import { RepositoryContainer } from '../../repositories';

export type ModelOption = {
    isNew: boolean;
    currentUserID: string;
};

export abstract class BaseModel<ResourceMast> {
    public static baseModelOption(): ModelOption {
        return {
            isNew: false,
            currentUserID: '',
        };
    }

    constructor(
        protected mast: ResourceMast,
        protected repositoryContainer: RepositoryContainer, //
        protected modelFactory: ModelFactory,
        private option: ModelOption,
    ) {}

    public get isNew() {
        return this.option.isNew;
    }
    public set isNew(input: boolean) {
        this.option.isNew = input;
    }

    public get currentUserID() {
        return this.option.currentUserID;
    }

    public set currentUserID(input: string) {
        this.option.currentUserID = input;
    }
}
