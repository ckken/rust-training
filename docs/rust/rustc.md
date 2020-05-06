# 模块
+ `cargo build --release` 全局编译  
+ `rustc main.rs` 局部编译

```rust
//hello.rs
fn main() {
    println!("Hello, world!");
}
//$ rustc hello.rs
//$ ./hello # on a *NIX
//$ .\hello.exe # on Windows

//main.rs
mod foo;

fn main() {
    foo::hello();
}

//foo.rs
pub fn hello() {
    println!("Hello, world!");
}

// rustc main.rs
```