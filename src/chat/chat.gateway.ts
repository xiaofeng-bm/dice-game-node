import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { ChatService } from "./chat.service";
import { Server, Socket } from 'socket.io';


@WebSocketGateway({
  cors: {
    origin: '*',
  }
})
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}



  @SubscribeMessage("joinRoom")
  joinRoom(client: Socket, payload: any) {

  }
}