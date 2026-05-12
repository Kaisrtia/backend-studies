##### Core Concepts (The Big Picture)
* **Concurrency**: Dealing with multiple tasks at once by rapidly switching between them (Async, Multithreading).
* **Parallelism**: Executing multiple tasks at the exact same physical time across multiple CPU cores (Multiprocessing).
* **I/O-Bound**: Tasks that spend most of their time waiting for Input/Output (network requests, database queries, reading files).
* **CPU-Bound**: Tasks that spend most of their time doing heavy mathematical computations (video encoding, data analysis).

##### Asynchronous Programming (Async/Await)
*Single-threaded, cooperative multitasking.*

* **Non-blocking I/O**: The program does not stop and wait for a task to finish; it moves on to another task while waiting.
* **Event Loop**: The engine that manages and schedules the execution of async tasks, checking if background operations are ready.
* **Coroutines / Promises / Futures**: Programming constructs used to handle values that will be available in the future.
* **Low Overhead**: Extremely lightweight memory footprint compared to threads or processes. Context switching happens at the application level, not the OS level.
* **Best for**: High-concurrency network servers (Node.js, FastAPI), web scraping, chat applications.

##### Multithreading
*Multiple threads of execution living inside a single process.*

* **Shared Memory Space**: All threads within the process share the same variables and memory heap.
* **Context Switching (OS Level)**: The Operating System decides when to pause one thread and resume another.
* **Race Conditions**: Bugs that occur when multiple threads try to read/write the same shared data simultaneously.
* **Thread Safety**: Writing code that prevents data corruption (using **Locks**, **Mutexes**, or **Semaphores**).
* **GIL (Global Interpreter Lock)**: A specific keyword in Python (CPython) that prevents multiple native threads from executing Python bytecodes at once, limiting true parallelism.
* **Best for**: I/O-bound tasks in languages that support true multithreading (Java, C++, C#).

##### Multiprocessing
*Spawning entirely separate, independent OS processes.*

* **True Parallelism**: Utilizes multiple CPU cores simultaneously.
* **Isolated Memory Space**: Each process gets its own dedicated chunk of memory. They cannot accidentally corrupt each other's data (No race conditions on variables).
* **IPC (Inter-Process Communication)**: Since memory is isolated, processes must use specific channels (Queues, Pipes, Sockets) to share data.
* **High Overhead**: Creating a new process is slow and consumes significantly more RAM than creating a thread or coroutine.
* **Best for**: CPU-bound tasks, machine learning, heavy image/video processing, large-scale data crunching.

##### The Main Difference (Analogy Summary)
* **Async**: One chef cooking a 3-course meal alone. They put the soup on the stove (I/O) and immediately start chopping onions instead of staring at the pot.
* **Multithreading**: Multiple chefs working in the *same* kitchen, sharing the *same* ingredients and knives. They must communicate to avoid bumping into each other (Locks).
* **Multiprocessing**: Multiple chefs working in entirely *separate* kitchens. They don't share anything, but they can cook massive amounts of food in parallel (True Parallelism).