import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "4ed65131aeb0cedda16daaa9f60d912e";
//initializing a component
class App extends React.Component{

//state is an object that contains jkey value pairs
  state={
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:[],
    error:undefined,
    min_temp: undefined,
    max_temp: undefined,
    date : undefined
  }
  // calling asynchronous function cause it's non blocking
 getWeather = async(e)=>{
   // preventing event bubbling, learnt it in second year
   e.preventDefault();
   // getting the values for city and country from event.target property.
   const city=e.target.elements.city.value;
   const country=e.target.elements.country.value;

   /* learnt about fetch operations from the net */
const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
const data=await api_call.json();
console.log(data);
if(city && country)
{
  console.log(data);
  // main idea was to put the api data into an array and then print out the forecast.
  // Coudnt find out how to use css on the whole array chunk which was to be printed due to the forecast
  // so printed the forecast of morning time only
  /* let descriptionArray = new Array(); <= this was giving me an error */
  // let humidityArray = [];
  //let maxTemperature = [];
  //let minTemprature = [];

  let descriptionArray = [];
  for(let i = 0 ; i < data.list.length ; i++){

      // getting all the list data into the description array
      descriptionArray.push(data.list[i].weather[0].description);

  }

  // setting the states of all 
  // basically it means setting all the  object <key,value> pairs.
  this.setState({
    temperature:data.list[0].main.temp,
    city:data.city.name,
    country:data.city.country,
    humidity:data.list[0].main.humidity,
    description:descriptionArray,
    max_temp:data.list[0].main.temp_max,
    min_temp: data.list[0].main.temp_min,
    date: data.list[0].dt_txt,
    error:""
  });
}
else{
 
  
  this.setState({
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:[],
    max_temp:undefined,
    min_temp:undefined,
    date:undefined,
    error:"Please enter the values"
  });
}
 }
  render(){

    let getDescription = this.state.description;
    let arr = getDescription.map((value,index)=>{

        return(
          <div>
            {value}
          </div>
        )
        
    });
    console.log(arr);
    return(
      <div>
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
             
             <div className=".col-xs-5 title-container">
             <Titles/>
               </div>
               <div className=".col-xs-7 form-container">
                
               <Form getWeather={this.getWeather}/>
       <Weather 
       temperature={this.state.temperature}
       city={this.state.city}
       country={this.state.country}
       description = {getDescription[0]}
       humidity={this.state.humidity}
       max_temp={this.state.max_temp}
       min_temp={this.state.min_temp}
       error={this.state.error}
       date = {this.state.date}
       
       />


</div>
             </div>
             </div>
             </div>
             </div>

      </div>
    );
  }
}

export default App;