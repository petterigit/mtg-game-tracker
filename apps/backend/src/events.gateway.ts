import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173',
  },
})
export class EventsGateway {
  @SubscribeMessage('gameState')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): any {
    return {
      state: {
        players: ['Vilperi', 'Maija', 'Konsta', 'Lauri'],
      },
    };
  }
}
