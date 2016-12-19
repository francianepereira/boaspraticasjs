var viewModelInteresse = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.interesses = ko.observableArray([]);

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentInteresse")) {
            $("#content").load("_js/view/interesse.html", function () {
                var contentInteresse = document.getElementById("contentInteresse");
                app.initialize.viewModel(self, contentInteresse);                
                self.interesses(["Front-end", "Desenvolvimento Android", "Analise de sistema", "Mobile", "IOS", "Databases", ".NET", "Sql Server", "Frameworks JS", "Testes Unitarios", "GitHub", "Java", "Jenkins", "GitHub", "Python", "Mobile", "MVC", "PHP"]);
            });
        }
    };
};


