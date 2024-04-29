# HTTP

## Create HTTP object

* 1- Right click in any blueprint graph to open search box.
* 2- Search by `InternetProtocolSubsystem`.
* 3- Search by `CreateHTTPObject` from `InternetProtocolSubsystem` node.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/2.png)
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/1.png)

## Nodes

---

### 1- Construct HTTP

* Construct HTTP.
* Must be called before use any http function.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/2.png)

### 2- Is Valid

* Check if the http was built and is valid.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/3.png)

### 3- Reset

* Shutdown http module.
* `ConstructHTTP` must be called again before use any node.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/4.png)

### 4- Set URL

* Set url.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/5.png)

### 5- Get URL

* Get url.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/6.png)

### 6- Encode URL

* Encode url to ANSII.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/7.png)

### 7- Decode URL

* Decode url from ANSII.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/8.png)

### 8- Set Verb

* Set request metod.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/9.png)

### 9- Get Verb

* Get request metod.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/10.png)

### 10- Set Parameters

* Set url parameters.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/11.png)

### 11- Get Parameter

* Get get parameter value by name.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/12.png)

### 12- Get All Parameters

* Get all url parameters.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/13.png)

### 13- Append to Header

* Add headers.
* Reseting headers you need to call node `Reset` and reconstruct http.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/14.png)

### 14- Get Header

* Get header value by name.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/15.png)

### 15- Get Header

* Get all headers.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/16.png)

### 16- Set Content As String

* Sets the content of the request as a string encoded as UTF8.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/20.png)

### 17- Set Content

* Sets the content of the request (optional data). Usually only set for POST requests.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/17.png)

### 18- Get Content

* Get content of the request. 
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/18.png)

### 19- Get Content Lenght

* Get content size in bytes.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/19.png)

### 20- Get Content Type

* Get type of content.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/21.png)

### 21- Set Timeout

* Set request timeout.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/22.png)

### 22- Get Timeout

* Get request timeout.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/24.png)

### 23- Clear Timeout

* Reset timeout.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/23.png)

### 24- Process Request

* Called to begin processing the request.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/25.png)

### 25- Cancel Request

* Called to cancel a request that is still being processed.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/26.png)

### 26- Tick Request

* Use to tick request
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/27.png)

## Events

* Events can be called or assigned without construct websocket.

---

### 1- On Completed

* Delegate called when the request is complete.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/28.png)

### 2- On Progress

* Delegate called to update the request/response progress.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/29.png)

### 3- On Will Retry

* Delegate called when the request will be retried.
* ![Image title](https://raw.githubusercontent.com/Cesio137/InternetProtocol-Documentation/gh-pages/media/img/http/30.png)


