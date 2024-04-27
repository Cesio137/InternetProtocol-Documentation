import { RawData, WebSocket, WebSocketServer } from 'ws';
import { client_info, players_info } from './types/websocket_types';

//URL -> ws://localhost:3000
const WS_PORT: number = 3000;
const wss: WebSocketServer = new WebSocketServer( { port: WS_PORT } );
const clients: Map<WebSocket, number> = new Map();
let num_clients: number = 0;
let client_id: number = 0;

wss.on('connection', function connection(ws:WebSocket) {
  ws.on('error', console.error);
  clients.set(ws, client_id);
  num_clients = clients.size;
  client_id += 1
  console.log('connected');

  ws.on('message', function message(data) {
        HandlerMessage(ws, data);
  });

  ws.on('close', function close() {
    clients.delete(ws);
    num_clients = clients.size;
    console.log('closed!');
  });

});

function isJson(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

function HandlerMessage(ws:WebSocket, data:RawData)
{
    if ( isJson(data.toString()) )
    {
      const JsonObject:JSON = JSON.parse(data.toString());
      clients.forEach( (id, websocket) => {
          if (ws !== websocket)
            websocket.send(JSON.stringify(JsonObject));
      });
    }
}