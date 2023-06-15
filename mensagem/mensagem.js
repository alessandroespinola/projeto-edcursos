function fecharMensagem(event) {
    event.currentTarget.parentElement.style.display = 'none';
}

function abrirMensagem(classeMensagem, textoMensagem) {
    var divMensagens = document.getElementById('mensagens');
    divMensagens.innerHTML = textoMensagem + '<span class="btn-fechar-mensagem" onclick="fecharMensagem(event)">&times;</span>';
    divMensagens.className = 'mensagem ' + classeMensagem;
    divMensagens.style.display = 'block';
}
