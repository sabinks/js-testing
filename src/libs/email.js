import delay from 'delay';

export function isValidEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailPattern.test(email);
}

export async function sendEmail(to, message) {
  await delay(3000);
}
