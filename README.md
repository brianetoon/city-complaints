# City Complaints Exercise

## Part 1

1. Create a new React app called "city_complaints"
2. Implement Router (npm i react-router-dom)
3. Create a Home and Borough page and a Navbar component
4. Setup Routes for Home and Borough (the Borough Route uses a URL parameter)
5. Setup your Navbar to link to Home and Borough
6. In Borough, setup a useEffect that fetches data based on the URL parameter
7. Map over that data and display at least the complaint description
8. When clicking on a specific complaint, show at least the police response
9. Create an input where the user can limit the number of results received

## Part 2

1. Finish the City Complaints lab from the morning if you haven't already
2. Add a Tracking page where you can keep track of specific complaints that you've saved
3. Each complaint result should have an option to “Track” it (to save it for later), unless it's already been saved
4. From the Tracking page, you should also be able to “Remove” specific complaints as well
5. Use a state management library like Redux or Zustand for tracking/saving complaints 

## API

API (endpoint example):
 `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX&$limit=1`

API (documentation):
 https://dev.socrata.com/foundry/data.cityofnewyork.us/erm2-nwe9
