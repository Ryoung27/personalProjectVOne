/*Create an application that displays 10 cities you have visited from a database (stored in local storage)
Details for each city
a. City name
b. Year you visited
c. Image of city
d. List of top 5 attractions
Display your trips on the Dom, styled in cards. City name should appear above the image, in a larger font size, with all other details below the image
Filter the cards based on specific year visited, or all cities
Style each card with a different background color, colored by continent (North America = green, South America = blue, Asia = purple, Antarctica = yellow, Europe = orange, Africa = red, Australia = brown)
*/

//Local Storage Database

//Define the database as an object
const cityDatabase = {}

// City table in database
cityDatabase.cities = []

//Add cities to the database
cityDatabase.cities.push(
    {
        name: "Knoxville",
        year: "Every year",
        image: "",
        attractOne: "Market Square",
        attractTwo: "Gay Street",
        attractThree: "Sunsphere",
        attractFour: "The University of Tennessee",
        attractFive: "IJAM"
    },
    {
        name: "Washington D.C.",
        year: "2013",
        image: "",
        attractOne: "The Smithsonian",
        attractTwo: "The Washington Monument",
        attractThree: "The World War Two Monument",
        attractFour: "The White House",
        attractFive: "Arlington"
    },
    {
        name: "New York City",
        year: "2013",
        image: "",
        attractOne: "Nintendo World",
        attractTwo: "The Statue of Liberty",
        attractThree: "Pizza Resturants",
        attractFour: "Rockefeller Plaza",
        attractFive: "Central Park"
    },
    {
        name: "San Francisco",
        year: "2017",
        image: "",
        attractOne: "The Ocean",
        attractTwo: "A curvy road",
        attractThree: "The Beach",
        attractFour: "The whole place",
        attractFive: "Steep hills"
    },
    {
        name: "Kansas City",
        year: "2015",
        image: "",
        attractOne: "The Farmer's Market",
        attractTwo: "The Light Rail",
        attractThree: "Jack Stacks",
        attractFour: "Overland Park",
        attractFive: "The World War One Monument"
    },
    {
        name: "Omaha",
        year: "2017",
        image: "",
        attractOne: "Coffee Shops",
        attractTwo: "Downtown"
    },
    {
        name: "Des Moines",
        year: "2017",
        image: "",
        attractOne: "Downtown",
        attractTwo: "The Capital",
        attractThree: "The roads"
    },
    {
        name: "Cumberland Gap",
        year: "Every year",
        image: "",
        attractOne: "Cumberland Gap National Historical Park",
        attractTwo: "The Iron Furnance",
        attractThree: "Maxwell's places"
    },
    {
        name: "Atlanta",
        year: "2011",
        image: "",
        attractOne: "Turner Field",
        attractTwo: "The Varsity",
        attractThree: "Six Flags",
        attractFour: "The interstate",
    }
)

// Save database to local storage
localStorage.setItem(
    "cityDatabase",
    JSON.stringify(cityDatabase)
)
