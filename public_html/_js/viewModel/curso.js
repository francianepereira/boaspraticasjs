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
                self.cursos([{"instituicao":"Centro de Treinamento em Tecnologia SecrelNet","curso":"Administração de Sistemas na Plataforma Linux","periodo":"60 horas – Julho/2015"},
                    {"instituicao":"Centro de Treinamento em Tecnologia SecrelNet","curso":"Oracle Database 11g","periodo":"60 horas – Janeiro/2013"},
                    {"instituicao":"Centro de Treinamento em Tecnologia SecrelNet","curso":"BI – Gestão e Conhecimento em Business Intelligence","periodo":"60 horas – Novembro/2012"},
                    {"instituicao":"Centro de Treinamento em Tecnologia SecrelNet","curso":"Administração e Implementação de Soluções de Dados com Microsoft SQL Server 2008 R2","periodo":"80 horas – Agosto/2012"},
                    {"instituicao":"Equipe e-Genial ","curso":"Titanium Mobile","periodo":"20 horas – Março/2012"},
                    {"instituicao":"Ministrado na Maré de Agilidade","curso":"Minicurso XP – Extreme Programming","periodo":"Agosto/2009"},
                    {"instituicao":"Ministrado na SecrelNet","curso":"Minicurso ASP.NET","periodo":"Janeiro/2008"},
                    {"instituicao":"Ministrado na SecrelNet","curso":"Minicurso Modelagem OO","periodo":"Novembro/2007"},
                    {"instituicao":"Evolução Informática","curso":"Developing MS ASP.Net Web Applications Using Visual Studio.Net","periodo":"40 horas"},
                    {"instituicao":"Insoft – Instituto de Software do Ceará","curso":"Análise e Projeto de Sistemas Orientados a Objeto usando UML","periodo":"24 horas"},
                    {"instituicao":"Evolução Informática","curso":"Programming a MS SQL Server 2000 Database","periodo":"40 horas"}
                ]);
            });
        }
    };
};


