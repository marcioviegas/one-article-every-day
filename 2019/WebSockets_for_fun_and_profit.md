# [WebSockets for fun and profit](https://stackoverflow.blog/2019/12/18/websockets-for-fun-and-profit/\?utm_source\=Iterable\&utm_medium\=email\&utm_campaign\=the_overflow_newsletter\&utm_content\=12-24-19)

* Seamless communication is a must on the modern web. As internet speeds increase, we expect out data in real time. To address this need, WebSocket, a popular communication protocol finalized in 2011, enables websites to send and receive data without delay. With WebSockets, you can build multiplayer games, chat apps, and collaboration software that work on the open web. 

* WebSocket is a technology that allows a client to establish two-way (“full-duplex”) communication with the server.

* With WebSocket, both the client and the server can trigger communication with one another, and both can send messages, at the same time

* Short polling. Just have the client ping the server repeatedly, say, every 500ms (or over some fixed delay)

* Long polling. In this method, the server receives a request, but doesn’t respond to it until it gets new data from another request.

* Another technique for sending messages is the Server-Sent Events API, which allows the server to push updates to the client by leveraging the JavaScript EventSource interface

* Moreover, the server can keep track of each client and push messages to a subset of clients. Great! With this capability we can invite all of our friends to our chat app and send messages to all of them, some of them, or only your best friend

* Both HTTP and WebSockets send messages over a TCP (Transmission Control Protocol) connection, which is a transport-layer standard that ensures streams of bytes, sent over in packets, are delivered reliably and predictably from one computer to another. So, HTTP and WebSockets use the same delivery mechanism at the packet/byte level, but the protocols for structuring the messages are different.

* In order to establish a WebSocket connection with the server, the client first sends an HTTP “handshake” request with an upgrade header, specifying that the client wishes to establish a WebSocket connection. The request is sent to a ws: or wss:: URI (analogous to http or https). If the server is capable of establishing a WebSocket connection and the connection is allowed (for example, if the request comes from an authenticated or whitelisted client), the server sends a successful handshake response, indicated by HTTP code 101 Switching Protocols.

* Once the connection is upgraded, the protocol switches from HTTP to WebSocket, and while packets are still sent over TCP, the communication now conforms to the WebSocket message format. Since TCP, the underlying protocol that transmits data packets, is a full-duplex protocol, both the client and the server can send messages at the same time. Messages can be fragmented, so it’s possible to send a huge message without declaring the size beforehand. In that case, WebSockets breaks it up into frames. Each frame contains a small header that indicates the length and type of payload and whether this is the final frame.

* Either the client or the server can send over a “close” message.

* The real-time web is evolving, and the WebSocket protocol is a crucial cog in its evolution.