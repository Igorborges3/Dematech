$(document).ready(function () {
    $('#tabela').DataTable({
        scrollX: true,
        select: true,
        "iDisplayLength": 30,
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros por pagina",
            "info": "Pagina _PAGE_ de _PAGES_",
            "infoEmpty": "Nenhum registro encontrado",
            "infoFiltered": "(total de _MAX_ registros )",
            "infoPostFix": "",
            "thousands": ",",
            "loadingRecords": "Aguarde...",
            "processing": "Processando...",
            "search": "Buscar:",
            "zeroRecords": "Nenhum registro",
            "paginate": {
                "first": "Primeiro",
                "last": "Ultimo",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }
        }
    });


    var table = $('#tabela').DataTable();

    $('#tabela tbody').on('click', 'tr', function () {
        $(this).toggleClass('selected');
    });
});

function addRow() {
    var produto = $("#selectProduto option:selected").val();


    try {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: '/Produto/GetProduto/',
            data: "{'idProduto':'" + produto + "'}",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var dados = JSON.parse(data);
                console.log("Sucesso!!");
                if (dados !== null) {
                    var table = $('#tabela').DataTable();
                    var quantidade = $('#idQtd').val();
                    var subtotal = (quantidade * dados.Valor);
                    table.row.add([dados.Descricao, quantidade, dados.Valor, subtotal, "Excluir"]).draw();
                    var total = parseInt($('#idTotal').val() !== '' ? $('#idTotal').val() : 0);
                    $('#idTotal').val(total + subtotal);
                }
            },
            failure: function (errMsg) {
                console.log("Falhou!! : " + errMsg);

            },
            complete: function () {
                console.log("Tudo OK, Aguardando nova leitura!!");
            }
        });
    }
    catch (err) {
        console.log("Ops..deu muito ruim: " + err);
    }
}
function salvar() {

    var head = [],
        i = 0,
        tableObj = { myrows: [] };
    $.each($("#tabela th"), function () {
        head[i++] = $(this).text();
    });

    $.each($("#tabela tbody tr"), function () {
        var $row = $(this),
            rowObj = {};

        i = 0;
        $.each($("td", $row), function () {
            var $col = $(this);
            rowObj[head[i]] = $col.text();
            i++;
        })

        tableObj.myrows.push(rowObj);
    });

    var jsontTable = JSON.stringify(tableObj);

    var produto = $("#selectCliente option:selected").val();
    var dataEntrega = $("#dataEntrega").val();

    try {
        $.ajax({
            type: "POST",
            url: '/Pedido/Salvar/',
            data: jsontTable,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                alert("Pedido salvo com sucesso!");
            },
            failure: function (errMsg) {
                console.log("Falhou!! : " + errMsg);

            },
        });
    }
    catch (err) {
        console.log("Ops..");
    }

}