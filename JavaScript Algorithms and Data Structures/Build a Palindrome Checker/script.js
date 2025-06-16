// Palindrome checking function
function isPalindrome(str) {
  // Remove all non-alphanumeric characters and make lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Compare with its reverse
  return cleaned === cleaned.split('').reverse().join('');
}

// DOM Elements
const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const value = input.value;
  if (!value) {
    alert('Please input a value.');
    return;
  }
  if (isPalindrome(value)) {
    result.textContent = `${value} is a palindrome.`;
    result.style.color = '#72ef36';
  } else {
    result.textContent = `${value} is not a palindrome.`;
    result.style.color = '#ff595e';
  }
});

// Optional: Allow pressing Enter to check
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
});