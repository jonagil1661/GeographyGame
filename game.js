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
   var x = 0;
   var y = 0;
      
document.addEventListener("DOMContentLoaded", function() {
        const scoreChange = document.getElementById("num");
        const defaultImage = document.getElementById("image");
        const changeImageButton = document.getElementById("guessButton");
        const answerKey = document.getElementById("answer");
        let randomCountry;
    
   changeImageButton.addEventListener("click", function() {
        if (y < 1) {
            randomCountry = mapsAndNames[Math.floor(Math.random() * mapsAndNames.length)];
            const randomMap = randomCountry.flag;            
            defaultImage.src = randomMap;
            y++;
        }
        document.getElementById("num").textContent = x;
        document.getElementById("answerbox").textContent = randomCountry.commonName;
       if (document.getElementById('userInput').value = (randomCountry.commonName || randomCountry.officialName)) {
        document.getElementById("num").textContent = ++x;    
        x = x + 1; 
        randomCountry = mapsAndNames[Math.floor(Math.random() * mapsAndNames.length)];
        const randomMap = randomCountry.flag;
        defaultImage.src = randomMap;
    }   
   });
});
