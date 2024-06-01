type StorageType = "local" | "session";

export function parse<T>(key: string, storage: StorageType): T | null {
  let data = null;

  if (storage === "local") {
    data = localStorage.getItem(key);
  } else data = sessionStorage.getItem(key);
  if (!data) return null;

  return JSON.parse(data);
}

export function stringify<T>(data: T): string {
  return JSON.stringify(data);
}
