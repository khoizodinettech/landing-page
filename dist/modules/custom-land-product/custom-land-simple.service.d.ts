import { Repository } from 'typeorm';
import { LandingPage } from './entities/testimonial.entity';
import { CreateDtoLandingPage } from './dto/create-landing-page';
export declare class CustomLandSimpleService {
    private readonly simpleRepository;
    constructor(simpleRepository: Repository<LandingPage>);
    create(createDtoLandingPage: CreateDtoLandingPage): Promise<LandingPage>;
    findAll(): Promise<LandingPage[]>;
    findOnebyId(id: string): Promise<LandingPage | null>;
    update(id: string, createDtoLandingPage: CreateDtoLandingPage): Promise<LandingPage>;
    delete(id: string): Promise<void>;
}
