const mapsAndNames = [];
const apiUrl = 'https://restcountries.com/v3.1/all';
fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch");
        }
        return response.json();

    })
    .then(data => {
        data.forEach(item => {
          const countryInfo = {
            commonName: item.name.common,
            officialName: item.name.official,
            flag: item.flags.png
          };
          mapsAndNames.push(countryInfo);
        });
    
        console.log(mapsAndNames); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
        
randomMap = -1;
var count = 0;

document.addEventListener("DOMContentLoaded", function() {
    const defaultImage = document.getElementById("defaultImage");
    const changeImageButton = document.getElementById("nextButton");
      
    changeImageButton.addEventListener("click", function() {
        const randomMap = mapsAndNames[Math.floor(Math.random() * mapsAndNames.length)].flag;
        defaultImage.src = randomMap;
    });
});

const input = document.getElementbyId("userInput");
const guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", function() {
    if (mapsAndNames[randomMap].officialName.toString().equalsIgnoreCase(input.value) || 
    mapsAndNames[randomMap].commonName.toString().equalsIgnoreCase(input.value))
    {
        count++;
        document.getElementById("score").innerHTML = (String)(count);
    }
    else {
        document.getElementById("score").innerHTML = "wrong";
    }
});