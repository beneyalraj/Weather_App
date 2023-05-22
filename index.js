console.log("hello boys");

const API_KEY = "a06e17df2bae26236556dd7e446d7cd9";

function renderWeatherInfo(data){

        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} ˚C`

        document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){

    try{
        let city = "ooty";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        console.log("Weather data:-> " , data);

        renderWeatherInfo(data);

    }catch(err){

    }
    

}

async function getCustomWeatherDetails(){
    try{
        let latitude = 10;
        let longitude = 0;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data = await result.json();

        console.log(data);

    }catch(err){
        console.log("Error Found" , err);
    }
    
}

function switchedTab (clickedTab){

    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");


        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");

        }

        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();

        }
    }


}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log("No geolocation support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}