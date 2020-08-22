// Import CSV files into MongoDB. 
// To import, in the terminal, go to where the CSV files are located and run each line individually that starts with mongoimport
// Source: https://kb.objectrocket.com/mongo-db/how-to-import-a-csv-into-mongodb-327

mongoimport --type csv -d backbasicsdb -c places --headerline --drop places.csv;





