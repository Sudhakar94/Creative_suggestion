"use strict";
var LoginService = (function () {
    function LoginService() {
    }
    LoginService.prototype.getData = function () {
        var dad = [
            { "name": "sudhakar", "age": "25" },
            { "name": "srini", "age": "22" },
            { "name": "aaa", "age": "123" },
            { "name": "nandhini", "age": "23" },
            { "name": "mohanapriya", "age": "21" },
            { "name": "shankar", "age": "24" }
        ];
        return dad;
    };
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=app.service.js.map