$(document).ready(function () {
    $("#listaCategoria #checkall").click(function () {
        if ($("#listaCategoria #checkall").is(':checked')) {
            $("#listaCategoria input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#listaCategoria input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("[data-toggle=tooltip]").tooltip();

    listar.Inicializar();
    listar.PopularGridTabela();
    eventos.ModalListagem();
    eventos.DeletarRow();
    eventos.CadastrarCategoria();
});

listar = {

    Inicializar: function () {
        $('#listaCategoria').DataTable();
    },

    PopularGridTabela: function () {
        ex.ajax("", 'GET', pathListaCategoria, "",
            function () {
            },
            function (data) {                
                if (data.length > 0) {
                    var arrayTable = new Array();
                    var arrayRow = new Array();
                    $('#listaCategoria').dataTable().fnClearTable();
                    
                    for (var i = 0; i < data.length; i++) {
                        var inputRow = '<input type="checkbox" id="checkAll' + i + '">';
                        var cadastrarRow = '<button class="btn btn-primary btn-xs" data-id=' + data[i].id +' data-title="Edit" data-target="#cadastrar"><span class="fa fa-book"></span></button>'
                        var editRow = '<button class="btn btn-primary btn-xs" data-id='+ data[i].id +' data-title="Edit" data-target="#edit"><span class="fa fa-pencil"></span></button>';
                        var deleteRow = '<button class="btn btn-danger btn-xs" data-id=' + data[i].id + ' data-title="Delete" data-target="#delete"><span class="fa fa-trash"></span></button>';
                        arrayRow[i] = new Array(inputRow, data[i].id, data[i].descricao, data[i].dataCadastro, cadastrarRow, editRow, deleteRow);
                    }

                    arrayTable = arrayRow;
                    $('#listaCategoria').dataTable().fnAddData(arrayTable);
                    //$($.fn.dataTable.tables(true)).DataTable().columns.adjust();
                } else {
                    window.location.href = "/Categoria/Cadastrar";
                }
            },
            function (data) {                
                if (data.length < 20) {
                    $('#listaCategoria_info').hide();
                    $('#listaCategoria_length').hide();
                    $('#listaCategoria_paginate').hide();
                }
            }
        );
    }
}

eventos = {

    ModalListagem: function () {
        $('#listaCategoria').on('click', 'button', function () {
            var tipoModal = $(this).data('target');
            $('#hiddenDeleteId').val($(this).data('id'));
            $('#hiddenEditId').val($(this).data('id'));
            $(tipoModal).modal('show');  
            $('#descricao').val('');
        });
    },

    DeletarRow: function () {
        $('#deleteYes').on('click', function () {
            $('#delete').modal('hide');
            ex.ajax("", 'GET', pathDeletarCategoria, { id: $('#hiddenDeleteId').val() },
                function () {
                },
                function (data) {                    
                    $('#message').text(data);
                    $('#exampleModal').modal('show');
                    $('#listaCategoria').DataTable().clear().destroy();
                    listar.Inicializar();
                    listar.PopularGridTabela();
                });
        });
    },

    CadastrarCategoria: function () {
        $('#cadastrarYes').on('click', function () {   
            
            categoriaViewModel = {
                descricao: $('#descricao').val()
            };

            ex.ajax({ "RequestVerificationToken": verificationToken }, 'POST', pathCadastrarCategoria, categoriaViewModel,
                function () { },
                function (data) {
                    $('#message').text(data);
                    $('#exampleModal').modal('show');
                    $('#cadastrar').modal('hide');
                    $('#listaCategoria').DataTable().clear().destroy();
                    listar.Inicializar();
                    listar.PopularGridTabela();
                });
        });
    }
}
