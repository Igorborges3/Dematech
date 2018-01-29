

$(document).ready(function () {

    $('#tabela').DataTable({
        "columnDefs": [  {"className": "dt-center", "targets": "_all"}],
        scrollX: true,
        "iDisplayLength": 15,
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros por pagina",
            "zeroRecords": "Nenhum registro encontrado",
            "info": "Pagina _PAGE_ de _PAGES_",
            "infoEmpty": "Nenhum registro encontrado",
            "infoFiltered": "(total de _MAX_ registros )",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_",
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
});