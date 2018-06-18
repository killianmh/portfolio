var mongoose = require("mongoose");

//Set mongoose schema constructor equal to Schema:
var Schema = mongoose.Schema;

//Create a ProjectSchema object using Mongoose Schema constructor
var ProjectSchema = new Schema({
    id: {
        type: String,
        unique: true
    },    
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    technologies: {
        type: Array
    },
    slickImage1: {
        type: String
    },
    slickImage2: {
        type: String
    },
    slickImage3: {
        type: String
    }
})

//Create the model using Mongoose model method
var Project = mongoose.model("Project", ProjectSchema);

//Export the model
module.exports = Project;
