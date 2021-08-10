function palindrome(str) {
  let original = str
    .toLowerCase()
    .split(/\W+/)
    .join("")
    .replace("_", "");
  let reverse = original
    .split("")
    .reverse()
    .join("");
  for (let i = 0; i < str.length; i++) {
    if (reverse[i] != original[i]) {
      return false;
    }
  }
  return true;
}

palindrome("_eye");