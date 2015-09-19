define(["require", "exports", "libs/visto", "common/main"], function (require, exports, visto, common) {
    common.registerTagAliases();
    visto.initialize({
        startView: "MainView",
        supportedLanguages: ["en", "de"]
    });
});
//# sourceMappingURL=app.js.map