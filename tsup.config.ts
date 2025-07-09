import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["iife"],
    globalName: "DocExecCommand",
    dts: false,
    outDir: "dist/iife",
    outExtension() {
        return { js: ".js" };
    },
});
