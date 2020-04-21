const noteRoute= require('./note_routes');
module.exports = function(app, db){

    noteRoute(app,db);
    
}