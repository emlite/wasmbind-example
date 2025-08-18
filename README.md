# wasmbind-example

This is an example C++ repo which shows how you can use wasmbind to target web API via wasm32-freestanding, wasmbind and emlite. It also demonstrates how this can be automated using webpack for bundling and http-server for serving.

Do note that using npm is not strictly necessary, however it simplifies bundling emlite and managing its version.

## Usage
```bash
git clone https://github.com/emlite/wasmbind-example
cd wasmbind-example
npm i
npm run cmake:config
npm run cmake:build
npm run pack
npm run serve
```

The contents of these commands can be found in the package.json scripts entry.

