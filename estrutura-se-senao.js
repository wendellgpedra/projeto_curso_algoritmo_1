   function acaoBotao(){
        
        var valor01, valor02, resultado, operacao

        valor01 = prompt("Digite o primeiro valor: ")
        operacao = prompt("Digite operacao, Ex. +, -, *, /: ")
        valor02 = prompt("Digite o segundo valor: ")
    
        if (operacao == "+" ){
            resultado = parseInt(valor01) + parseInt(valor02)
        }else if(operacao == "-"){
            resultado = parseInt(valor01) - parseInt(valor02)
        }else if(operacao == "*"){
            resultado = parseInt(valor01) * parseInt(valor02)
        }else if(operacao == "/"){
            resultado = parseInt(valor01) / parseInt(valor02)
        }else resultado = 0
        
        document.getElementById("paragrafo").innerText =  "Resultado do calculo é: " + resultado
   }

