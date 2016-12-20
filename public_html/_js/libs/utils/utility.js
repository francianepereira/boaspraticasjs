var utils =  utils || {};

utils.utility = {
    initialize: function () {

    },
    showSpinner: function () {
        $("#spinner").removeClass("hidden");
        $("#spinner").addClass("show");
    },
    hiddenSpinner: function () {
        $("#spinner").removeClass("show");
        $("#spinner").addClass("hidden");
    },
    getJSON: function (url) {
        var json = null;

        $.ajax({
            async: false,
            global: false,
            url: url,
            dataType: "json",
            success: function (data) {
                json = data;
            }
        });
        
        return json;
    },
    addClassToArray: function (value,className){
        var object={"name":value,"class":className};        
        return object;
    }
};