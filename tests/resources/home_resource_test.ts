import { assertEquals } from "../deps.ts";
import { server } from "../../server.ts";

Deno.test("HomeResource - GET /", async () => {
  // Start the server
  server.run();

  // Fetch a response
  const response = await fetch("http://localhost:1557", {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });

  // Make assertions
  assertEquals(response.status, 200);
  assertEquals(
    await response.json(),
    {
      success: true,
      message: "GET",
    },
  );

  // Stop the server
  await server.close();
});

Deno.test("HomeResource - POST /", async () => {
  // Start the server
  server.run();

  // Fetch a response
  const response = await fetch("http://localhost:1557", {
    method: "POST",
  });

  // Make assertions
  assertEquals(response.status, 200);
  assertEquals(
    await response.json(),
    {
      success: true,
      message: "POST",
    },
  );

  // Stop the server
  await server.close();
});

Deno.test("HomeResource - PUT /", async () => {
  // Start the server
  server.run();

  // Fetch a response
  const response = await fetch("http://localhost:1557", {
    method: "PUT",
  });

  // Make assertions
  assertEquals(response.status, 200);
  assertEquals(
    await response.json(),
    {
      success: true,
      message: "PUT",
    },
  );

  // Stop the server
  await server.close();
});

Deno.test("HomeResource - DELETE /", async () => {
  // Start the server
  server.run();

  // Fetch a response
  const response = await fetch("http://localhost:1557", {
    method: "DELETE",
  });

  // Make assertions
  assertEquals(response.status, 200);
  assertEquals(
    await response.json(),
    {
      success: true,
      message: "DELETE",
    },
  );

  // Stop the server
  await server.close();
});
