import { CustomLandSimpleService } from './custom-land-simple.service';
import { CreateDtoLandingPage } from './dto/create-landing-page';
import { LandingPage } from './entities/testimonial.entity';
export declare class CustomLandSimpleController {
    private readonly customLandSimpleService;
    constructor(customLandSimpleService: CustomLandSimpleService);
    createProduct(createDtoProduct: CreateDtoLandingPage): Promise<{
        message: string;
    }>;
    getAllProduct(): Promise<LandingPage[]>;
    findOne(id: string): Promise<LandingPage | null>;
    update(id: string, createDtoProduct: CreateDtoLandingPage): Promise<LandingPage>;
    delete(id: string): Promise<void>;
}
