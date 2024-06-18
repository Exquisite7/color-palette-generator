function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function generatePalette() {
    const paletteDiv = document.querySelector('.palette');
    paletteDiv.innerHTML = '';

    const numColors = document.getElementById('numColors').value;
    const colorFormat = document.getElementById('colorFormat').value;
    const colorScheme = document.getElementById('colorScheme').value;

    let colors = [];

    if (colorScheme === 'random') {
        for (let i = 0; i < numColors; i++) {
            colors.push(getRandomColor());
        }
    } else if (colorScheme === 'monochrome') {

        const baseColor = getRandomColor();

        for (let i = 0; i < numColors; i++) {
            colors.push(baseColor);
        }
    } 

    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');

        const colorText = document.createElement('span')
        colorText.textContent = color;
        colorBox.appendChild(colorText);

        if (colorFormat === 'hex') {
            colorBox.textContent = color;
        } else {
            colorBox.textContent = '';
        }

        colorBox.style.backgroundColor = color;
        paletteDiv.appendChild(colorBox);
    });
}


document.getElementById('generateButton').addEventListener('click', generatePalette);


generatePalette();