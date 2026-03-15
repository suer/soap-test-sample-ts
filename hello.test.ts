import { describe, it, expect } from "vitest";
import { HelloService } from "./generated/hello/client";

describe("HelloService", () => {
  it("sayHello が正しいメッセージを返す", async () => {
    const client = new HelloService({ source: "http://localhost:8080/hello?wsdl" });
    const result = await client.sayHello({ name: "foo" });

    expect(result.response.message).toBe("Hello, foo!");
  });
});
