export function getLocaleCode() {
  if (typeof navigator === "undefined") return "en-us";
  if (navigator.languages !== undefined) return navigator.languages[0];
  return navigator.language;
}
