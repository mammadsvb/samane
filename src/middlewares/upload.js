
function mid(req,res,next){
  console.log("---------------------");
  if(Object.keys(req.body).length)
  {
    console.log(req.video);
    const namse = Object.keys(req.body).pop();
    // console.log(namse,typeof(namse))
    req.video = {namse};
  }
  console.log(req.video);
  console.log("---------------------");
  
  next();
}

module.exports ={
  mid
}