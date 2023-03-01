function pow(x, n) {
  if (n < 1) {
    return "not valid n";
  }

  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(3, 0));
