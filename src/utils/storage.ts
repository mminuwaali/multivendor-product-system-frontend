export function saveToStorage<T>(key: string, data: T) {
  if (typeof window !== "undefined")
    localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromStorage<T>(key: string): T | [] {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  }
  return [];
}
