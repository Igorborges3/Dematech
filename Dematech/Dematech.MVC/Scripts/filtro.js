// posição default dos selectList = -1
$(function () {
    if (!document.getElementById("no-select")) {
        var todos_combobox = document.getElementsByTagName("select");
        for (i = 0; i < todos_combobox.length; i++) {
            document.getElementsByTagName("select")[i][0].value = -1;
        }
    }
});

//funcao responsavel por carregar os campos dos filtros, invocando Contoller/Action responsavel

//recebe como parametro
//remetente = Id do campo que teve o valor alterado
//destinatario = Id do campo que deve ser alterado
//controller = Nome do Controller que será chamado
//action = Nome da Action que será chamada
//window.onload = function () {

function CarregarFiltro(remetente, destinatario, controller, action) {
    var _remetente = $("#" + remetente).val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/" + controller + "/" + action + "/",

        data: "{'valorRemetente':'" + _remetente + "','idDestinatario':'" + destinatario + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            dados = JSON.parse(data)
            var html = "<option value='-1'>------- Todos -------</option>";

            //Carrega os campo de Instalaçãoes
            if (destinatario === "instalacaoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value='" + dados[i].IdInstalacao + "'>" + dados[i].InstalacaoSigla + "</option>";
                }
                LimpaCombobox(destinatario);
            }

                //Carrega os campo de Cabanas
            else if (destinatario === "cabanaFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value='" + dados[i].IdCabana + "'>" + dados[i].NomeCabana + "</option>";
                }
                LimpaCombobox(destinatario);
            }

                //Carrega os campo de Circuitos
            else if (destinatario === "circuitoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value='" + dados[i].IdCircuito + "'>" + dados[i].NomeCircuito + "</option>";
                }
                LimpaCombobox(destinatario);
            }

                //Carrega os campo de Código Operacional
            else if (destinatario === "cod_operacionalFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value='" + dados[i].IdIED + "'>" + dados[i].NomeIED + "</option>";
                }
                LimpaCombobox(destinatario);
            }

                //Carrega os campo de Terminal Server
            else if (destinatario == "tsFiltro") {
                for (i = 0; i < dados.length; i++) {
                    html += "<optin value = '" + dados[i].IdTs + "'>" + dados[i].NomeTS + "</option>";
                }
                LimpaCombobox(destinatario);
            }

                //Carrega os campo de equipamento
            else if (destinatario == "equipamentoFiltro") {
                for (i = 0; i < dados.length; i++) {
                    html += "<optin value = '" + dados[i].IdEquipamento + "'>" + dados[i].NomeEquipamento + "</option>";
                }
                LimpaCombobox(destinatario);
            }

            select = document.getElementById(destinatario);
            select.outerHTML =
                select.outerHTML.replace(select.innerHTML, html);
        },
        failure: function (errMsg) {
            alert("Erro ao carregar os dados, tente novamente mais tarde.");
        },
    });

}

//função que limpa os SelectList, recebe um ID como parametro todos os Selects após o Id
function LimpaCombobox(id) {
    var select = $("div > select");
    for (i = 0; i < select.length; i++) {
        if (select[i].id == id && i < select.length - 1) {
            for (x = i + 1; x < select.length; x++) {
                $('#' + select[x].id).find('option:not(:first)').remove()
            };
        }
    }
}

//Carrega as combbox das paginas de Editar e Criar
function CarregarCombobox(remetente, destinatario, controller, action) {
    var _remetente = $("#" + remetente).val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/" + controller + "/" + action,
        //url: "//CarregarFiltros",
        //data:"{'um':'1'}",
        //data: "{'valorRemetente':' + _remetente + ','idDestinatario':' destinatario + '}",
        data: "{'valorRemetente':'" + _remetente + "','idDestinatario':'" + destinatario + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            dados = JSON.parse(data)
            var html = "<option value=' '>------ Selecione ------</option>";

            //Carrega os campo de Instalaçãoes
            if (destinatario === "instalacaoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdInstalacao + "'>" + dados[i].InstalacaoSigla + "</option>";
                }

            }

                //Carrega os campo de Cabanas
            else if (destinatario === "cabanaFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdCabana + "'>" + dados[i].NomeCabana + "</option>";
                }
            }

                //Carrega os campo de Circuitos
            else if (destinatario === "circuitoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdCircuito + "'>" + dados[i].NomeCircuito + "</option>";
                }
            }

                //Carrega os campo de Código Operacional
            else if (destinatario === "cod_operacionalFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdIED + "'>" + dados[i].NomeIED + "</option>";
                }
            }

            else if (destinatario === "concentradorFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdConcentrador + "'>" + dados[i].NomeConcentrador + "</option>";
                }
            }

            else if (destinatario === "tsFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdTS + "'>" + dados[i].NomeTS + "</option>";
                }
            }

            else if (destinatario === "equipamentoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdEquipamento + "'>" + dados[i].NomeEquipamento + "</option>";
                }
            }

            else if (destinatario === "tipoEquipamentoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].TipoEquipamento + "'>" + dados[i].NomeTipoEquipamento + "</option>";
                }
            }

            select = document.getElementById(destinatario);
            select.outerHTML =
                select.outerHTML.replace(select.innerHTML, html);
        },
        failure: function (errMsg) {
            alert("Erro ao carregar os dados, tente novamente mais tarde.");
        },
    });

}

//Carrega as combbox das paginas de Editar e Criar
function CarregarCombobox2Campos(remetente, destinatario, destinatario2, controller, action) {
    var _remetente = $("#" + remetente).val();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/" + controller + "/" + action,
        //url: "//CarregarFiltros",
        //data:"{'um':'1'}",
        //data: "{'valorRemetente':' + _remetente + ','idDestinatario':' destinatario + '}",
        data: "{'valorRemetente':'" + _remetente + "','idDestinatario':'" + destinatario + "','idDestinatario2':'"+ destinatario2 +"'}",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            dados = JSON.parse(data)
            var html = "<option value=' '>------ Selecione ------</option>";

        
            //Carrega os campo de Instalaçãoes
            if (destinatario === "instalacaoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdInstalacao + "'>" + dados[i].InstalacaoSigla + "</option>";
                }
                LimpaCombobox(destinatario);

            }

                //Carrega os campo de Cabanas
            else if (destinatario === "cabanaFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdCabana + "'>" + dados[i].NomeCabana + "</option>";
                }
                LimpaCombobox(destinatario);
            }

                //Carrega os campo de Circuitos
            else if (destinatario === "circuitoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdCircuito + "'>" + dados[i].NomeCircuito + "</option>";
                }
                LimpaCombobox(destinatario);
            }

                //Carrega os campo de Código Operacional
            else if (destinatario === "cod_operacionalFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdIED + "'>" + dados[i].NomeIED + "</option>";
                }
                LimpaCombobox(destinatario);
            }

            else if (destinatario === "concentradorFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdConcentrador + "'>" + dados[i].NomeConcentrador + "</option>";
                }
                LimpaCombobox(destinatario);
            }

            else if (destinatario === "tsFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdTS + "'>" + dados[i].NomeTS + "</option>";
                }
                LimpaCombobox(destinatario);
            }

            else if (destinatario === "equipamentoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdEquipamento + "'>" + dados[i].NomeEquipamento + "</option>";
                }
                LimpaCombobox(destinatario);
            }

            else if (destinatario === "tipoEquipamentoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].TipoEquipamento + "'>" + dados[i].NomeTipoEquipamento + "</option>";
                }
                LimpaCombobox(destinatario);
            }

            select = document.getElementById(destinatario);
            select.outerHTML =
                select.outerHTML.replace(select.innerHTML, html);




            //Carrega os campo de Instalaçãoes
            if (destinatario2 === "instalacaoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdInstalacao + "'>" + dados[i].InstalacaoSigla + "</option>";
                }
                LimpaCombobox(destinatario2);

            }

                //Carrega os campo de Cabanas
            else if (destinatario2 === "cabanaFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdCabana + "'>" + dados[i].NomeCabana + "</option>";
                }
                LimpaCombobox(destinatario2);
            }

                //Carrega os campo de Circuitos
            else if (destinatario2 === "circuitoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdCircuito + "'>" + dados[i].NomeCircuito + "</option>";
                }
                LimpaCombobox(destinatario2);
            }

                //Carrega os campo de Código Operacional
            else if (destinatario2 === "cod_operacionalFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdIED + "'>" + dados[i].NomeIED + "</option>";
                }
                LimpaCombobox(destinatario2);
            }

            else if (destinatario2 === "concentradorFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdConcentrador + "'>" + dados[i].NomeConcentrador + "</option>";
                }
                LimpaCombobox(destinatario2);
            }

            else if (destinatario2 === "tsFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdTS + "'>" + dados[i].NomeTS + "</option>";
                }
                LimpaCombobox(destinatario2);
            }

            else if (destinatario2 === "equipamentoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].IdEquipamento + "'>" + dados[i].NomeEquipamento + "</option>";
                }
                LimpaCombobox(destinatario2);
            }

            else if (destinatario2 === "tipoEquipamentoFiltro") {
                for (i = 0; i < dados.length ; i++) {
                    html += "<option value=' " + dados[i].TipoEquipamento + "'>" + dados[i].NomeTipoEquipamento + "</option>";
                }
                LimpaCombobox(destinatario2);
            }

            select = document.getElementById(destinatario2);
            select.outerHTML =
                select.outerHTML.replace(select.innerHTML, html);
        },
        failure: function (errMsg) {
            alert("Erro ao carregar os dados, tente novamente mais tarde.");
        },
    });

}

//Ação do botão Filtrar da partial view de Filtro
function BotaoFiltrar(Controler, Action) {

    var nomeCollection = [];
    var valorCollection = [];

    var regional = null;
    var instalacao = null;
    var cabana = null;
    var circuito = null;
    var cod_operacional = null;
    var oscilografia = null;
    var evento = null;
    var parametro = null;
    var locFalta = null;
    var auditoria = null;
    var dataOcorrencia = null;
    var campovital = null;
    var camponaovital = null;
    var dataocorrencia = null;
    var camera = null;
    var ied = null;
    var uada = null;
    var concentrador = null;
    var ts = null;
    var Switch = null;
    var firewall = null;
    var gps = null;
    var sistema = null;
    var usuario = null;
    var drr = null;

    $("body").css("cursor", "progress");
    var todos_combobox = document.getElementsByTagName("select");

    //pega os valores das combobox
    for (i = 0; i < todos_combobox.length; i++) {
        switch (todos_combobox[i].name) {

            case "table_regional":
                if (todos_combobox[i].value != -1) {
                    regional = todos_combobox[i].value.toString();
                }

                break;

            case "table_instalacao":
                if (todos_combobox[i].value != -1) {
                    instalacao = todos_combobox[i].value.toString();
                }
                break;

            case "table_cabana":
                if (todos_combobox[i].value != -1) {
                    cabana = todos_combobox[i].value.toString();
                }
                break;

            case "table_circuito":
                if (todos_combobox[i].value != -1) {
                    circuito = todos_combobox[i].value.toString();
                }
                break;

            case "table_cod_operacional":
                if (todos_combobox[i].value != -1) {
                    cod_operacional = todos_combobox[i].value.toString();
                }
                break;

            case "table_usuario":
                if (todos_combobox[i].value != -1) {
                    usuario = todos_combobox[i].value.toString();
                }         
        }
    }

    //pega o os valores dos checkbox

    if (document.getElementById("oscilografiaFiltro") != null)
        oscilografia = document.getElementById("oscilografiaFiltro").checked;

    if (document.getElementById("eventoFiltro") != null)
        evento = document.getElementById("eventoFiltro").checked;

    if (document.getElementById("locFaltaFiltro") != null)
        locFalta = document.getElementById("locFaltaFiltro").checked;

    if (document.getElementById("parametroFiltro") != null)
        parametro = document.getElementById("parametroFiltro").checked;

    if (document.getElementById("parametroFiltro"))
        auditoria = document.getElementById("parametroFiltro").checked;

    if (document.getElementById("camponaovitalFiltro") != null)
        if (document.getElementById("camponaovitalFiltro").checked)
            camponaovital = document.getElementById("camponaovitalFiltro").value;

        else if (document.getElementById("campovitalFiltro").checked)
            campovital = document.getElementById("campovitalFiltro").value;
    if (document.getElementById("dataFiltro"))
        if (document.getElementById("dataFiltro").value)
            dataOcorrencia = document.getElementById("dataFiltro").value;

    if (document.getElementById("cameraFiltro"))
        camera = document.getElementById("cameraFiltro").checked;

    if (document.getElementById("iedFiltro"))
        ied = document.getElementById("iedFiltro").checked;

    if (document.getElementById("uadaFiltro"))
        uada = document.getElementById("uadaFiltro").checked;

    if (document.getElementById("concentradorFiltro"))
        concentrador = document.getElementById("concentradorFiltro").checked;

    if (document.getElementById("tsFiltro"))
        ts = document.getElementById("tsFiltro").checked;

    if (document.getElementById("switchFiltro"))
        Switch = document.getElementById("switchFiltro").checked;

    if (document.getElementById("firewallFiltro"))
        firewall = document.getElementById("firewallFiltro").checked;

    if (document.getElementById("gpsFiltro"))
        gps = document.getElementById("gpsFiltro").checked;

    if (document.getElementById("sistemaFiltro"))
        sistema = document.getElementById("sistemaFiltro").checked;

    if (document.getElementById("drrFiltro"))
        drr = document.getElementById("drrFiltro").checked;


    $.ajax(
    {
        type: 'GET',
        url: '/' + Controler + '/' + Action,
        data: {
            'regional': regional,
            'instalacao': instalacao,
            'cabana': cabana,
            'circuito': circuito,
            'cod_operacional': cod_operacional,
            'dataOcorrencia': dataOcorrencia,
            'oscilografia': oscilografia,
            'evento': evento,
            'locFalta': locFalta,
            'campovital': campovital,
            'camponaovital': camponaovital,
            'camera': camera,
            'ied': ied,
            'uada': uada,
            'concentrador': concentrador,
            'ts': ts,
            'Switch': Switch,
            'firewall': firewall,
            'gps': gps,
            'sistema': sistema,
            'usuario': usuario,
            'drr': drr

        },

        success: function (response) {
            $('#conteudo').html(response);
            $("body").css("cursor", "default");
        },
        error: function (response) {
            $("body").css("cursor", "default");
            var teste;
            alert("Ocorreu um erro");
        }
    });


}

function ApagarSelecionado(Controler, Action) {
    var table = $('#tabela').DataTable();
    var teste = table.rows('.selected');
    var data = table.rows('.selected').data

    var id = [];
    if (table.rows('.selected').data().length > 0) {
        if (confirm('Tem certeza que deseja excluir todos o(s) registro(s) selecionado(s)?')) {
            for (var i = 0; i < table.rows('.selected').data().length; i++) {
                id[i] = table.rows('.selected').data()[i][0];
                var posicaoInicial = id[i].search('value=') + 7;
                id[i] = id[i].substring(posicaoInicial, id[i].lenght);
                var posicaoFinal = id[i].search("\"");
                id[i] = id[i].substring(0, posicaoFinal);
            }
            $.ajax({
                type: 'POST',
                url: '/' + Controler + '/' + Action + '/',
                data: { 'id': JSON.stringify(id) },
                success: function (response) {
                    var table = $('#tabela').DataTable().rows('.selected');
                    alert("Registro(s) excluído(s) com sucesso");
                    window.location.href = "../" + Controler + "/Index";
                },
                error: function (response) {
                    alert(response);
                }
            });
        }
    }
    else {
        alert("Selecione o registro");
    }
}
//var table = $('#tabela').DataTable();


//var rows = table.rows({ selected: true }).data();
//var cells =  table.cells({ selected: true }).data();

//var data = table.buttons.exportData({
//    modifier: {
//        selected: true
//    }
//});
// Do something with the 'data' variable

//var itens = document.getElementById("item_CheckBox");

//var x = itens.count();


//$(document).ready(function () {
//    var table = $('#tabela').DataTable();

//    $('#tabela tbody').on('click', 'tr', function () {
//        if ($(this).hasClass('selected')) {
//            $(this).removeClass('selected');
//        }
//        else {
//            table.$('tr.selected').removeClass('selected');
//            $(this).addClass('selected');
//        }
//    });

//    $('#button').click(function () {
//        table.row('.selected').remove().draw(false);
//    });
//});


