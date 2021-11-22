"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChillnnSFAError = void 0;
const type_1 = require("../../entities/type");
class ChillnnSFAError extends Error {
    constructor(errCode, err) {
        super(errCode);
        this.chillnnErrorCode = errCode;
        this.err = err;
    }
    getMessage() {
        return errorMessages[this.chillnnErrorCode] || errorMessages[type_1.ErrorCode.chillnnSFAError_500_systemError];
    }
}
exports.ChillnnSFAError = ChillnnSFAError;
const errorMessages = {
    chillnnSFAError_401_notSignIn: 'サインインしていません',
    chillnnSFAError_404_resourceNotFound: 'リソースが見つかりません',
    chillnnSFAError_500_systemError: 'システムエラーです',
};
