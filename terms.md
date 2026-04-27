- MAC (media access control) -> identify every single internet device in physical level

##### NAT:
- IP private (inside LAN) just use to identify device in the same LAN; all of them will communicate with WAN by a unique ip called IP public; it form IP:port
- Basic flow: dvA --data-> routerA --immediate router-> routerB -> parse data, use NAT Table to determine what device can be recieved these data packs --> serverA
- How it work: routerA after recieve data from dvA (from an application use port X to send data), change to IP public + randomize a port Y and write to NAT table "whenever recieve data sent to port Y, it should send to application use port X in dvA" (but this information just was known by router, not server so we still need to attach destination port in Transport layer). Similary for routerB, if an application in serverA (listen on port X), it must ask routerB to create a port mapping, but in this case, because serverA is a server, we must manually config (Port Forwarding / DNAT) on router and public this port for client
- But in reality, we use an immediate server called Reverse Proxy (e.g Nginx, Apache, ...) listen port 80 (HTTP) or 443 (HTTPs) (default in NAT table) then send data it retrieved to port X that was used by serverA

##### Port: for example, we have string preseted that 3005:6969, depend on the context so it will have a different meaning
1. Meaning of port: basicly, it's a number to indentify what application is it? Ex: an device with ip address XX may have lots of application in it and XX:YY means that an application is listening on port YY
1. Port mapping (docker)
- Basicly we create a tunnel to map 2 door together, first side is out world and other side is docker virtual machine
2. Port forwarding (NAT)

##### OSI Model:
1. Layer 7: Application: internet device requests sth via HTTP protocal -> server prepares a big "response string" -> convert to binary
2. Layer 6: Presentation (optional): encrypt response if necessary (TLS or HTTPS); compress datas
3. Layer 5: Session: establish session id and tag the response to identify working session between 2 devices (hence, we assume that the session id is a tritangle)
4. Layer 4: Transport: break data of above layer into segmentations then tag it with some informations, one of the most important is port of application that the client is communicating (destination port) and the port that the application of client use to send/retrieve data
5. Layer 3: Network: continue to attach the data with even more informations one of the most important is ip address of sender and retriever; routing
6. Layer 2: Data Link: separate data once again into several frames, attach MAC ip of sender and reciever, we have 2 cases:
    - S & R in a same LAN, use ARP protocal -> send broadcast message to ask all member that "who have this IP address please send me your MAC ip" -> reply -> ARP cache for the next time
    - S & R in different LAN -> R will be default gateway and it will be authorized to send datas 
7. Layer 1: Physical: datas will be converted to binary and do data transmission