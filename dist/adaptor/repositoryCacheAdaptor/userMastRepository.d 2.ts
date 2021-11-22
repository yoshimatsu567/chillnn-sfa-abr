import { IUserMastRepository } from '../..';
import { UserMast } from '../../entities';
export declare class UserMastRepositoryCacheAdaptor implements IUserMastRepository {
    private repository;
    private userCache;
    private userEachCache;
    private userAllCache;
    private phaseCache;
    constructor(repository: IUserMastRepository);
    addUserMast(input: UserMast): Promise<UserMast>;
    updateUserMast(input: UserMast): Promise<UserMast>;
    deleteUserMast(userID: string): Promise<UserMast>;
    fetchMyUserMast(): Promise<UserMast | null>;
    fetchUserMastByUserID(userID: string): Promise<UserMast | null>;
    fetchAllUser(): Promise<UserMast[]>;
    private myUserID;
    private addCacheEach;
    private addCachePhaseBulk;
    private updateCacheEach;
    private updateCacheBulk;
    private fetchCacheUserMast;
    private fetchCacheUserAll;
}
