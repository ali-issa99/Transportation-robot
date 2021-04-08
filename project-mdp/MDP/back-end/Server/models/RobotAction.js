const mongoose = require('mongoose');
const Schema = mongoose.Schema;


require('mongoose-currency').loadType(mongoose);


const robobtactionSchema = new Schema({
    mode:{
    type:String,
    required:true

    },
    x: {
        type:Number,
        required: true,
    },
    y: {
        type:Number,
        required: true,
    },
   

},
{
    timestamps: true
});


var action = mongoose.model('robotaction', robobtactionSchema);

module.exports = action;