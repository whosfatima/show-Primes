
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function showPrimes() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result = [];

  if (num1 >= num2) {
    document.getElementById("result").innerText = "First number must be smaller.";
    return;
  }

  for (let i = num1 + 1; i < num2; i++) {
    if (isPrime(i)) result.push(i);
  }

  document.getElementById("result").innerText =
    result.length > 0 ? "Prime numbers: " + result.join(", ") : "No prime numbers found.";
}
