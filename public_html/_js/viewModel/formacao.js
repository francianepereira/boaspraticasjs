var viewModelFormacao = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.formacoes = ko.observableArray([]);

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentFormacao")) {
            $("#content").load("_js/view/formacao.html", function () {
                var contentFormacao = document.getElementById("contentFormacao");
                app.initialize.viewModel(self, contentFormacao);      
                self.formacoes([{"instituicao":"Universidade Estácio de Sá","curso":"Análise e Desenvolvimento de Sistemas","periodo":"2016 - 2018","descricao":"O profissional da área de Análise e Desenvolvimento de Sistemas administra e mantém softwares que apóiam o funcionamento de uma organização. Possui conhecimento para a criação de projetos de automação de processos administrativos e para a gestão do desenvolvimento de sistemas. Também aprende técnicas para documentar, testar e implantar sistemas de informação, como também para usar ferramentas metodológicas de garantia de qualidade em sistemas de informação."}
                    ,{"instituicao":"CLEC - Centro de Línguas Estrangeiras do Ceará","curso":"Inglês","periodo":"2016 - 2018","descricao":"Ensino de Ingles como Segundo Idioma"}]);
            });
        }
    };
};


