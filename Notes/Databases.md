Databases are programmes that use disc or [[memory]] to perform two functions: recording data and querying data. In general, they are long-lived servers that interact with the rest of your application via network calls and protocols built on top of [[TCP]] or even HTTP.
Some databases only keep records in [[memory]], and users are aware that those records may be lost forever if the machine or process fails.

However, most databases require the persistence of those records and thus cannot use [[memory]]. This means you must save your data to disc. Because anything written to disc survives power outages or network partitions, it is used to store permanent records.
Because machines fail frequently in a large-scale system, the database processes use special disc partitions or volumes, and those volumes can be recovered even if the machine fails permanently.
