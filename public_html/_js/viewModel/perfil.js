var viewModelPerfil = function () {
    var self = this;
    self.intl = ko.observableArray([]);
    self.fullname = ko.observable('');
    self.adress = ko.observable('');    
    self.city = ko.observable('');
    self.state = ko.observable('');
    self.email = ko.observable('');
    self.cellphone = ko.observable('');
    self.telephone = ko.observable('');
    self.idioma = ko.observable('');
    self.oldPage = ko.observable('');
    self.nextPage = ko.observable('');

    self.initialize = function () {
        self.loadPage();
    };

    self.loadPage = function () {
        if (!document.getElementById("contentPerfil")) {
            $("#content").load("_js/view/perfil.html", function () {
                var contentPerfil = document.getElementById("contentPerfil");
                app.initialize.viewModel(self, contentPerfil);
                self.fullname("Franciane de Sousa Pereira");
                self.telephone("099 99999999");
                self.city("Fortaleza");
                self.state("Ceara");
                self.cellphone("085 998175201");
                self.email("franciane.hkd@gmail.com");
            });
        }        
    };
};


