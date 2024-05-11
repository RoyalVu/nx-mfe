export async function delay(time = 1500) {
  await new Promise((resolve) => setTimeout(resolve, time));
}
