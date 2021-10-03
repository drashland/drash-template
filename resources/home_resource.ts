import { Drash } from "../deps.ts";

export class HomeResource extends Drash.Resource {
  public paths = ["/", "/home"];

  public GET(request: Drash.Request, response: Drash.Response) {
    // response.file("./views/index.html");
    // return
    response.json({
        success: true,
        message: "GET"
    })
  }

  public POST(request: Drash.Request, response: Drash.Response) {
    response.json({
        success: true,
        message: "POST"
    })
  }

  public DELETE(request: Drash.Request, response: Drash.Response) {
    response.json({
        success: true,
        message: "DELETE"
    })
  }

  public PUT(request: Drash.Request, response: Drash.Response) {
    response.json({
        success: true,
        message: "PUT"
    })
  }
}