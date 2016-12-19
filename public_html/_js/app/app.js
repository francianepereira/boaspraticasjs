var app = app || {};

app.initialize = {
    title: '',
    intl: null,
    running: function () {
        app.initialize.menu();
        app.initialize.index();
    },
    viewModel: function (model, content) {
        if (model != null && content != null) {
            try {
                ko.applyBindings(model, content);
                intl.setIntl(model);
            } catch (error) {
                console.log("error in applyBind , model : " + model + " content : " + content.id + "\n error : " + error);
            }
        }
    },
    menu: function() {
        vmMaster.vmMenu.initialize();
    },
    index: function () {
        vmMaster.vmPerfil.initialize();
    },
    perfil: function () {},
    areainteresse: function (){},
    curso: function () {},
    historicoprofissional: function () {},
    qualificacao: function () {},
    contato: function () {}
};


