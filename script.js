const form = document.getElementById('form');
form.addEventListener('submit', calcular);

function calcular (e) {
    e.preventDefault();

    let valueAlcool = document.getElementById('alcool').value;
    let valueGasolina = document.getElementById('gasolina').value;
    let division = valueAlcool / valueGasolina;

    let result = document.getElementById('result');
    let textResult = document.getElementById('textResult');
    let textAlcool = document.getElementById('textAlcool');
    let textGasolina = document.getElementById('textGasolina');

    if(division <= 0.7) {
        textResult.innerHTML = 'Compensa usar Álcool';
    } else {
        textResult.innerHTML = 'Compensa usar Gasolina';
    }

    result.classList.remove('noResult');

    textAlcool.innerHTML = `Álcool: R$ ${valueAlcool}`;
    textGasolina.innerHTML = `Gasolina: R$ ${valueGasolina}`;
};