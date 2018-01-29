function validaAcesso(pagina) {
    $.getJSON("/Account/VerificaAcesso", { URL: pagina },
       function (gateData) {
           if (gateData.acesso == 0) {
               alert("Você não tem acesso à essa função")
           }
           else {
               RedirecionaMenu(pagina);
           }
       });
}

function retiraComponente(id) {

    $("."+id).remove();
}