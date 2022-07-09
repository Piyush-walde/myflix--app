const jwt=require("jsonwebtoken");



module.exports=function verifyToken(req,res,next)
{
  if(req.headers.authorization!==undefined)
  {
    let token=req.headers.authorization.split(" ")[1]; // we got the token 

    jwt.verify(token,"secretekey",(err,data)=>{
  
      if(err===null){
        next();  
      }
      else{
        res.send({message:"incorrect token please login again"});
      }

    })



  }
  else
  {
    res.send({message:"Authorization header is required"});
  }


}
