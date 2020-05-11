const js = import("./node_modules/@bennyshi/hello-wasm-fibonacci/hello_wasm_fibonacci.js");
js.then(js => {
  const wasmStart = new Date()
  const i =js.get_fibonacci(40)
  const wasmEnd = new Date()
  const time = wasmEnd - wasmStart
  console.log('Rust WASM斐波那契数列第40项计算消耗时间：',`${time}ms`)
  console.log(i)
});


// function fib(n){
//   function fib_(n,a,b){
//       if(n==0)  return a
//       else return fib_(n-1,b,a+b)
//   }
//   return fib_(n,0,1)
// }

function fib(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib(n-1) + fib(n-2)
}

const jsStart = new Date()
const i =fib(40)
const jsEnd = new Date()
const time = jsEnd - jsStart
console.log('JS斐波那契数列第40项计算消耗时间：',`${time}ms`)
console.log(i)

WebAssembly.instantiateStreaming(fetch("ts-wasm/fib-ts.wasm")).then(result => {
  const exports = result.instance.exports;
  const jsStart = new Date()
  const i =exports.f(40)
  const jsEnd = new Date()
  const time = jsEnd - jsStart
  console.log('TS WASM斐波那契数列第40项计算消耗时间：',`${time}ms`)
  console.log(i)
}).catch(console.error);

