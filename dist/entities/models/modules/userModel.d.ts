import { UserMast } from '../../type';
import { BaseModel } from './_baseModel';
export declare class UserModel extends BaseModel<UserMast> {
    get userID(): string;
    get createdAt(): number;
    get updatedAt(): number;
    get name(): string;
    set name(input: string);
    get email(): string;
    set email(input: string);
    get phoneNumber(): string;
    set phoneNumber(input: string);
    get jobTitleName(): string;
    set jobTitleName(input: string);
    get userStatus(): string;
    set userStatus(input: string);
    get deletedAt(): number;
    set deletedAt(input: number);
    get isRegisterable(): boolean;
    register(): Promise<void>;
}
