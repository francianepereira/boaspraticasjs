var viewModelCompetencia = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.competencias = ko.observableArray([]);

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentCompetencia")) {
            $("#content").load("_js/view/competencia.html", function () {
                var contentCompetencia = document.getElementById("contentCompetencia");
                app.initialize.viewModel(self, contentCompetencia);                
                self.competencias(["Front-end", "HTML5", "MySQL", ".NET", "SQL Server", "CSS3", "Knockout", "AngularJs", "Frameworks JS", "Jasmine", "Jenkins", "Testes Unitarios", "C#", "Phonegap",".Net", "Java", "Jenkins", "GitHub", "Python", "Mobile", "MVC", "PHP", "Karma", "Wordpress","Java Swing", "Cordova"]);
            });
        }
    };
};

