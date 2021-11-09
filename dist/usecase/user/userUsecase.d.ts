import { RepositoryContainer, ModelFactory, Scalars } from '../../entities';
import { UserModel } from '../../entities/models/modules/userModel';
export declare class UserUseCase {
    private repositoryContainer;
    private modelFactory;
    private myUserModel;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchMyUserModel(): Promise<UserModel>;
    fetchUserModelByUserID(userID: Scalars['ID']): Promise<UserModel>;
    fetchAllUser(): Promise<UserModel[]>;
}
