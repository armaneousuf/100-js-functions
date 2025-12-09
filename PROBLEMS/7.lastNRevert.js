/* Write a function named lastNRevert that receives 2 parameters:

a string named text
a number - n
and returns the last n characters of text but in reverse order. */

function lastNRevert(text, n) {
  const slice_ = text.split("").slice(-n).join("");
  const _slice = slice_.split("").reverse().join("");
  return _slice;
}

console.log(lastNRevert("T-shirts", 4));
export { lastNRevert };
