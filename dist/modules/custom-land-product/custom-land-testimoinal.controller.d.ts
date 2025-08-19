import { CustomtestimonialService } from './custom-land-testimoinal.service';
import { CreateDtoFeedback } from './dto/create-Feedback.dto';
import { CustomerFeedback } from './entities/customerFeedbackSlider.entity';
export declare class CustomTestimoinalController {
    private readonly customtestimonialService;
    constructor(customtestimonialService: CustomtestimonialService);
    createProductSlider(createDtoFeedback: CreateDtoFeedback): Promise<{
        message: string;
    }>;
    getAllSlider(): Promise<CustomerFeedback[]>;
    findOne(id: string): Promise<CustomerFeedback | null>;
    update(id: string, createDtoFeedback: CreateDtoFeedback): Promise<CustomerFeedback>;
    delete(id: string): Promise<void>;
}
