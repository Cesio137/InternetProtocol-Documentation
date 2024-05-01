import { RawData, WebSocket, WebSocketServer } from 'ws';
import { client_info, players_info } from './types/websocket_types';

//URL -> ws://localhost:3000
const WS_PORT: number = 3000;
const wss: WebSocketServer = new WebSocketServer( { port: WS_PORT } );
const clients: Map<WebSocket, number> = new Map();
let num_clients:number = 0;
let client_id:number = 0;


wss.on('connection', function connection(ws:WebSocket) {
  ws.on('error', console.error);
  clients.set(ws, client_id);
  ParseClientID(ws);
  client_id += 1;
  num_clients = clients.size;
  console.log('connected');
  ParsePlayersConnected(ws);
  

  ws.on('message', function message(data) {
        console.log('received: %s', data);
        HandlerMessage(ws, data);
  });

  ws.on('close', function close() {
    const disconnected_client: client_info = {event:'on_client_disconnected', id:clients.get(ws)!};
    clients.delete(ws);
    num_clients = clients.size;
    clients.forEach( (obj, websocket) => {
      websocket.send(JSON.stringify(disconnected_client));
    });
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
      clients.forEach( (obj, ws) => {
          ws.send(JSON.stringify(JsonObject));
      });
    }
}

function ParseClientID(ws:WebSocket)
{
    const clientID: number = clients.get(ws)!;
    const clientRequestID: client_info = {event: 'client_id', id: clientID};
    const JsonRequest = JSON.stringify(clientRequestID);
    ws.send(JsonRequest);
}

function ParsePlayersConnected(ws:WebSocket)
{
    const playerinfo:number[] = [];
    clients.forEach( (val, websocket) => {
      if (ws !== websocket)
        playerinfo.push(val);
    });
    const clients_info: players_info = { event: 'clients_connected', clients_id: playerinfo };
    const JsonRequest = JSON.stringify(clients_info);
    ws.send(JsonRequest);
}