function calcular(tipo, valor){
        
    if(tipo === 'acao'){

      if(valor === 'c'){
        
        document.getElementById('resultado').value = ''
      }

      if (valor === '+'|| valor === '-' || valor === '*' || valor === '/' || valor === '.'){
          document.getElementById('resultado').value += valor
      }

    }else if(tipo === 'valor'){

      document.getElementById('resultado').value += valor
    }
    if(valor === "="){
      //eval torna a operação nativa em javascript, fazendo a string virar number
     var valor_campo = eval(document.getElementById('resultado').value)

     document.getElementById('resultado').value = valor_campo
    }
  }