##### Proxy (Forward Proxy)
*Acts on behalf of the **Client**.*

* **Forward Proxy**: The standard term for a traditional proxy.
* **Client-side Anonymity**: Hides the original client's IP address from the destination server.
* **Outbound Traffic**: Intercepts requests going *out* from a private network to the public internet.
* **Content Filtering**: Blocks access to specific malicious or restricted websites (common in corporate or educational networks).
* **Bypassing Restrictions**: Used to circumvent geo-blocking or internet censorship (e.g., accessing region-locked content).
* **Client Caching**: Stores copies of frequently accessed web resources to save bandwidth for the client's network.

##### Reverse Proxy
*Acts on behalf of the **Server**.*

* **Server-side Anonymity**: Hides the internal backend server's IP address and architecture from the public internet.
* **Inbound Traffic**: Intercepts requests coming *in* from the internet before they reach the backend servers.
* **Load Balancing**: Distributes incoming client requests across multiple backend servers to prevent overload and ensure high availability.
* **SSL Termination / Offloading**: Handles the heavy lifting of decrypting HTTPS traffic at the edge, so backend servers can focus on business logic in plain HTTP.
* **Web Acceleration**: Caches static assets (HTML, CSS, images) and serves them directly, reducing the load on the backend.
* **WAF (Web Application Firewall)**: Often integrates with reverse proxies to filter out malicious requests (like DDoS or SQL injection) before they hit the application.
* **Popular Tools**: Nginx, HAProxy, Traefik, Apache HTTP Server.

##### The Core Difference (Summary)
* **Forward Proxy** protects the **Client**: The internet does not know *who* made the request.
* **Reverse Proxy** protects the **Server**: The client does not know *which* specific server processed the request.