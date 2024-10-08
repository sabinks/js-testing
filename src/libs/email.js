import delay from 'delay';

export function isValidEmail(email) {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailPattern.test(email);
}

export async function sendEmail(to, message) {
  await delay(3000);
}
