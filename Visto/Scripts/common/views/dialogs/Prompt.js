var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "libs/visto"], function (require, exports, visto) {
    var Prompt = (function (_super) {
        __extends(Prompt, _super);
        function Prompt() {
            _super.apply(this, arguments);
            this.language = visto.language;
        }
        Prompt.prototype.onLoaded = function () {
            var _this = this;
            this.getElement("#input").keypress(function (e) {
                if (e.which === 13) {
                    _this.dialog.dialog("close");
                    _this.parameters.setValue("completed", _this.viewModel.output());
                }
            });
        };
        return Prompt;
    })(visto.VistoDialog);
    exports.Prompt = Prompt;
});
//# sourceMappingURL=Prompt.js.map