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
                self.interesses([ "Desenvolvimento Android", "Análise de sistema", "Front-End", "Mobile", "Desenvolvimento IOS", "Databases", ".NET", "Sql Server", "Frameworks JS", "Testes Unitarios", "GitHub", "Java", "Jenkins", "GitHub", "Python", "Git", "Mobile", "MVC", "PHP", "Linux", "ReactJs"]);
                var objectInteresses = [];
                var className = ["item-background-orange","item-background-violet","item-background-green","item-background-red","item-background-gray", "item-background-blue","item-background-brown"];
                var ind = 0;
                
                $.each(self.interesses(), function(index){
                    objectInteresses.push(utils.utility.addClassToArray(self.interesses()[index],className[ind]+" item-font"));
                    ind++;
                    if(ind==7)
                        ind=0;
                });
                self.interesses(objectInteresses);
            });
        }
    };
};


