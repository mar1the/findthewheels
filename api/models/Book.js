import mongoose from 'mongoose';
const {Schema} = mongoose;

const BookSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    fromAddress:{
        type: String,
        required: true
    },
    toAddress:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
})

export default mongoose.model("Book", BookSchema)