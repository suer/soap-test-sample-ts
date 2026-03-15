# SOAP Client and Test Sample

## install dependencies

```bash
npm i
```

## generate client code

```bash
npx wsdl-tsclient mock-server/hello.wsdl -o generated
```

## run mock server

```bash
npx ts-node mock-server/server.ts
```

## run client program sample

```bash
npx ts-node index.ts
```

## run test samples

```bash
npm run test
```
