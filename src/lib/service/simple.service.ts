import { Simple } from "../interfaces/simple";
import { BaseApiService } from "./baseApi.service";

export class SimpleService extends BaseApiService {
  private static instance: SimpleService;
  private endpoint = {
    GET_ALL: "simple",
  };
  public static getinstance(): SimpleService {
    if (!SimpleService.instance) {
      SimpleService.instance = new SimpleService();
    }
    return SimpleService.instance;
  }

  public async getAllSimple(): Promise<Simple[]> {
    return this.get<Simple[]>(this.endpoint.GET_ALL);
  }
}
