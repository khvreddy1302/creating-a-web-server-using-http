const request=require('request')
const url='API KEY'

request({url:url},(Error,Response)=>{
    // console.log(Response)
    const data=JSON.parse(Response.body)
    console.log(data)
} )
