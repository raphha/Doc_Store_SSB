# Doc_Store_SSB
SSB Queries on different aggregate modeling

This project has the SSB queries of five Document Store Database Systems executed on the five possible different aggregate modelings.

The original SSB can be found on https://github.com/electrum/ssb-dbgen.

Thought its generator it's possible to generate numerous data sizes.

After the genarator of data, it's possible to insert the SSB data to a relational database as POSTGRESQL and convert the data to JSON format using each table as a root of the JSON document.

One sample of query can be seen on POSTGRESQL query.

Whe recomend the use of indexes to faster JSON genaration.

After the generation of the JSON it's possible to insert it on Document Store Database and the SSB queries can be executed and tested.

On this project the query sintax of 5 DBMS is presented: MongoDB, ElasticSearch, OrientDB, CouchDB and MarkLogic.

Each DBMS folder has 5 sub-folder with queries on different aggregate modelings.
