function SomarDoisNumeros (valor1, valor2 ){
    const resultado = valor1 + valor2;
    return resultado; 

}
    

function CalcularMediaDeDoisNumeros (valor1,valor2){
     const resultadoDaSomaDeDoisValores = SomarDoisNumeros ( valor1, valor2);
     const resultadoDaMediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;
     return resultadoDaMediaDeDoisValores; 


}

module.exports = {
    SomarDoisNumeros
}

