const celsiusInput = document.querySelector('.celChange');
const fahrenheitInput = document.querySelector('.farChange');
const kelvinInput = document.querySelector('.kelChange');

function celChange() {
    let celsiusValue = parseFloat(celsiusInput.value);
    let fahrenheitValue = parseFloat(fahrenheitInput.value);
    let kelvinValue = parseFloat(kelvinInput.value);

    let fahrenheitResult = ((celsiusValue * 9/5) + 32).toFixed(3);
    let kelvinResult = (celsiusValue + 273.15).toFixed(3);

    fahrenheitInput.value = fahrenheitResult;
    kelvinInput.value = kelvinResult;
}

function farChange() {
    let celsiusValue = parseFloat(celsiusInput.value);
    let fahrenheitValue = parseFloat(fahrenheitInput.value);
    let kelvinValue = parseFloat(kelvinInput.value);

    let celsiusResult = ((fahrenheitValue - 32) * 5/9).toFixed(3);
    let kelvinResult = ((fahrenheitValue - 32) * 5/9 + 273.15).toFixed(3);

    celsiusInput.value = celsiusResult;
    kelvinInput.value = kelvinResult;
}

function kelChange() {
    let celsiusValue = parseFloat(celsiusInput.value);
    let fahrenheitValue = parseFloat(fahrenheitInput.value);
    let kelvinValue = parseFloat(kelvinInput.value);

    let celsiusResult = (kelvinValue - 273.15).toFixed(3);
    let fahrenheitResult = ((kelvinValue - 273.15) * 9/5 + 32).toFixed(3);

    celsiusInput.value = celsiusResult;
    fahrenheitInput.value = fahrenheitResult;
}

celsiusInput.addEventListener('change', celChange);
fahrenheitInput.addEventListener('change', farChange);
kelvinInput.addEventListener('change', kelChange);