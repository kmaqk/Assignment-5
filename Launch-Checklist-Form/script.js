// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.getElementById("launchForm");
    form.addEventListener("submit", function(event) {
         pilotNameInput = document.querySelector("input[name=pilotName]");
         coPilotNameInput = document.querySelector("input[name=copilotName]");
         fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         cargoMassInput = document.querySelector("input[name=cargoMass]");
            if (isNaN(pilotNameInput.value) !== true || isNaN(coPilotNameInput.value) !== true || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
               alert("Make sure all fields are correctly filled in. Numbers only for Fuel Level and Cargo Mass.");
             } 
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready.`;
      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${coPilotNameInput.value} is ready.`;

      if (fuelLevelInput.value <= 10000 && cargoMassInput.value >= 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "Fuel is too low to begin journey."
         document.getElementById("cargoStatus").innerHTML = "Too much mass for takeoff."
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
      } else if (fuelLevelInput.value <= 10000 && cargoMassInput.value <= 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "Fuel is too low to begin journey."
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
      } else if (fuelLevelInput.value >= 10000 && cargoMassInput.value >= 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "Too much mass for takeoff."
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
      } else {
         document.getElementById("faultyItems").style.visibility = "hidden";
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
      }

      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[4].name}</li>
                    <li>Diameter: ${json[4].diameter}</li>
                    <li>Star: ${json[4].star}</li>
                    <li>Distance from Earth: ${json[4].distance}</li>
                    <li>Number of Moons: ${json[4].moons}</li>
                </ol>
                <img src="${json[4].image}">
            `
         });
      });

      event.preventDefault();
   });
});
   
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
