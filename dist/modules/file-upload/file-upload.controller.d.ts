import { FileUploadService } from './file-upload.service';
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadFile(id: string, file: Express.Multer.File): Promise<{
        message: string;
        filePath: string;
        filename: string;
    }>;
}
