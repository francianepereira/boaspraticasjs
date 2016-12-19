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
    perfil: function () {
        vmMaster.vmPerfil.initialize();
    },
    interesse: function (){
        vmMaster.vmInteresse.initialize();
    },
    curso: function () {},
    experiencia: function () {},
    formacao: function () {
        //vmMaster..initialize();
    },
    competencia: function () {
        vmMaster.vmCompetencia.initialize();
    },
    contato: function () {},
    redirect: function (modelName) {
        switch (modelName){
            case "perfil":
                this.perfil();
                break;
            case "interesse":
                this.interesse();
                break;
            case "curso":
                this.curso();
                break;
            case "formacao":
                this.formacao();
                break;
            case "experiencia":
                this.experiencia();
                break;
            case "competencia":
                this.competencia();
                break;
            default :
                this.perfil();
                break;
        }
    }
};


