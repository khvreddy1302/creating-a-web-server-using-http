// challenge to print the current temperature and precipitation for chance of the rain
// converting the temperature from celsius to fahrenheit

const request=require('request')
const url='http://api.weatherstack.com/current?access_key=e77e01e61ed600911dbe4572500d43ba&query=New%20York&units=f'

request({url:url, json:true},(error,response)=>{
    console.log(response.body.current)
    console.log("It is currently "+ response.body.current.temperature +" degrees out " +"There is "+ response.body.current.precip ," chance of rain")
    console.log("It is currently "+response.body.current.temperature+" degrees out "+"feels like "+response.body.current.feelslike+" outside.")
    
} )
