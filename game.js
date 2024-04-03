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
        
document.addEventListener("DOMContentLoaded", function() {
    const defaultImage = document.getElementById("defaultImage");
    const changeImageButton = document.getElementById("nextButton");
      
    changeImageButton.addEventListener("click", function() {
        const randomMap = mapsAndNames[Math.floor(Math.random() * mapsAndNames.length)].flag;
        defaultImage.src = randomMap;
    });
});