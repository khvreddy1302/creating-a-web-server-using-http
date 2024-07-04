// challenge to print the current temperature and precipitation for chance of the rain

const request=require('request')
const url='http://api.weatherstack.com/current?access_key=e77e01e61ed600911dbe4572500d43ba&query=New%20York'

request({url:url, json:true},(error,response)=>{
    console.log("It is currently "+ response.body.current.temperature +" degrees out " +"There is "+ response.body.current.precip ," chance of rain")

} )
