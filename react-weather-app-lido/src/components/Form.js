import React from "react";

const Form = props =>(
    /* got this method of calling forms from google so credit goes to google */
<form onSubmit={props.getWeather}>
            
                   <input type="text" name="city" placeholder="city"/>
                   <input type="text" name="country" placeholder="country"/>
                   <button> Get Weather</button>
                   </form>
);
export default Form;