import { Drash, PaladinService } from "./deps.ts";
import { HomeResource } from "./resources/home_resource.ts";

export const server = new Drash.Server({
  hostname: "localhost",
  port: 1667,
  protocol: "http",
  resources: [
    HomeResource,
  ],
  services: [new PaladinService()],
});
