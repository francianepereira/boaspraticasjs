var viewModelContato = function () {
    var self = this;
    self.intl = ko.observableArray([]);

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentContato")) {
            $("#content").load("_js/view/contato.html", function () {
                var contentContato = document.getElementById("contentContato");
                app.initialize.viewModel(self, contentContato);                
            });
        }
    };
};


