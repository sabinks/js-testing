import delay from 'delay';

export async function charge(creditInfoCard, amount) {
  await delay(3000);
  return { status: 'success' };
}
