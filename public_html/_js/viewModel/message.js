var viewModelMessage = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.language = ko.observable('');
    self.title = ko.observable('');
    self.describe = ko.observable('');
    self.buttons = ko.observableArray([]);

    self.initialize = function () {
        if($("#message")[0]!=undefined) {
            ko.cleanNode($("#message")[0]);
            self.loadPage();
        }
    };

    self.loadPage = function () {}
};

