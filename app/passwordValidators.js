"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.newMustMatch = function (group) {
        var newPass = group.controls['newPassword'].value;
        var repeatPass = group.controls['repeatPassword'].value;
        if (newPass != repeatPass) {
            return { newMustMatch: true };
        }
        return null;
    };
    return PasswordValidators;
}());
exports.PasswordValidators = PasswordValidators;
//# sourceMappingURL=passwordValidators.js.map