const noteRoute= require('./note_routes').default;
module.exports = function(app, db){

    noteRoute(app,db);
    
}