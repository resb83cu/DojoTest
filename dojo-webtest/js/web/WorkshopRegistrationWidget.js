define([
    "dojo/dom",
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
    'dijit/form/FilteringSelect',
    'dijit/form/ValidationTextBox',
    "web/form/ValidationTextArea",
    "dojox/validate/web",
], function (dom, declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, i18n, template, MemoryStore, on, query, registry) {

    return declare("web/WorkshopRegistrationWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        i18n: i18n,
        templateString: template,

        _confirm: function () {
            var isValid = this.validate();
            if (isValid) {
                var values = this.get('value');
                dom.byId('fnamePreview').innerHTML = values.fname;
                dom.byId('lnamePreview').innerHTML = values.lname;
                dom.byId('mealPreview').innerHTML = values.meal == "" ? "" : dom.byId('meal').value;
                dom.byId('companyPreview').innerHTML = values.company;
                dom.byId('addressPreview').innerHTML = values.address;
                dom.byId('cityPreview').innerHTML = values.city;
                dom.byId('cheque_noPreview').innerHTML = values.cheque_no;
                dom.byId('statePreview').innerHTML = values.state == "" ? "" : dom.byId('state').value;
                dom.byId('bankPreview').innerHTML = values.bank;
                dom.byId('countryPreview').innerHTML = values.country == "" ? "" : dom.byId('country').value;
                dom.byId('payablePreview').innerHTML = values.payable;
                dom.byId('emailPreview').innerHTML = values.email;
                dom.byId('phonePreview').innerHTML = values.phone;
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
            on(dom.byId('returnButton'), 'click', this._clear);
            this.inherited(arguments);
        }
    });
});