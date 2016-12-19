var viewModelResumo = function () {
    var self = this;
    self.intl = ko.observableArray([]);

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentResumo")) {
            $("#content").load("_js/view/resumo.html", function () {
                var contentResumo = document.getElementById("contentResumo");
                app.initialize.viewModel(self, contentResumo);

            });
        }        
    };
};


