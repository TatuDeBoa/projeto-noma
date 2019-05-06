const dadosProjetos = [
    {
        nome: 'priore',
        descricao: 'Priore surgiu de uma pequena frustração. Muitas vezes, para resolver determinados problemas um pouquinho menos triviais, eram necessárias ferramentas de cálculo numérico, capazes de realizar o trabalho braçal e detalhado dos procedimentos numéricos. Mas olha só, em sua maioria eram programas pagos, que necessitavam de licença. Assim, a ideia seria criar uma bibliteca gratuita, que fosse capaz de resolver, pelo menos, os procedimentos mais triviais que encontramos. Nasce Priore! Aqui, você encontrará várias ferramentas de resolução numérica de problemas. Para citar aqui, integração numérica, procedimentos estatísticos e algumas coisas de engenharia. Clique no botão aqui embaixo e acesse o site para conferir. Te vejo lá.'
    },
    {
        nome: 'bravo',
        descricao: ''
    }
];

function passar(pagina) {
    if(pagina == 'historia') {
        window.location.href = './index.html';
    } else if(pagina == 'projetos') {
        window.location.href = './projetos.html';
    }
}

function abrirModal(tipo) {
    $('#modalInformacoes').modal('show');
    dadosProjetos.forEach(projeto => {
        if(projeto.nome == tipo) {
            $('#nomeProjeto').text(projeto.nome.toUpperCase());
            $('#descricaoProjeto').text(projeto.descricao);
        }
    });
}