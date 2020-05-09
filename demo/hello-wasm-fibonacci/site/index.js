const js = import("./node_modules/@bennyshi/hello-wasm-fibonacci/hello_wasm_fibonacci.js");
js.then(js => {
  js.get_fibonacci(10)
});