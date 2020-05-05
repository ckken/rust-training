# 环境构建  
[官方地址](https://www.rust-lang.org/zh-CN/)

+ Rustup：Rust安装器和版本管理工具
    + 安装指令 `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
    + You can uninstall at any time with `rustup self uninstall` and
these changes will be reverted.

+ Cargo：Rust 的构建工具和包管理器
    + cargo build 可以构建项目
    + cargo run 可以运行项目
    + cargo test 可以测试项目
    + cargo doc 可以为项目构建文档
    + cargo publish 可以将库发布到 [crates.io](https://crates.io/)。
    + `cargo --version` 获取版本信息

+ 项目管理
    + 创建项目 `cargo new hello-rust`    
        + `Cargo.toml` Rust 的清单文件。其中包含了项目的元数据和依赖库。
        + `src/main.rs` 为编写应用代码的地方。
    + 启动项目 `cargo run`
    + 安装依赖 `cargo build`
    
    ```rust
    // Cargo.toml 加入依赖 并且执行 cargo build
    [dependencies]
    ferris-says = "0.1"
    // src/main.rc 加入依赖 
    use ferris_says::say;
    ```