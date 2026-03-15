import { createClientAsync } from "./generated/hello";
import { HelloService } from "./generated/hello/services/HelloService";

async function main() {
    const client = await createClientAsync("http://localhost:8080/hello?wsdl");

    // Override endpoint to HTTPS directly (avoid HTTP→HTTPS redirect which changes POST to GET)
    client.setEndpoint("http://localhost:8080/hello");

    // soap client exposes methods as client.ServiceName.PortName.method()
    const { HelloPort } = client.HelloService;

    HelloPort.sayHello({name: "foo"}, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(result.message);
    });
}

main().catch(console.error);
