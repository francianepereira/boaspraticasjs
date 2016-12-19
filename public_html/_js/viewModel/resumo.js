var viewModelResumo = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.describe = ko.observable('');

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentResumo")) {
            $("#content").load("_js/view/resumo.html", function () {
                var contentResumo = document.getElementById("contentResumo");
                app.initialize.viewModel(self, contentResumo);
                self.describe('Programadora Web, buscando novos desafios. Possuo experiência em execução de procedimentos específicos da área, zelo e conservação do material de uso diário, facilidade de trabalhar em equipe e de relacionamento com outras pessoas. Experiência comprovada com .Net e SQL Server na empresa SecrelNet. Conhecimento intermediário Wordpress; Bootstrap, Tableless, CSS3 e HTML5, Noção básica de NodeJS; Noções básica sobre Postfix. experiência com AngularJS, KnockoutJS, Jasmine Test, Cordova e PhoneGap. Boas práticas de internacionalização utilizando rest em Java e uso do netbeans.');
            });
        }        
    };
};


