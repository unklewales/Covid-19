
//elements of interest
let globalConfirmed = document.getElementById("newconfirmed");
let globalTotalConfirm = document.getElementById("totalconfirm");
let globalNewDeaths = document.getElementById("newdeaths");
let globalTotalDeaths = document.getElementById("totaldeaths");
let globalNewRecovered = document.getElementById("newrecovered");
let globalTotalRecovered = document.getElementById("totalrecovered");
let tableBody = document.getElementById("tableBody");

//binds listener
window.addEventListener("DOMContentLoaded", getGlobalCountriesStats);

async function getGlobalCountriesStats() {
    const requestUrl = "https://api.covid19api.com/summary?";//api url
        const request = new Request(requestUrl);//request made for the above endpoint
        const response = await fetch(request);//fetch function Using its Request(above) and Response(here) objects to fetch the needed resource
        const globalCountriesStats = await response.json();//parsing response(fetched resource) as json.

        //function to set the globalcountriesstats to their corresponding field with the json passed as argument to it.
        displayGlobalCountryStats(globalCountriesStats);
}

function displayGlobalCountryStats(response) {
    globalConfirmed.innerHTML =  response.Global.NewConfirmed;
    globalTotalConfirm.innerHTML =  response.Global.TotalConfirmed;
    globalNewDeaths.innerHTML =  response.Global.NewDeaths;
    globalTotalDeaths.innerHTML =  response.Global.TotalDeaths;
    globalNewRecovered.innerHTML =  response.Global.NewRecovered;
    globalTotalRecovered .innerHTML =  response.Global.TotalRecovered;


    for (let i = 1; response.Countries.length; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${response.Countries[i].Country}</td>
        <td>${response.Countries[i].CountryCode}</td>
        <td>${response.Countries[i].Slug}</td>
        <td>${response.Countries[i].NewConfirmed}</td>
        <td>${response.Countries[i].TotalConfirmed}</td>
        <td>${response.Countries[i].NewDeaths}</td>
        <td>${response.Countries[i].TotalDeaths}</td>
        <td>${response.Countries[i].TotalRecovered}</td>
        <td>${response.Countries[i].Date}</td>`
        
        tableBody.appendChild(tr);
    }
}









