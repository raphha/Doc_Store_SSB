# Doc_Store_SSB
SSB Queries on different aggregate modeling

This project has the SSB queries of five Document Store Database Systems executed on the five possible different aggregate modelings.

The original SSB can be found on https://github.com/electrum/ssb-dbgen.

Thought its generator it's possible to generate numerous data sizes.

After the generation, it's possible to insert the SSB data to a relational database as POSTGRESQL and convert the data to JSON format using each table as the base for the JSON document.

One sample of query to generate the aggregate modeling based on the Customer table can be seen on POSTGRESQL query.

We recomend the use of indexes to faster JSON generation.

After the generation of the JSON it's possible to insert it on Document Store Database Systems and the SSB queries can be executed and tested.

On this project the query sintax of 5 DBMS is presented: MongoDB, ElasticSearch, OrientDB, CouchDB and MarkLogic.

Each DBMS folder has 5 sub-folder with queries on different aggregate modelings, for example the sub-folder customer inside the folder MongoDB represents the SSB queries on aggregate modeling based on Customer table.

Because OrientDB has two way to organize the data, its folder contains two sub-folders called linked documents and nested documents.
