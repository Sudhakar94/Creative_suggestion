"use strict";
var SecondService = (function () {
    function SecondService() {
        this.glocalDatavar = "";
    }
    SecondService.prototype.setTextData = function (cool) {
        this.glocalDatavar = cool;
    };
    SecondService.prototype.getTextData = function () {
        return this.glocalDatavar;
    };
    return SecondService;
}());
exports.SecondService = SecondService;
//# sourceMappingURL=app.secondService.js.map