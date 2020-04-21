module.exports= function(app,db){

    app.post('/notes',(req,res)=>{
//we will create a note here
console.log(req.body)
res.send('Hello')
    });
};