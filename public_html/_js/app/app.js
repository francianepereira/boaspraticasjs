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
        vmMaster.vmResumo.initialize();
    },
    resumo: function () {
        vmMaster.vmResumo.initialize();
    },
    interesse: function (){
        vmMaster.vmInteresse.initialize();
    },
    curso: function () {
        vmMaster.vmCurso.initialize();
    },
    experiencia: function () {
        vmMaster.vmExperiencia.initialize();
    },
    formacao: function () {
        vmMaster.vmFormacao.initialize();
    },
    competencia: function () {
        vmMaster.vmCompetencia.initialize();
    },
    contato: function () {
        vmMaster.vmContato.initialize();
    },
    redirect: function (modelName) {
        switch (modelName){
            case "resumo":
                this.resumo();
                break;
            case "interesse":
                this.interesse();
                break;
            case "cursos":
                this.curso();
                break;
            case "formação":
                this.formacao();
                break;
            case "experiência":
                this.experiencia();
                break;
            case "competência":
                this.competencia();
                break;
            case "contato":
                this.contato();
                break;                
            default :
                this.resumo();
                break;
        }
    }
};


