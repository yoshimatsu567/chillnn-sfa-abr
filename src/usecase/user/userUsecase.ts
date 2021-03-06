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
                        throw new ChillnnSFAError(ErrorCode.chillnnSFAError_404_resourceNotFound);
                }
                this.myUserModel = this.modelFactory.UserModel(me, { isNew: false });
                return this.myUserModel;
        }

        async fetchUserMastByUserID(userID: Scalars['ID']): Promise<UserModel> {
                const user = await this.repositoryContainer.userMastRepository.fetchUserMastByUserID(userID);
                if (!user) {
                        throw new ChillnnSFAError(ErrorCode.chillnnSFAError_404_resourceNotFound);
                }
                return this.modelFactory.UserModel(user, { isNew: false });
        }

        async deleteUser(userID: string) {
                return await this.repositoryContainer.userMastRepository.deleteUserMast(userID);
        }

        async fetchAllUser(): Promise<UserModel[]> {
                const users = await this.repositoryContainer.userMastRepository.fetchAllUser();
                return users.map((user) => this.modelFactory.UserModel(user, { isNew: false })).sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
        }
}
