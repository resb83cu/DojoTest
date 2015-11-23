require([
    "dojo/dom",
    "dojo/query",
    "dojo/parser",
    "dojo/ready",
    "dojo/domReady!",
    "dijit/Menu",
    "dijit/form/ComboButton",
    "dijit/Dialog",
    "web/WorkshopRegistrationWidget"
], function (dom, query, parser, ready, Dialog) {
    function changeLanguage(e) {
        var params = window.location.search;
        if (params) {
            e.preventDefault();
            var reg = /lang=\w{2}/, newLang = this.href.split('?')[1];
            if (reg.test(params)) {
                params = params.replace(reg, newLang);
            } else {
                params = params + '&' + newLang;
            }
            window.location.href = params;
        }
    }

    query('a.change-language').on('click', changeLanguage);

    ready(function () {
        parser.parse();
    });

});