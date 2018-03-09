
var countPrimes = (function() {
  let cacheCount = {};

  function c (n) {
    let counter = 0;
    let num = 1;
  
    if (cacheCount[n]) {
      return cacheCount[n];
    }
    
    for (let i = n - 1; i > 0; i--) {
      if (cacheCount[i]) {
        counter = cacheCount[i];
        num = i;
        break;
      }
    }
  
    for (let i = num + 1; i < n; i++) {
      if (!cacheCount[i]) {
        cacheCount[i] = counter;
      }
      if (isPrime(i)) {
        counter++;
      }
    }
  
    cacheCount[n] = counter;
    return counter;
  }

  return c;
})();

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  
  return true;
} 

console.log(countPrimes(4));
console.log(countPrimes(5));


//count primes using sieve 
const primeSieve = (n) => {
  let nums = Array(n).fill(true);
  let count = 0; 

  for (let i = 2; i < n; i++) {
    if (nums[i]) {
      count++;
    }

    for (let j = i * i; j < n; j += i) {
      nums[j] = false;
    }
  }

  return count;
}

console.log(primeSieve(10));