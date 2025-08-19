import { Repository } from 'typeorm';
import { CustomerFeedback } from '../custom-land-product/entities/customerFeedbackSlider.entity';
export declare class FileUploadService {
    private readonly customerFeedback;
    constructor(customerFeedback: Repository<CustomerFeedback>);
    handleFileUpload(file: Express.Multer.File, id: string): Promise<{
        message: string;
        filePath: string;
        filename: string;
    }>;
}
