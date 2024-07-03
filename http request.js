const request=require('request')
const url='https://api.weatherstack.com/current?access_key=eb39ec3f5733433ee8c0f5abcf390fb3&query=37.8267,-122.4233'

request({url:url},(Error,Response)=>{
    // console.log(Response)
    const data=JSON.parse(Response.body)
    console.log(data)
} )
