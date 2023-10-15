import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  getData(): string {
    return 'Shared data';
  }
}