function generateFibonacci(n) {
  // Gère les cas où n est inférieur ou égal à 0
  if (n <= 0) {
    return [];
  }

  // Initialise la séquence de Fibonacci avec les deux premiers termes
  const fibonacciSequence = [0, 1];

  // Si n vaut 1, renvoie uniquement le premier terme
  if (n === 1) {
    return [0];
  }

  // Génère la séquence de Fibonacci jusqu'au n-ième terme
  for (let i = 2; i < n; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }

  return fibonacciSequence;
}

// Example usage:
console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
