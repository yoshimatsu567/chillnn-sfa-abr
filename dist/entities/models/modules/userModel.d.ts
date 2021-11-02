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
    get isRegisterable(): boolean;
    register(): Promise<void>;
}
