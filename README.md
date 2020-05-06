# Rust Training

## 研究方向
+ rust 
    + [安装](docs/rust/install.md)
    + [编译](docs/rust/rustc.md)
+ wasm 
+ deno  


## vscode 
+ [rust-analyzer](https://rust-analyzer.github.io/)
+ ext:toml
```json 
// setting.json
{
    "rust-analyzer.enableCargoWatchOnStartup": "true", // 打开项目时自动开启 cargo watch
    "rust-analyzer.highlightingOn": true, // 覆盖内建语法高亮
    "rust-analyzer.lruCapacity": 1000, // 分析器最大缓存深度
}
```