const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require ('chai');

describe('Teste da Funcao de Soma', function () {
    it ('A funcao deve ser capaz de somar dois numeros positivos', function (){
        // Coleta o resultado da função
        const resultadoDaSomaDeDoisValores = somarDoisNumeros(5,3);

        // Compara o resultado com o vaor que você espera
        expect (resultadoDaSomaDeDoisValores).to.equal(8);
    });

    it('A funcao deve ser capaz de somar um numero positivo e um negativo', function(){
        // Coleta o resultado da função 
        const resultadoDaSomaDeDoisValores = somarDoisNumeros(50,-15);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSomaDeDoisValores).to.equal(35);
    });
});
