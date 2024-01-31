var elementosDuvida = document.querySelectorAll('.duvida')//queryselectorall pega todos os elementos ao inves do queryselector que pega só o primeiro encontrado.

elementosDuvida.forEach( function(duvida) {//executar uma funçao para cada elemento duvida que buscamos acima.
    duvida.addEventListener('click', function() {//dentro da funcao vamos adicionar um ouvidor de evento de click.
        duvida.classList.toggle('ativa')//evento de click vai executar o que esta aqui dentro
    })//toggle - alternar, como se fosse um liga e desliga/ vai verificar se a classe existir ou nao..
})//vai acontecer todo esse funcinamento quando eu clicar nos elementos duvida no html, na pagina.
