const DEFAULT_OPTIONS = {
  length: 12,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true
};

const CHARS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

/**
 * Generates a random password based on the provided options
 * @param {PasswordOptions} options - Password generation options
 * @returns {string} Generated password
 */
function generatePassword(options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  
  let chars = '';
  if (config.includeUppercase) chars += CHARS.uppercase;
  if (config.includeLowercase) chars += CHARS.lowercase;
  if (config.includeNumbers) chars += CHARS.numbers;
  if (config.includeSymbols) chars += CHARS.symbols;

  if (chars.length === 0) {
    throw new Error('At least one character type must be selected');
  }

  let password = '';
  for (let i = 0; i < config.length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}


function checkPasswordStrength(password) {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);
  
  const varietyScore = [hasUppercase, hasLowercase, hasNumbers, hasSymbols]
    .filter(Boolean).length;

  if (password.length < 8) return 'weak';
  if (password.length >= 12 && varietyScore >= 3) return 'strong';
  return 'medium';
}

module.exports = {
  generatePassword,
  checkPasswordStrength
};