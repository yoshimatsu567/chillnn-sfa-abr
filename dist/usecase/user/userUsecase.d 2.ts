import { RepositoryContainer, ModelFactory, Scalars, UserMast } from '../../entities';
import { UserModel } from '../../entities/models/modules/userModel';
export declare class UserUsecase {
    private repositoryContainer;
    private modelFactory;
    private myUserModel;
    constructor(repositoryContainer: RepositoryContainer, //
    modelFactory: ModelFactory);
    fetchMyUserModel(): Promise<UserModel>;
    fetchUserMastByUserID(userID: Scalars['ID']): Promise<UserModel>;
    deleteUser(userID: string): Promise<UserMast>;
    fetchAllUser(): Promise<UserModel[]>;
}
