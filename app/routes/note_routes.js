var ObjectID= require('mongodb').ObjectID

module.exports= function(app,db){
    // this is to get a all notes 
app.get('/notes', (req, res) => {
      db.db().collection('notes').find({}).toArray(function (err, result) {
          if (err) {
              res.send({ 'error': 'An error has Occured while getting data' })
          } else {
              res.send(result)
          }
      })
 });

 // this is to delete a note
app.delete('/notes/:id',(req,res)=>{

    const id=req.params.id;
const details ={'_id':new ObjectID(id)};

db.db().collection('notes').remove(details,(err,item)=>{

if(err){

res.send({'error':'An error has ocurred'});
}else{
    res.send('Note'+id+ 'deleted');

}


});

});
// this is to update a note
app.put('/notes/:id',(req,res)=>{

    const id=req.params.id;
const details ={'_id':new ObjectID(id)};
const note={ text: req.body.body, title:req.body.title};
db.db().collection('notes').update(details,note,(err,item)=>{

if(err){

res.send({'error':'An error has ocurred'});
}else{
    res.send(item);

}


});

});

// app.get('/notes/:id',(req,res)=>{

//     const id=req.params.id;
// const details ={'_id':new ObjectID(id)};

// db.db().collection('notes').findOne(details,(err,item)=>{

// if(err){

// res.send({'error':'An error has ocurred'});
// }else{
//     res.send(item);

// }


// });

// });


// this is to add a note
    app.post('/notes',(req,res)=>{
const note={ text: req.body.body, title:req.body.title};
db.db().collection('notes').insert(note, (err,result)=>{
if(err){

res.send({'error':'An error has ocurred'});
}else{
    res.send(result.ops[0]);
}

});

    });
};