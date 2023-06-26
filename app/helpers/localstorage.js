export function getLocalStorage(list) {
  return localStorage.getItem(list)
    ? JSON.parse(localStorage.getItem(list))
    : [];
}
