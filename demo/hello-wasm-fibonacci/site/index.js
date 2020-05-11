const js = import("./node_modules/@bennyshi/hello-wasm-fibonacci/hello_wasm_fibonacci.js");
js.then(js => {
  const wasmStart = new Date()
  const i =js.get_fibonacci(50)
  const wasmEnd = new Date()
  const time = wasmEnd - wasmStart
  console.log('WASM斐波那契数列计算消耗时间：',`${time}ms`)
  console.log(i)
});

const fibonacci = (n) => {
  if (n <= 1) return 1;
  return  fibonacci(n - 1) + fibonacci(n - 2);
}

const jsStart = new Date()
const i =fibonacci(50)
const jsEnd = new Date()
const time = jsEnd - jsStart
console.log('JS斐波那契数列计算消耗时间：',`${time}ms`)
console.log(i)

