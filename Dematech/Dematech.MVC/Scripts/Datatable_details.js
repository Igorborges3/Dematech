function format(d) {
    return "Descrição: "+d.descricao;
}

$(document).ready(function () {
    var dt = $('#tabela').DataTable({
        "columnDefs": [{ "className": "dt-center", "targets": "_all" }],
        scrollX: true,
        "columns": [
            {
                "class": "details-control",
                "orderable": false,
                "data": null,
                "defaultContent": ""
            },
            { "data": "Localidade" },
            { "data": "Cubiculo" },
            { "data": "Equipamento" },
            { "data": "Tipo_Equipamento" },
            { "data": "Usuario" },
             { "data": "IP_Usuário" },
            { "data": "Data_Hora" },
            { "data": "descricao" }
        ],
        "order": [[1, 'asc']]
    });

    // Array to track the ids of the details displayed rows
    var detailRows = [];

    $('#tabela tbody').on('click', 'tr td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = dt.row(tr);
        var idx = $.inArray(tr.attr('id'), detailRows);

        if (row.child.isShown()) {
            tr.removeClass('details');
            row.child.hide();

            // Remove from the 'open' array
            detailRows.splice(idx, 1);
        }
        else {
            tr.addClass('details');
            row.child(format(row.data())).show();

            // Add to the 'open' array
            if (idx === -1) {
                detailRows.push(tr.attr('id'));
            }
        }
    });

    // On each draw, loop over the `detailRows` array and show any child rows
    dt.on('draw', function () {
        $.each(detailRows, function (i, id) {
            $('#' + id + ' td.details-control').trigger('click');
        });
    });
});