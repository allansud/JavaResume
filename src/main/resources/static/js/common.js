//Comum a toda aplicação.
var ex = {
    ajax: function (headers, method, url, data, beforeSend, success, done) {
        var ajaxObj = {
            cache: false,
            url: url,
            type: method,
            data: data,
            beforeSend: beforeSend,
            success: success,                        
        };
        if (url.indexOf("Salvar") > -1) {
            ajaxObj.data = JSON.stringify(data);
            ajaxObj.dataType = "json";
            ajaxObj.contentType = "application/json: charset=utf-8";
            console.log(ajaxObj);
        }
        if (headers != null || headers != undefined || headers != "")
            ajaxObj.headers = headers;

        $.ajax(ajaxObj).done(done);
    }
}