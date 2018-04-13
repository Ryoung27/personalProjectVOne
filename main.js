/*Create an application that displays 10 cities you have visited from a database (stored in local storage)
Display your trips on the Dom, styled in cards. City name should appear above the image, in a larger font size, with all other details below the image
Filter the cards based on specific year visited, or all cities
Style each card with a different background color, colored by continent (North America = green)
*/

//Local Storage Database

//Access the article in the html
const cityLocationsRef = document.querySelector("#cityLocations")
/*
    The purpose of this is to represent the visited cities in the Dom.
*/

const cityDomBuilder = (year) => {

    // Create a block element to store the data in the article
    // I will also use this as the base to start the logic poritions.
    let row = document.createElement("div")
    row.className = "cityRow"

    /* 
    I am using this logic to display year based on Steve's gender section,
    but am trying to modify to fit the new goals.
    */
     if (!year || year === currentCity.year) {

        // Section first
        const citySection = document.createElement("span")
        citySection.classList = "bordered city"


         // h2 child component of section
        const cityName = document.createElement("h2")
        cityName.classList = "city__title"
        cityName.textContent = currentCity.name
        citySection.appendChild(cityName)

        //Need to put in a section for image styling !!!! SUPER IMPORTANT

        // p child component of section for attractions
        const cityAttractionOne = document.createElement("p")
        cityAttractionOne.classList = "city__attractionOne"
        cityAttractionOne.textContent = currentCity.attractionOne
        citySection.appendChild(cityAttractionOne)

        // p child component of section for attractions
        const cityAttractionTwo = document.createElement("p")
        cityAttractionTwo.classList = "city__attractionTwo"
        cityAttractionTwo.textContent = currentCity.attractionTwo
        citySection.appendChild(cityAttractionTwo)

        // p child component of section for attractions
        const cityAttractionThree = document.createElement("p")
        cityAttractionThree.classList = "city__attractionThree"
        cityAttractionThree.textContent = currentCity.attractionThree
        citySection.appendChild(cityAttractionThree)

        // p child component of section for attractions
        const cityAttractionFour = document.createElement("p")
        cityAttractionFour.classList = "city__attractionFour"
        cityAttractionFour.textContent = currentCity.attractionFour
        citySection.appendChild(cityAttractionFour)

        // p child component of section for attractions
        const cityAttractionFive = document.createElement("p")
        cityAttractionFive.classList = "city__attractionFive"
        cityAttractionFive.textContent = currentCity.attractionFive
        citySection.appendChild(cityAttractionFive)

        // Append city representation to the DOM
        row.appendChild(studentSection)

     }

}

// Don't forget to call the function

cityDomBuilder()
