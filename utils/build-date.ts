export function buildDate(value: number): string {
  const date = new Date(value);
  const dateString = date.toISOString().slice(0, 10);
  return dateString.split("-").join("/");
}
