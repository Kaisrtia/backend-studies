# Keywords: ACID Transactions
*(The Four Pillars of Reliable Database Transactions)*

## 1. Atomicity (The "All-or-Nothing" Rule)
*Ensures that a transaction is treated as a single, indivisible logical unit of work.*

* **Commit**: Successfully saving all operations within the transaction to the database.
* **Rollback / Abort**: Reverting all changes back to the original state if any single operation fails.
* **Indivisible / Atomic Unit**: The transaction cannot be partially completed; it either fully succeeds or entirely fails.

## 2. Consistency (The "Validity" Rule)
*Ensures the database transitions from one valid state to another valid state.*

* **Constraints**: Database rules applied to data (e.g., Primary Keys, Foreign Keys, UNIQUE, CHECK).
* **Referential Integrity**: Ensuring relationships between tables remain valid (often via Triggers or Cascades).
* **Valid State**: The guarantee that the data will strictly follow all defined schemas and business rules after a transaction is committed.

## 3. Isolation (The "Concurrency" Rule)
*Ensures that concurrent transactions execute independently without interfering with each other.*

* **Concurrency Control**: Mechanisms to manage multiple users/systems accessing the database simultaneously.
* **Isolation Levels**: The degree to which transactions are isolated from each other:
    * *Read Uncommitted* (Lowest)
    * *Read Committed*
    * *Repeatable Read*
    * *Serializable* (Highest/Strictest)
* **Read Phenomena**: Anomalies that occur when isolation is too low:
    * *Dirty Read*: Reading uncommitted data from another transaction.
    * *Non-Repeatable Read*: Data changes upon reading the same row twice.
    * *Phantom Read*: New rows appear or disappear during a transaction.
* **Locking**: Row-level or table-level locks to prevent simultaneous writes.
* **MVCC (Multi-Version Concurrency Control)**: A popular, lock-free approach to handle isolation by keeping snapshots of data at different points in time.

## 4. Durability (The "Permanence" Rule)
*Ensures that once a transaction is committed, its changes are permanent, even in the event of a system crash or power failure.*

* **Non-volatile Storage**: Data must be written to physical disks (HDD/SSD), not just kept in temporary memory (RAM).
* **WAL (Write-Ahead Logging)**: A standard technique where database modifications are written to a secure log file *before* they are applied to the main database tables.
* **Crash Recovery**: The system's ability to use the WAL or transaction logs to restore all committed transactions after a fatal error or reboot.