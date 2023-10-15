import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SharedService } from './shared/shared.service/shared.service.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly sharedService: SharedService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  getData(): string {
    return this.sharedService.getData();
  }

}
