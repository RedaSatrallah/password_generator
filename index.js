const { generatePassword, checkPasswordStrength } = require('./src/passwordGenerator');

// Example usage
const password = generatePassword({
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true
});

console.log('Generated Password:', password);
console.log('Password Strength:', checkPasswordStrength(password));

// Generate different types of passwords
console.log('\nDifferent password examples:');

const numbersOnly = generatePassword({
  length: 8,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: true,
  includeSymbols: false
});
console.log('Numbers only:', numbersOnly);

const noSymbols = generatePassword({
  length: 12,
  includeSymbols: false
});
console.log('No symbols:', noSymbols);

const strongPassword = generatePassword({
  length: 16
});
console.log('Strong password:', strongPassword);