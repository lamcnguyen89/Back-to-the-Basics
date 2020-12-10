// Import CSV files into MongoDB local database. 
// To import, in the terminal, go to where the JSON files are located and run each line individually that starts with mongoimport
// Source: https://kb.objectrocket.com/mongo-db/how-to-import-a-csv-into-mongodb-327

mongoimport --jsonArray -d backbasicsdb -c places --drop mapplaces.json


// To import File into Mongo Atlas Database (Note I had to convert the CSV file to a JSON file):
// Source 1 (Issue with importing a Json file): https://stackoverflow.com/questions/58150528/mongodb-atlas-mongoimport-issues-cannot-decode-array-into-a-d
// Source 2 (Using Mongoimport to import data into local and/or remote database): https://docs.atlas.mongodb.com/import/mongoimport
// Source 3 (converts CSV to JSON): https://csvjson.com/
mongoimport --uri "mongodb+srv://backtobasics:backtobasics@cluster0.v5e1r.mongodb.net/backtobasics?retryWrites=true&w=majority" --collection places --drop --jsonArray mapplaces.json






