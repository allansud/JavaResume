$(function () {
    utilAccount.carregarCidades();
});

utilAccount = {

    carregarCidades: function () {

        var $pais = $('#selectPais');
        var options = '<option value="">Choose a state</option>';
        $pais.on('change', function () {            
            if ($('#selectPais').val() === "Brazil" && $('#cidade options').length === 0) {

                options += '<option value="' + "AC" + '">' + "Acre " + '</option>';
                options += '<option value="' + "AL" + '">' + "Alagoas" + '</option>';
                options += '<option value="' + "AP" + '">' + "Amapá" + '</option>';
                options += '<option value="' + "AM" + '">' + "Amazonas" + '</option>';
                options += '<option value="' + "BA" + '">' + "Bahia" + '</option>';
                options += '<option value="' + "CE" + '">' + "Ceará " + '</option>';
                options += '<option value="' + "DF" + '">' + "Distrito Federal" + '</option>';
                options += '<option value="' + "ES" + '">' + "Espírito Santo" + '</option>';
                options += '<option value="' + "GO" + '">' + "Goiás " + '</option>';
                options += '<option value="' + "MA" + '">' + "Maranhão " + '</option>';
                options += '<option value="' + "MT" + '">' + "Mato Grosso " + '</option>';
                options += '<option value="' + "MS" + '">' + "Mato Grosso do Sul" + '</option>';
                options += '<option value="' + "MG" + '">' + "Minas Gerais" + '</option>';
                options += '<option value="' + "PA" + '">' + "Pará" + '</option>';
                options += '<option value="' + "PB" + '">' + "Paraíba" + '</option>';
                options += '<option value="' + "PR" + '">' + "Paraná" + '</option>';
                options += '<option value="' + "PI" + '">' + "Piauí" + '</option>';
                options += '<option value="' + "RJ" + '">' + "Rio de Janeiro" + '</option>';
                options += '<option value="' + "RN" + '">' + "Rio Grande do Norte" + '</option>';
                options += '<option value="' + "RS" + '">' + "Rio Grande do Sul" + '</option>';
                options += '<option value="' + "RO" + '">' + "Rondônia" + '</option>';
                options += '<option value="' + "RR" + '">' + "Roraima" + '</option>';
                options += '<option value="' + "SC" + '">' + "Santa Catarina" + '</option>';
                options += '<option value="' + "SP" + '">' + "São Paulo" + '</option>';
                options += '<option value="' + "SE" + '">' + "Sergipe" + '</option>';
                options += '<option value="' + "TO" + '">' + "Tocantins" + '</option>';

                $('#cidade').html(options);
                $('#cidade').niceSelect('update');
            } else {
                var optionsReset = '<option value="City">City</option>';
                $('#cidade').html(optionsReset);
                $('#cidade').niceSelect('update');
            }
        });
    },
}