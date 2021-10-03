import { server } from "./server.ts";
server.run();
console.log(`Server listening: ${server.address}`);