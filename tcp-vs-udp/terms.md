##### Stateful & Stateless
- Basic observation: if your server corrupts/restarts while clients are connecting and then runs again without confused of clients -> stateless
##### TCP
- TCP is a protocol designed for layer Transport in both OSI model and TCP/IP model (an instance of abtract term Transport)
- Pros:
    + Acknowledgment
    + Guaranteed delivery
    + Connection based
    + Congestion control
    + Ordered packets
- Cons:
    + Larger packets
    + More bandwidth
    + Slower than udp
    + Stateful
    + Server memory (DOS)
- Code example with Nodejs and Telnet
##### UDP
- Cons:
    + No acknowledgment
    + No guaranteed delivery
    + Connectionless
    + No congestion control
    + No ordered packets
    + Security
- Pros:
    + Smaller packets
    + Less bandwidth
    + Faster than TCP
    + Stateless
- Code example with Nodejs and netcat