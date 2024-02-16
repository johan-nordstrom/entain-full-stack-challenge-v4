import * as schema from "./schema";
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
@Injectable()
export class DBConfigService {
    constructor(private configService: ConfigService) {
    }
    create = () => {
        return {
            postgres: {
                url: this.configService.get<string>('connectionString'),
            },
            config: { schema: { ...schema } },
        };
    };
}