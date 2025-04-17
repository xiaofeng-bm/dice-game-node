import { Injectable } from '@nestjs/common';
import { WebSocketServer } from "@nestjs/websockets";

import { Server } from 'socket.io';

interface CreateRoomPayload {
  userId: string;
  roomName: string;
}

interface JoinRoomPayload {
  userId: string;
  roomId: string;
}

interface SendMessagePayload {
  userId: string;
  roomId: string;
  message: {
    type: 'dice';
    content: any;
  }
}


@Injectable()
export class ChatService {
  @WebSocketServer() server: Server;
  
  createRoom(payload: CreateRoomPayload) {
    
  }
}
