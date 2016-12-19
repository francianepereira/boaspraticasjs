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
    self.title_fullname = ko.observable('');
    self.title_adress = ko.observable('');    
    self.title_city = ko.observable('');
    self.title_state = ko.observable('');
    self.title_email = ko.observable('');
    self.title_cellphone = ko.observable('');
    self.title_telephone = ko.observable('');    
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
                self.title_fullname("Name:");
                self.title_telephone("Telephone:");
                self.title_city("City:");
                self.title_state("State:");
                self.title_cellphone("Cellphone:");
                self.title_email("E-mail:");                
                self.fullname("Franciane de Sousa Pereira");
                self.telephone("085 3484-3325");
                self.city("Fortaleza");
                self.state("Ceara");
                self.cellphone("085 99817-5201");
                self.email("franciane.hkd@gmail.com");
            });
        }        
    };
};


