# SOAP Client and Test Sample

## install dependencies

```bash
npm i
```

## generate client code

```bash
npx wsdl-tsc client --wsdl-source mock-server/hello.wsdl --client-dir ./generated/hello --import-extensions bare
```

## run mock server

```bash
npx tsx mock-server/server.ts
```

## run client program sample

```bash
npx tsx index.ts
```

## run test samples

```bash
npm run test
```
