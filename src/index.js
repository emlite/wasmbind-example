import { Emlite } from "emlite";

async function main() {
    const emlite = new Emlite();
    const bytes = await emlite.readFile(new URL("../bin/main.wasm", import.meta.url));
    let wasm = await WebAssembly.compile(bytes);
    let inst = await WebAssembly.instantiate(wasm, {
        "env": emlite.env,
    });
    emlite.setExports(inst.exports);
    inst.exports.main();
}

await main();