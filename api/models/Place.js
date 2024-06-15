import mongoose,{Schema} from 'mongoose';


const placeSchema=new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:String,
    address:String,
    
    description:String,
    perks:[String],
    extraInfo:String,
    checkIn:Date,
    checkOut:Date,
    maxGuests:Number

});
const PlaceModel=mongoose.model('Place', placeSchema);
export default PlaceModel