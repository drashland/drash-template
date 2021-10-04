import { Drash } from "../deps.ts";

export class HomeResource extends Drash.Resource {
  public paths = ["/", "/home"];

  public GET(request: Drash.Request, response: Drash.Response) {
    console.log(`${request.method} ${request.url}`)
    response.json({
      success: true,
      message: "GET",
    });
  }

  public POST(request: Drash.Request, response: Drash.Response) {
    console.log(`${request.method} ${request.url}`)
    response.json({
      success: true,
      message: "POST",
    });
  }

  public DELETE(request: Drash.Request, response: Drash.Response) {
    console.log(`${request.method} ${request.url}`)
    response.json({
      success: true,
      message: "DELETE",
    });
  }

  public PUT(request: Drash.Request, response: Drash.Response) {
    console.log(`${request.method} ${request.url}`)
    response.json({
      success: true,
      message: "PUT",
    });
  }
}
