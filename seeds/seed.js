// Import CSV files into MongoDB. 
// To import, in the terminal, go to where the CSV files are located and run each line individually that starts with mongoimport
// Source: https://kb.objectrocket.com/mongo-db/how-to-import-a-csv-into-mongodb-327


mongoimport --type csv -d backbasicsdb -c beaches --headerline --drop Beaches.csv;

mongoimport --type csv -d backbasicsdb -c gunstores --headerline --drop gunStores.csv;

mongoimport --type csv -d backbasicsdb -c nationalParks --headerline --drop NationalParks.csv;

mongoimport --type csv -d backbasicsdb -c organicFarms --headerline --drop OrganicFarms.csv;

mongoimport --type csv -d backbasicsdb -c outdoorStores --headerline --drop outdoorStores.csv;

mongoimport --type csv -d backbasicsdb -c stateParks --headerline --drop StateParks.csv;

mongoimport --type csv -d backbasicsdb -c dispensaries --headerline --drop Dispensaries.csv;





