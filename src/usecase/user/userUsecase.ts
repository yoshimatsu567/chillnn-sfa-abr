import { RepositoryContainer, ModelFactory, ErrorCode, Scalars, UserMast } from '../../entities';
import { UserModel } from '../../entities/models/modules/userModel';
import { ChillnnSFAError } from '../../util/modules/ChillnnSFAError';
import { compareNumDesc } from '../../util/modules/Comparator';

export class UserUsecase {
    private myUserModel: UserModel | null = null;

    constructor(
        private repositoryContainer: RepositoryContainer, //
        private modelFactory: ModelFactory,
    ) {}

    async fetchMyUserModel(): Promise<UserModel> {
        if (this.myUserModel) {
            return this.myUserModel;
        }
        const me = await this.repositoryContainer.userMastRepository.fetchMyUserMast();
        if (!me) {
            // 存在しない場合
            throw new ChillnnSFAError(ErrorCode.chillnnSFAError_404_resourceNotFound);
        }
        this.myUserModel = this.modelFactory.UserModel(me, { isNew: false, currentUserID: me.userID });
        return this.myUserModel;
    }

    async fetchUserModelByUserID(userID: Scalars['ID']): Promise<UserModel> {
        const me = await this.fetchMyUserModel();
        const user = await this.repositoryContainer.userMastRepository.fetchUserMastByUserID(userID);
        if (!user) {
            throw new ChillnnSFAError(ErrorCode.chillnnSFAError_404_resourceNotFound);
        }
        return this.modelFactory.UserModel(user, { isNew: false, currentUserID: me.userID });
    }

    async fetchAllUser(): Promise<UserModel[]> {
        const me = await this.fetchMyUserModel();
        const users = await this.repositoryContainer.userMastRepository.fetchAllUser();
        return users.map((user) => this.modelFactory.UserModel(user, { isNew: false, currentUserID: me.userID })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }
}
