import { ChillnnSFAError, compareNumDesc, IUserMastRepository } from '../..';
import { ErrorCode, Scalars, UserMast } from '../../entities';
import { PhaseModel } from '../../entities/models/modules/phaseModel';

type UserCache = {
    [userID: string]: UserMast | 'blanc' | undefined;
};

// type PhaseNumberCache = {
//     [phaseNumber: number]:
//         | {
//               [userID: string]: UserMast;
//           }
//         | undefined;
// };

// type PhaseDetailCache = {
//     [phaseDetail: string]:
//         | {
//               [userID: string]: UserMast;
//           }
//         | undefined;
// };

// よくわかってない、Mapped Types？
type PhaseCache = {
    [phaseProps in string | number]:
        | {
              [userID: string]: UserMast;
          }
        | undefined;
};

export class UserMastRepositoryCacheAdaptor implements IUserMastRepository {
    private userCache: UserCache = {};
    private userEachCache: UserCache = {};
    private userAllCache: UserCache | null = null;
    private phaseCache: PhaseCache = {};
    // private phaseNumberCache: PhaseNumberCache = {};
    // private phaseDetailCache: PhaseDetailCache = {};
    constructor(private repository: IUserMastRepository) {}

    async addUserMast(input: UserMast): Promise<UserMast> {
        const res = await this.repository.addUserMast(input);
        this.updateCacheEach(res.userID, res);
        this.myUserID = res.userID;
        return res;
    }

    async updateUserMast(input: UserMast): Promise<UserMast> {
        const res = await this.repository.updateUserMast(input);
        this.updateCacheEach(res.userID, res);
        this.myUserID = res.userID;
        return res;
    }

    async fetchMyUserMast(): Promise<UserMast | null> {
        if (this.myUserID) return this.fetchCacheUserMast(this.myUserID) as UserMast;
        const res = await this.repository.fetchMyUserMast();
        if (!res) {
            throw new ChillnnSFAError(ErrorCode.chillnnSFAError_401_notSignIn);
        } else {
            this.myUserID = res.userID;
            this.updateCacheEach(res.userID, res);
        }
        return res;
    }

    async fetchUserMastByUserID(userID: string): Promise<UserMast | null> {
        const cache = this.fetchCacheUserMast(userID);
        if (cache && cache === 'blanc') {
            return null;
        } else if (cache) {
            return cache;
        }
        const res = await this.repository.fetchUserMastByUserID(userID);
        this.updateCacheEach(userID, res);
        return res;
    }

    async fetchAllUser(): Promise<UserMast[]> {
        const cache = this.fetchCacheUserAll();
        if (cache) return cache;
        const res = await this.repository.fetchAllUser();
        this.updateCacheBulk(res);
        return res;
    }

    async fetchUsersMastByPhaseNumber(phaseNumber: number): Promise<UserMast[]> {
        const cache = this.fetchCacheUserAll();
        if (cache) return cache;
        const res = await this.repository.fetchUsersMastByPhaseNumber(phaseNumber);
        this.addCachePhaseBulk(phaseNumber, res);
        return res.sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }

    async fetchUsersMastByPhaseDetail(phaseDetail: string): Promise<UserMast[]> {
        const cache = this.fetchCacheUserAll();
        if (cache) return cache;
        const res = await this.repository.fetchUsersMastByPhaseDetail(phaseDetail);
        this.addCachePhaseBulk(phaseDetail, res);
        return res.sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }
    // ===============================================================
    //
    // private
    //
    // ===============================================================
    private myUserID: string | null = null;
    private addCacheEach(phaseData: number | string, user: UserMast | null) {
        this.userCache[phaseData] = user || 'blanc';
        if (!user) return;
        if (user.userID) {
            const phaseCache = this.phaseCache[user.userID];
            if (phaseCache) {
                phaseCache[phaseData] = user;
            }
        }
    }
    private addCachePhaseBulk(phaseProps: string | number, users: UserMast[]) {
        this.phaseCache[phaseProps] = {};
        for (const user of users) {
            this.addCacheEach(user.userID, user);
        }
    }
    private updateCacheEach(userID: Scalars['ID'], user: UserMast | null) {
        this.userEachCache[userID] = user || 'blanc';
        if (this.userAllCache && user) {
            this.userAllCache[userID] = user;
        }
    }
    private updateCacheBulk(users: UserMast[]) {
        this.userAllCache = {};
        for (const user of users) {
            this.updateCacheEach(user.userID, user);
        }
    }

    private fetchCacheUserMast(userID: Scalars['ID']) {
        return this.userEachCache[userID];
    }

    private fetchCacheUserAll() {
        if (!this.userAllCache) return null;
        return Object.keys(this.userAllCache)
            .map((key) => {
                return this.userAllCache![key]! as UserMast;
            })
            .sort((a, b) => compareNumDesc(a.createdAt, b.createdAt));
    }
}
