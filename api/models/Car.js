import mongoose from 'mongoose';
const {Schema} = mongoose;

const CarSchema = new mongoose.Schema({
    carName:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    }, 
    model:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    speed:{
        type: String,
        required: true
    },
    gps:{
        type: String,
        required: true
    },
    seatcapacity:{
        type:  Number,
        required: true
    },
    automatic:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    photos:{
        type: [String],
    },
    rating:{
        type: Number,
        min: 0,
        max:5
    },
    availability:{
        type: [String],
        
    },
    cheapestPrice:{
        type: Number,
        
    },  
    carAvail: {
        type: Boolean,
    }
})

export default mongoose.model("Car", CarSchema)