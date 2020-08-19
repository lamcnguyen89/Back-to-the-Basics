const OutdoorStores = require("../models/OutdoorStores")


mongoimport --type csv -d backbasicsdb -c beaches --headerline --drop Beaches.csv;

mongoimport --type csv -d backbasicsdb -c gunstores --headerline --drop gunStores.csv;

mongoimport --type csv -d backbasicsdb -c nationalParks --headerline --drop NationalParks.csv;

mongoimport --type csv -d backbasicsdb -c organicFarms --headerline --drop OrganicFarms.csv;

mongoimport --type csv -d backbasicsdb -c outdoorStores --headerline --drop outdoorStores.csv;

mongoimport --type csv -d backbasicsdb -c stateParks --headerline --drop StateParks.csv;

mongoimport --type csv -d backbasicsdb -c weed --headerline --drop Weed.csv;
