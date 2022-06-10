import { defineConfig } from "tsup";

// 公共配置
const baseConfig = defineConfig({
    // 生成类型声明文件 index.d.ts
    dts: "./src/index.ts",
    // 打包类型 EsModule
    format: ["esm"],
    // 生成sourceMap
    sourcemap: "inline",
    // 为不同模块类型的文件，输出不同的文件夹(cjs/esm)
    legacyOutput: true,
    // 内置模块,不加入打包，一般为peerDependencies
    external: ["react", "react-dom"],
});

export default defineConfig({
    ...baseConfig,
    // 需要打包的入口文件
    entry: ["./src/index.ts"],
    // 是否格式化代码，压缩打包尺寸(生产环境下弃用)
    minify: true,
    // 监听代码变动，变动后进行打包
});
