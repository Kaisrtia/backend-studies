## 1. Singleton Pattern
**Category:** Creational

### Definition
The Singleton pattern ensures that a class has only one instance throughout the application's lifecycle and provides a global point of access to that instance.

### Real-World Use Cases
- **Database Connection Pools:** Managing a limited number of database connections efficiently across the entire application.
- **Configuration Managers:** Loading application settings once from a file and sharing them across all services.

### Modern Context
In modern backend frameworks that use **Dependency Injection (DI)** (such as Spring Boot, NestJS, or .NET), you rarely implement the Singleton pattern manually using private constructors and static methods. Instead, you register the service with a "Singleton" lifecycle, and the framework's DI container automatically manages its single-instance nature.

---

## 2. Strategy Pattern
**Category:** Behavioral

### Definition
The Strategy pattern defines a family of algorithms, encapsulates each one in a separate class, and makes them interchangeable. It allows the algorithm to vary independently from the clients that use it.

### Real-World Use Cases
- **Payment Processing:** Switching between different payment methods (e.g., Credit Card, PayPal, Stripe, Crypto) dynamically at runtime based on user selection.
- **Sorting & Routing:** Selecting different paths or algorithms based on current system conditions.

### Relationship to SOLID
This pattern is the purest manifestation of the **Open/Closed Principle** (Open for extension, Closed for modification). Instead of expanding a massive `if/else` or `switch` block whenever a new business rule is added, you simply create a new strategy class implementing the common interface.

---

## 3. Factory Method Pattern
**Category:** Creational

### Definition
The Factory Method pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. It encapsulates object creation logic, removing direct `new` keyword instantiations from client code.

### Real-World Use Cases
- **User Account Creation:** Generating different types of user objects (e.g., `Admin`, `StandardUser`, `Guest`) depending on the registration context.
- **Authentication Tokens:** Generating varying types of security tokens (e.g., Access Tokens, Refresh Tokens, JWTs) depending on the authentication flow.

---

## 4. Observer Pattern
**Category:** Behavioral

### Definition
The Observer pattern defines a one-to-many dependency between objects. When one object (the **Subject**) changes its state, all its dependents (**Observers**) are notified and updated automatically.

### Real-World Use Cases
- **Notification Engines:** Sending an email, an SMS, and a push notification simultaneously when a user places a successful order.
- **Event-Driven Microservices:** Publishing an event to a message broker (like RabbitMQ or Kafka) where multiple consumer services react to that event independently.

---

## 5. Decorator Pattern
**Category:** Structural

### Definition
The Decorator pattern allows you to dynamically attach new behaviors and responsibilities to an object by placing it inside a special wrapper class that contains these behaviors, without altering the original class code.

### Real-World Use Cases
- **HTTP Middleware:** Wrapping an HTTP request handler with layers of authentication (JWT validation), logging, and rate-limiting before the request hits the main controller logic.
- **Data Streams:** Wrapping a basic file stream with buffering capabilities, and then wrapping it again with encryption or compression.

---

## Summary Roadmap

1. **Start with Singleton:** Understand object lifecycle control.
2. **Move to Strategy:** Learn how to eliminate complex conditional blocks.
3. **Learn Factory Method:** Centralize and decouple object creation.
4. **Explore Observer:** Transition into reactive and event-driven thinking.
5. **Master Decorator:** Understand how modern web frameworks handle middlewares and request processing chains.