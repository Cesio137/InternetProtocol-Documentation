# Websocket

## Create a websocket object

* 1- Right click in any blueprint graph to open search box.
* 2- Search by `InternetProtocolSubsystem`.
* 3- Search by `CreateWebsocket` from `InternetProtocolSubsystem` node.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/2.png)
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/3.png)

## Nodes

---

### 1- Construct Websocket

* Construct websocket
* Protocols: `ws` and `wss`
* Must be called before use any websocket function.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/4.png)

### 2- Is Websocket Valid

* Check if the websocket was built and is valid.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/6.png)

### 3- Connect

* Construct websocket
* Protocols: `ws` and `wss`
* Must be called before use any websocket function.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/5.png)

### 4- Is Connected

* Check if websocket is connected.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/7.png)

### 5- Close

* Close websocket connection.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/8.png)

### 5- Reset

* Shutdown websocket module.
* `Construct Websocket` must be called again before use any node.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/9.png)

### 5- Send

* Send string or json message.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/10.png)

### 5- Send Raw

* Send raw message.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/11.png)

## Events

* Events can be called or assigned without construct websocket.

---

### 1- On Connected

* Delegated called when websocket connect to server.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/12.png)

### 2- On Connection Error

* Delegated called when websocket failure to connect to server.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/13.png)

### 3- On Close

* Delegated called when connection is closed.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/14.png)

### 4- On Message Sent

* Delegated called when websocket receive a message.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/15.png)

### 5- On Message Sent

* Delegated called when a message be sent.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/16.png)

### 6- On Raw Message

* Delegated called when websocket receive a raw message.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/websocket/17.png)


