//Celesc
var ip = '172.16.32.35';

//Luis
//var ip = '192.168.56.102';

//function download(caminho) {
//    window.open('ftp://root:ecil77@http://172.16.32.35' + caminho, '_blank');
//}

function download(idArquivo) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Pedido de Download Recebido<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    console.log("http://" + ip + ":8080/servlet/download?modo=download&cod=" + idArquivo, "_blank'")
    window.open('http://' + ip + ':8080/servlet/download?modo=download&cod=' + idArquivo, '_blank');
}

function coleta(tipo, usuario) {
    var id = document.getElementById("idIED").value;
    var teste = "'http://"+ip+" :8080/servlet/comunicacao?codIED='" + id + "'&comunicar='" + tipo + " '&usuario='" + usuario;
    console.log(teste);
    if (tipo == 'c') {
        var grupo = document.getElementById("Grupo").selectedIndex;
        var debug = 'http://' + ip + ':8080/servlet/comunicacao?codIED=' + id + '&comunicar=' + tipo + '&usuario=' + usuario + '-Grupo' + grupo;
        $.post('http://'+ip+':8080/servlet/comunicacao?codIED=' + id + '&comunicar=' + tipo + '&usuario=' + usuario +'-Grupo'+grupo);
    }
    else if (tipo == "Ultimo")
    {
        var grupo = document.getElementById("Grupo").value;
        var debug = 'http://' + ip + ':8080/servlet/comunicacao?codIED=' + id + '&comunicar=' + tipo + '&usuario=' + usuario + '-Grupo-Ultimo';
        $.post('http://' + ip + ':8080/servlet/comunicacao?codIED=' + id + '&comunicar=p' + '&usuario=' + usuario + '-Grupo-Ultimo');

    }
    else if (tipo == "Enviar") {
        var grupo = document.getElementById("Grupo").value;
        var debug = 'http://' + ip + ':8080/servlet/comunicacao?codIED=' + id + '&comunicar=' + tipo + '&usuario=' + usuario + '-Grupo-Enviado';
        $.post('http://' + ip + ':8080/servlet/comunicacao?codIED=' + id + '&comunicar=p' + '&usuario=' + usuario + '-Grupo-Enviado');

    }
    else {
        $.post('http://' + ip + ':8080/servlet/comunicacao?codIED=' + id + '&comunicar=' + tipo + '&usuario=' + usuario);
    } 
}

function AtualizarConcentradores(usuario) {
    $.post('http://' + ip + ':8080/servlet/resetar?usuario=' + usuario);
}

function ReinciarSercom(usuario) {
    if (confirm('Isso irá interromper momentaneamente o serviço principal do sistema, todas as conexões com os concentradores serão reiniciadas. Você tem certeza que deseja continuar?')){
        $.post('http://' + ip + ':8080/servlet/resetar?geral=sim&usuario=+' + usuario);
    }    
}

function AtualizarConcentrador(idConcentrador, usuario)
{
    $.post('http://' + ip + ':8080/servlet/resetarconcentrador?idconcentrador=' + idConcentrador + '&usuario=' + usuario)
}
function CarregarFiltro(remetente, destinatario, controller, action) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/" + controller + "/" + action + "/",

        data: "{'valorRemetente':'" + _remetente + "','idDestinatario':'" + destinatario + "'}",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("Tudo OK");
        },
        failure: function (errMsg) {
            alert("Nada OK");
        },
    });

}