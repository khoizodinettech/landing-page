import axios from "axios";
import { BaseApiService } from "./baseApi.service";

export class ImageService extends BaseApiService {
  private static instance: ImageService;
  private endpoint = {
    GET_IMAGE: "preview-image",
  };

  public static getInstance(): ImageService {
    if (!ImageService.instance) {
      ImageService.instance = new ImageService();
    }
    return ImageService.instance;
  }

  public async getImage(filename: string): Promise<ArrayBuffer> {
    const imageEndpoint = `${this.endpoint.GET_IMAGE}/${filename}`;
    return this.getBinary(imageEndpoint);
  }
}
