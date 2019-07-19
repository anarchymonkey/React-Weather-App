import React from "react";

// render the properties which was set in the app.js file and dump it here
// learnt about it in the free code camp part of the video which is stateless transfer
// properties bind the rendered object with the function
const Weather = (props) =>{
    return(
        <div>
                        {
                           props.date && <p className="weather__key"> Year and Date:
                           <span> {props.date}</span></p>
                        }
                        {
                            props.city && props.country && <p className="weather__key">  Location:
                            <span>{props.city}, Country:{props.country}</span></p>
                        }
        
                       {
                           props.temperature && <p className="weather__key">Temperature: 
                               <span> {props.temperature}</span></p>
                       }

                       {
                           props.max_temp && <p className="weather__key">Max_Temperature:
                               <span> {props.max_temp}</span></p>
                       }
                       {
                           props.min_temp && <p className="weather__key">Min_Temperature:
                                <span> {props.min_temp} </span></p>
                       }
                     
                       {
                           props.humidity && <p className="weather__key"> Humidity:
                               <span> {props.humidity}</span></p>
                       }
                       {
                           props.description && <p className="weather__key"> Conditions:
                               <span> {props.description}</span></p>
                       }
                       
                         {
                             props.error && <p className="weather__error">{props.error}</p>
                         }
       </div>
    );
}





// class Weather extends React.Component{
//     render()
//     {
//         return(

//             <div>
//                 {this.props.city && this.props.country && <p>  Location:{this.props.city}, Country:{this.props.country}</p>}

//               {this.props.temperature && <p>Temperature:  {this.props.temperature}</p>}
             
//               {this.props.humidity && <p> Humidity: {this.props.humidity}</p>}
//               {this.props.description && <p> Conditions:  {this.props.description}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}
//                  </div>
//         );
//     }
// };

export default Weather;