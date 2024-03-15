const temperature=document.querySelector(".temp");
const city=document.querySelector(".time_location p");
const date=document.querySelector(".time_location span");
const emoji=document.querySelector(".weather_condition p img");
const weather=document.querySelector(".weather_condition span");
const search=document.querySelector(".searchField");
const form=document.querySelector("form");
// console.log(search.value);
let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];
 let day=new Date();
 let new_day=day.getDay();
 let exactday=days[new_day];
 console.log(exactday);
let target='mumbai';
function search_form(e)
{
   e.preventDefault();
   target=search.value;
   fetchData(target);
}
form.addEventListener("submit",search_form);
// {
//    e.preventDefault();
//    updateDom(currentTemp,locationName,localTime,conditionEmoji,currentCondition);
// }

async function fetchData(target)
{
   try{
      const url =
      `https://api.weatherapi.com/v1/current.json?key= 5d54df1d472941c3b0475532242501 &q=${target}&aqi=no`;
      const response=await fetch(url);
      const data=await response.json();
      console.log(data);
      let currentTemp=data.current.temp_c;
      let currentCondition=data.current.condition.text;
      let locationName=data.location.name;
      let localTime=data.location.localtime;
      let conditionEmoji=data.current.condition.icon;
      console.log(currentTemp,currentCondition,locationName,localTime,conditionEmoji);
     updateDom(currentTemp,locationName,localTime,conditionEmoji,currentCondition);

   }
   catch(error){
      console.log(error);
   }


}
function updateDom(temp,location_name,time,emojis,conditions){
   temperature.innerText=temp;
   city.innerText=location_name;
   date.innerText=`${exactday} , ${time}`;
   emoji.src=emojis;
   weather.innerText=conditions;
}
