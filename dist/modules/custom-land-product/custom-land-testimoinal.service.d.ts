import { Repository } from 'typeorm';
import { CustomerFeedback } from './entities/customerFeedbackSlider.entity';
import { CreateDtoFeedback } from './dto/create-Feedback.dto';
export declare class CustomtestimonialService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<CustomerFeedback>);
    createSlider(createDtoFeedback: CreateDtoFeedback): Promise<CustomerFeedback>;
    findAllSlider(): Promise<CustomerFeedback[]>;
    findOnebyId(id: string): Promise<CustomerFeedback | null>;
    update(id: string, createDtoFeedback: CreateDtoFeedback): Promise<CustomerFeedback>;
    delete(id: string): Promise<void>;
}
