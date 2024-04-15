setTimeout(() => {
  console.log("timaot");
}, 0);

const cache = new Map();

function fib(n) {
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      return resolve(n);
    }
    if (cache.has(n)) {
      resolve(cache.get(n));
    }
    setImmediate(() =>
      fib(n - 1).then((fib1) =>
        fib(n - 2).then((fib2) => {
          cache.set(n, fib1, fib2);
          resolve(fib1 + fib2);
        })
      )
    );
  });
}

fib(40).then((res) => console.log(res));