$(function () {
    utilIndex.readMore();
    utilIndex.readMore_c();
    utilIndex.readMore_vs();
    utilIndex.enviarNewsletter();
});

var ex = {
    ajax: function (method, url, data, beforeSend, success) {
        var ajaxObj = {
            cache: false,
            url: url,
            type: method,
            data: data,
            beforeSend: beforeSend,
            success: success,
            error: window.tratadorJSONException
        };
        if (url.indexOf("Salvar") > -1) {
            ajaxObj.data = { str: JSON.stringify(data) };
            ajaxObj.dataType = "json";
            ajaxObj.contentType = "application/json";
            console.log(ajaxObj);
        }

        $.ajax(ajaxObj);
    }
}

var utilIndex = {

    readMore: function () {
        
        var $btnText = $('#myBtn');
        $btnText.on('click', function () {

            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        });
    },
    readMore_c: function () {

        var $btnText = $('#myBtn_c');
        $btnText.on('click', function () {

            var dots = document.getElementById("dots_c");
            var moreText = document.getElementById("more_c");
            var btnText = document.getElementById("myBtn_c");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        });
    },

    readMore_vs: function () {

        var $btnText = $('#myBtn_vs');
        $btnText.on('click', function () {

            var dots = document.getElementById("dots_vs");
            var moreText = document.getElementById("more_vs");
            var btnText = document.getElementById("myBtn_vs");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        });
    },

    enviarNewsletter: function () {

        var $newsletterBtn = $('#newsletterBtn');

        $newsletterBtn.on('click', function () {

            var emailObject = new Object();
            emailObject.Email = $('#indexEmail').val();

            ex.ajax('POST', pathNewsletter, emailObject,
                function () {
                    $('#newsletterBtn').html('Sending...');
                },
                function (data) {
                    if (data.resultado[0] === "E-mail já cadastrado") {
                        $('#txtMensagem').text(data.resultado[0]);                        
                        $('#txtMensagem').show();
                    }

                    $('#formIndex').trigger('reset');   
                    $('#newsletterBtn').html('Get Started');
                });
        });
    }
}