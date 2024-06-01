export function buildTime(value: number): string {
  const date = new Date(value);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}
