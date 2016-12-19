$(document).ready(function () {

    if (typeof (Storage) !== "undefined") {
//        try {
//            utils.phone.initialize();
//        } catch (erro) {
//            console.log(erro);
//            alert("error in initialize app!");
//        }
        app.initialize.running();
    } else {
        console.log("Your browser does not support Web Storage...");
    }

});

