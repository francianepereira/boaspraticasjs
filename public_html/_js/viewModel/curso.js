var viewModelCurso = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.cursos = ko.observableArray([]);

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentCurso")) {
            $("#content").load("_js/view/curso.html", function () {
                var contentCurso = document.getElementById("contentCurso");
                app.initialize.viewModel(self, contentCurso);                
                self.cursos(["Administração de Sistemas na Plataforma Linux",
                    "Oracle Database 11g","BI – Gestão e Conhecimento em Business Intelligence",
                    "Administração e Implementação de Soluções de Dados com Microsoft SQL Server 2008 R2",
                    "Titanium Mobile",
                    "Minicurso XP – Extreme Programming",
                    "Minicurso ASP.NET",
                    "Minicurso Modelagem OO",
                    "Developing MS ASP.Net Web Applications Using Visual Studio.Net",
                    "Análise e Projeto de Sistemas Orientados a Objeto usando UML",
                    "Programming a MS SQL Server 2000 Database"
                ]);
            });
        }
    };
};


