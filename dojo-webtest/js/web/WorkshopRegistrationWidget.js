define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/i18n!web/nls/WorkshopRegistrationWidget",
    "dojo/text!web/templates/WorkshopRegistrationWidget.html",
    "dojo/store/Memory",
    "dojo/on",
    "dojo/query",
    "dijit/registry",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/ComboButton",
    "dijit/form/TextBox",
    'dijit/form/CheckBox',
    'dijit/form/Select',
    'dijit/form/ValidationTextBox',
    "web/form/ValidationTextArea",
    "dojox/validate/web",
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, i18n, template, MemoryStore, on, query, registry) {

    return declare("web/WorkshopRegistrationWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        i18n: i18n,
        templateString: template,

        _confirm: function () {
            var isValid = this.validate();
            if (isValid) {
                var values = this.get('value');
                query('#fnamePreview')[0].innerHTML = values.fname;
                query('#lnamePreview')[0].innerHTML = values.lname;
                query('#mealPreview')[0].innerHTML = values.meal == "" ? "" : query('#meal')[0].textContent;
                query('#companyPreview')[0].innerHTML = values.company;
                query('#addressPreview')[0].innerHTML = values.address;
                query('#cityPreview')[0].innerHTML = values.city;
                query('#cheque_noPreview')[0].innerHTML = values.cheque_no;
                query('#statePreview')[0].innerHTML = values.state == "" ? "" : query('#state')[0].textContent;
                query('#bankPreview')[0].innerHTML = values.bank;
                query('#countryPreview')[0].innerHTML = values.country == "" ? "" : query('#country')[0].textContent;
                query('#payablePreview')[0].innerHTML = values.payable;
                query('#emailPreview')[0].innerHTML = values.email;
                query('#phonePreview')[0].innerHTML = values.phone;
                query('.insertView').addClass('dijitHidden');
                query('.preview').removeClass('dijitHidden');
                return false;
            }
            return isValid;
        },
        _clear: function () {
            query('.insertView').removeClass('dijitHidden');
            query('.preview').addClass('dijitHidden');
        },
        postCreate: function () {
            var workshopRegistrationForm = registry.byId('workshopRegistrationForm');
            on(workshopRegistrationForm, 'submit', this._confirm);
            on(workshopRegistrationForm, 'reset', this._clear);
            on(registry.byId('returnButton'), 'click', this._clear);
            this.inherited(arguments);
        }
    });
});