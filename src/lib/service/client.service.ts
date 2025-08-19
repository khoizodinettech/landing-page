import { Client } from "../interfaces/client";
import { BaseApiService } from "./baseApi.service";
export class ClientService extends BaseApiService {
  private static instance: ClientService;
  private endpoint = {
    GET_ALL: "client",
  };

  public static getInstance(): ClientService {
    if (!ClientService.instance) {
      ClientService.instance = new ClientService();
    }
    return ClientService.instance;
  }

  public async getAllClients(): Promise<Client[]> {
    return this.get<Client[]>(this.endpoint.GET_ALL);
  }
}
