import { ErrorCode } from '../../entities/type';

export class ChillnnSFAError extends Error {
    public chillnnErrorCode: ErrorCode;
    public err?: Error;
    constructor(errCode: ErrorCode, err?: Error) {
        super(errCode);
        this.chillnnErrorCode = errCode;
        this.err = err;
    }

    public getMessage(): string {
        return errorMessages[this.chillnnErrorCode] || errorMessages[ErrorCode.chillnnSFAError_500_systemError];
    }
}

const errorMessages: { [T in keyof typeof ErrorCode]: string } = {
    chillnnSFAError_401_notSignIn: 'サインインしていません',
    chillnnSFAError_404_resourceNotFound: 'リソースが見つかりません',
    chillnnSFAError_500_systemError: 'システムエラーです',
};
