import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getState(): GameState {
    return {
      players: ['Vilperi', 'Maija', 'Konsta', 'Lauri'],
    };
  }
}
