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
                self.competencias(["Front-end", "HTML5", "MySQL", ".NET", "SQL Server", "CSS3","Git", "SVN", "Knockout", "AngularJs", "Frameworks JS", "Jasmine", "Jenkins", "Testes Unitarios", "C#", "Phonegap",".Net", "Java", "Jenkins", "GitHub", "Python", "Mobile", "MVC", "PHP", "Karma", "Wordpress","Java Swing", "Cordova"]);
                var objectCompetencias = [];
                var className = ["item-background-orange","item-background-violet","item-background-green","item-background-red","item-background-gray", "item-background-blue","item-background-brown"];
                var ind = 0;
                
                $.each(self.competencias(), function(index){
                    objectCompetencias.push(utils.utility.addClassToArray(self.competencias()[index],className[ind]+" item-font"));
                    ind++;
                    if(ind==7)
                        ind=0;
                });
                
                self.competencias(objectCompetencias);                
            });
        }
    };
};

