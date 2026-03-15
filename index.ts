import { HelloService } from "./generated/hello/client";

async function main() {
  const client = new HelloService({ source: "http://localhost:8080/hello?wsdl" });
  const result = await client.sayHello({ name: "foo" });
  console.log(result.response.message);
}

main().catch(console.error);
