var viewModelExperiencia = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.experiencias = ko.observableArray([]);

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentExperiencia")) {
            $("#content").load("_js/view/experiencia.html", function () {
                var contentExperiencia = document.getElementById("contentExperiencia");
                app.initialize.viewModel(self, contentExperiencia);      
                self.experiencias([
                    {"empresa":"Docner","cargo":"Front-End","periodo":"julho 2016 - janiero 2017","descricao":"Programadora trabalhando como front-end utilizando plataforma Linux, criando aplicativos mobiles para Android e IOS. Teste unitário com Jasmine, configuração Karma, Cordova e Phonegap. Conhecimento prático com GIT, Jenkins e IVY, configuração de servidor para gerar aplicação mobile e executáveis em Java. Experiência com AngularJS e KnockoutJS, JQuery, HTML5, CSS3, Java Swing e utilizar o XCode para crianção de app IOS."},
                    {"empresa":"SecrelNet Informática LTDA","cargo":"Programador Pleno","periodo":"março 2003 - março 2016","descricao":"Desenvolvedor Web e Desktop na plataforma .NET<br />ASP Classic<br /> PHP<br /> Yii Framework<br /> C#<br /> VB.Net<br /> JQuery<br /> Wordpress<br /> Joomla<br /> Python<br /> AngularJS<br />NodeJS<br /> Asp.Net MVC<br /> Database SQL Server (Intermediário), MySQL (Intermediário) e MongoDB (Básico)<br /> Gerenciamento de processos e migração de banco MySQL<br /> Modelagem e administração de Database (SQL Server e MySQL)<br /> Conhecimento prático em MTA Postfix e Qmail<br /> Experiência nas distribuições Linux: CentOS e Debian<br /> Conhecimento em Shell Script e Perl<br /> Sistemas de controle de versão: SVN e GIT"},
                    {"empresa":"SecrelNet Informática LTDA","cargo":"Helpdesk","periodo":"2002 - 2003","descricao":"Suporte Técnico de rede e internet"},
                    {"empresa":"Empresa Multivirtual","cargo":"Programador Web","periodo":"abril 2002 - novembro 2002","descricao":"Programadora PHP + MySQL"},                
                ]);
            });
        }
    };
};

