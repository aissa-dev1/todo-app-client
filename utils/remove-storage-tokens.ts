export function removeStorageTokens() {
  localStorage.removeItem("refresh_token");
  sessionStorage.removeItem("access_token");
}
