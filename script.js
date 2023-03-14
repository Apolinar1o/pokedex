function pesquisa_poke() {
    let x = document.getElementsByClassName("lista")
    let input = document.getElementById("pesquisa").value
    input = input.toLowerCase()
    for (let i = 0; i <x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none"
        } else {
            x[i].style.display = "list-item"
        }
    }
}

function adicionarComportamentoClique() {
  var secoes = document.querySelectorAll('.conteiner');
  secoes.forEach(function(secao) {
    secao.addEventListener('click', function() {
      var conteudos = secao.querySelectorAll('.conteudo');
      var frente = secao.querySelectorAll('.frente')
      
      frente.forEach(function(frente) {
        if (frente.style.display == "none") {
          frente.style.display = 'block'
          console.log('3')
        } else {
          frente.style.display = "none"
          console.log('4')
        }
      })
      conteudos.forEach(function(conteudo) {
        if (conteudo.style.display == "block") {
          console.log('1')
          conteudo.style.display = "none"
          
      } else {
        conteudo.style.display = "block"
        console.log('2')
      }
      });
 
    });

  });
}

adicionarComportamentoClique();