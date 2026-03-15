import { describe, it, expect } from "vitest";
import { promisify } from "util";
import { createClientAsync } from "./generated/hello";
import { HelloService } from "./generated/hello/services/HelloService";

describe("HelloService", () => {
    it("sayHello が正しいメッセージを返す", async () => {
        const client = await createClientAsync("http://localhost:8080/hello?wsdl");
        client.setEndpoint("http://localhost:8080/hello");

        const { HelloPort } = (client as unknown as { HelloService: HelloService }).HelloService;
        const args = {name: "foo"};
        const result = await promisify(HelloPort.sayHello.bind(HelloPort))(args);

        expect(result.message).toBe("Hello, foo!");

    });
});
