$(document).ready(function () {

    var IdConcentrador1 = $("#P61850").val();
    if (IdConcentrador1 != "")
    {
        //$.ajax({
        //    type:"POST",
        //    dataType: "json",
        //    url : "/Concentrador/Habilitar61850/",

        //    data: "{'idconcentrador':'" + IdConcentrador1 + "'}",
        //    contentType: "application/json; charset=utf-8",
        //    success: function (data) {
        //        var ModeloConcentrador = JSON.parse(data)

        //        if (ModeloConcentrador.possui61850 == false)
        //        {
        //            $('#Ip2').hide();
        //            $('#PeriodoEstatistica').hide();
        //            $('PeriodoCíclica').hide();
        //        }
        //        else{}
        //    },
        //    failure: function (errMsg) {
        //        alert("Erro ao carregar os dados, tente novamente mais tarde.");
        //    },
        //})
        if(IdConcentrador1 == "False")
        {
            $('#Ip2').hide();
            $('#PeriodoEstatistica').hide();
            $('#PeriodoCíclica').hide();
        }
        else
        {

        }

    }
    else
    {
        $('#Ip2').hide();
        $('#PeriodoEstatistica').hide();
        $('#PeriodoCíclica').hide();
    }

})

function HabilitarCampoPossui61850(Botao1)
{
    var Botao = $("#" + Botao1).val();
    //$.ajax({
    //    type: "POST",
    //    dataType: "json",
    //    url: "/Concentrador/Habilitar61850/",

    //    data: "{'idconcentrador':'" + idConcentrador + "'}",
    //    contentType: "application/json; charset=utf-8",
    //    secess: function (data) {
    //        var ModeloConcentrador = JSON.parse(data)

    //        if (ModeloConcentrador.possui61850 == false) {
    //            $('#Ip2').hide();
    //            $('#PeriodoEstatistica').hide();
    //        }
    //        else { }
    //    },
    //    failure: function (errMsg) {
    //    alert("Erro ao carregar os dados, tente novamente mais tarde.");
    //},
    //})
    if(Botao == false)
    {
        $('#Ip2').hide();
        $('#PeriodoEstatistica').hide();
        $('PeriodoCíclica').hide();
    }
    else if(Botao == true)
    {
        $('#Ip2').show();
        $('#PeriodoEstatistica').show();
        $('PeriodoCíclica').show();
    }

}