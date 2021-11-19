"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHASE_STATUS = exports.ErrorCode = exports.EVENT_STATUS = void 0;
var EVENT_STATUS;
(function (EVENT_STATUS) {
    EVENT_STATUS["CONTACT"] = "CONTACT";
    EVENT_STATUS["REACTION"] = "REACTION";
    EVENT_STATUS["DEAD"] = "DEAD";
})(EVENT_STATUS = exports.EVENT_STATUS || (exports.EVENT_STATUS = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["chillnnSFAError_401_notSignIn"] = "chillnnSFAError_401_notSignIn";
    ErrorCode["chillnnSFAError_404_resourceNotFound"] = "chillnnSFAError_404_resourceNotFound";
    ErrorCode["chillnnSFAError_500_systemError"] = "chillnnSFAError_500_systemError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var PHASE_STATUS;
(function (PHASE_STATUS) {
    PHASE_STATUS["TITLE"] = "TITLE";
    PHASE_STATUS["DATA"] = "DATA";
    PHASE_STATUS["DEAD"] = "DEAD";
})(PHASE_STATUS = exports.PHASE_STATUS || (exports.PHASE_STATUS = {}));
