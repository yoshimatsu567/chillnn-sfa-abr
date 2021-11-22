import { ErrorCode } from '../../entities/type';
export declare class ChillnnSFAError extends Error {
    chillnnErrorCode: ErrorCode;
    err?: Error;
    constructor(errCode: ErrorCode, err?: Error);
    getMessage(): string;
}
