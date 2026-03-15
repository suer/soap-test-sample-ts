import * as http from "http";
import * as fs from "fs";
import * as path from "path";
import * as soap from "soap";

const wsdl = fs.readFileSync(path.join(__dirname, "hello.wsdl"), "utf8");

const service = {
  HelloService: {
    HelloPort: {
      sayHello: (args: { name: string }) => {
        return { message: `Hello, ${args.name}!` };
      },
    },
  },
};

const server = http.createServer((req, res) => {
  res.end("SOAP server is running");
});

server.listen(8080, () => {
  soap.listen(server, "/hello", service, wsdl, () => {
    console.log("SOAP server listening at http://localhost:8080/hello");
    console.log("WSDL available at http://localhost:8080/hello?wsdl");
  });
});
