const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// US phone number validation function
function isValidUSPhone(str) {
  str = str.trim();

  // Main regex for valid US numbers
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  // Check for invalid country code (must be 1 if present)
  if (/^([0-9]+)\s/.test(str) || /^([0-9]+)\(/.test(str)) {
    const match = str.match(/^([0-9]+)/);
    if (match && match[1] !== '1') {
      return false;
    }
  }
  if (/^-\d/.test(str)) return false;

  // Parentheses check: must be paired and only around area code
  if (str.includes('(') || str.includes(')')) {
    // Must be exactly one opening and one closing, and in the right place
    if (!/^(\d*\s?)?\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/.test(str) &&
        !/^(\d*\s?)?\(\d{3}\)\d{3}-\d{4}$/.test(str) &&
        !/^(\d*\s?)?\(\d{3}\)\d{3}\d{4}$/.test(str) &&
        !/^(\d*\s?)?\(\d{3}\)[\s-]?\d{3}-\d{4}$/.test(str) &&
        !/^(\d*\s?)?\(\d{3}\)\s\d{3}-\d{4}$/.test(str)) {
      return false;
    }
    // Parentheses must wrap exactly 3 digits
    if (!/\(\d{3}\)/.test(str)) return false;
    // No extra parentheses
    if ((str.match(/\(/g) || []).length !== (str.match(/\)/g) || []).length) return false;
  }

  // Must match the main regex
  return regex.test(str);
}

checkBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) {
    alert('Please provide a phone number');
    return;
  }
  // Clear previous classes
  resultsDiv.classList.remove('valid', 'invalid');

  // Check for negative or zero/invalid country code at the start
  if (/^-\d|\b0\b|\b2\b|\b10\b|\b11\b/.test(value.split(' ')[0])) {
    resultsDiv.textContent = `Invalid US number: ${value}`;
    resultsDiv.classList.add('invalid');
    return;
  }

  if (isValidUSPhone(value)) {
    resultsDiv.textContent = `Valid US number: ${value}`;
    resultsDiv.classList.add('valid');
  } else {
    resultsDiv.textContent = `Invalid US number: ${value}`;
    resultsDiv.classList.add('invalid');
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
  resultsDiv.classList.remove('valid', 'invalid');
});

// Optional: Enter key support
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    checkBtn.click();
  }
});