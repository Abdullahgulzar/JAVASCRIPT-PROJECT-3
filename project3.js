document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();

    const clear = document.querySelector('#clear')

    // const clear = document.querySelector('.clear');
    clear.addEventListener('click', function () {
        document.querySelector('#height').value = '';
        document.querySelector('#weight').value = '';
        document.querySelector('#result').innerHTML = '';
    });
    const ht = parseFloat(document.querySelector('#height').value);
    const wt = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(ht) || ht <= 0) {
        result.innerHTML = "Please provide a valid height";
    } else if (isNaN(wt) || wt <= 0) {
        result.innerHTML = "Please provide a valid weight";
    } else {
        const bmi = (wt / ((ht / 100) ** 2)).toFixed(2);
        let bmiCategory = '';

        if (bmi <= 18.6) {
            bmiCategory = 'Underweight';
        } else if (bmi > 18.6 && bmi < 24.9) {
            bmiCategory = 'Normal range';
        } else {
            bmiCategory = 'Overweight';
        }

        result.innerHTML = `<span>Your BMI is: ${bmi} kg/m<sup>2</sup> (${bmiCategory})</span>`;
    }
});