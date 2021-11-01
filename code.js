// stores columns of data from the weather table in lists
var cityList = getColumn("Daily Weather", "City");
var forecastNumberList = getColumn("Daily Weather", "Forecast Number");
var iconList = getColumn("Daily Weather", "Icon");
var highTempList = getColumn("Daily Weather", "High Temperature");
var lowTempList = getColumn("Daily Weather", "Low Temperature");
var conditionDescriptionList = getColumn("Daily Weather", "Condition Description");

// filtered lists
var filteredCityList = [];
var filteredIconList = [];
var filteredHighTempList = [];
var filteredLowTempList = [];
var filteredConditionDescriptionList = [];

filter();

onEvent("forecastButton", "click", function(){
  updateScreen();
});

// filters all of the lists so only the forecasts for tomorrow (forecastNumber = 1) are stored
function filter(){
  for(var i=0; i<cityList.length; i++){
    if(forecastNumberList[i] == 1){
      appendItem(filteredCityList, cityList[i]);
      appendItem(filteredIconList, iconList[i]);
      appendItem(filteredHighTempList, highTempList[i]);
      appendItem(filteredLowTempList, lowTempList[i]);
      appendItem(filteredConditionDescriptionList, conditionDescriptionList[i]);
    }
  }
}
// chooses a random number and stores as the index
// sets the display to show all lists items at that index
function updateScreen(){
  var index = randomNumber(0, filteredCityList.length-1);
  setText("highTempOutput", filteredHighTempList[index]);
  setText("lowTempOutput", filteredLowTempList[index]);
  setImageURL("iconOutput", filteredIconList[index]);
  setText("conditionOutput", filteredConditionDescriptionList[index]);
  setText("cityOutput", filteredCityList[index]);
}
