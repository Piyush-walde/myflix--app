const express=require('express');
const path=require('path');

const app=express();
const PORT=process.env.PORT || 3000;


if(process.env.NODE_ENV==="production"){
    app.use(express.static("build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'build','index.html'));
    })
}
// heroku git:remote -a piyush-frontend
// git add .
// $ git commit -am "make it better"
// $ git push heroku master



app.listen(PORT,()=>{
    console.log("Server up and running");
})