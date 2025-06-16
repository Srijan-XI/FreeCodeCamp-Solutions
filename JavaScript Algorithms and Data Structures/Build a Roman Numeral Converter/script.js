function toRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];
  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }
  return result;
}

const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  let value = input.value;
  if (value === "" || isNaN(value)) {
    output.textContent = "Please enter a valid number";
    output.style.color = "#ff595e";
    return;
  }
  value = Number(value);
  if (value < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.style.color = "#ff595e";
    return;
  }
  if (value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.style.color = "#ff595e";
    return;
  }
  output.textContent = toRoman(value);
  output.style.color = "#72ef36";
});

// Optional: Enter key support
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
});