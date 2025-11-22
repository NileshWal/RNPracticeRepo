const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateLogin = (
  email: string,
  password: string,
): string | null => {
  if (!email.trim()) return 'Please enter your email';
  if (!validateEmail(email)) return 'Enter a valid email address';
  if (!password.trim()) return 'Please enter your password';
  if (password.length < 6) return 'Password must be at least 6 characters';

  return null;
};
